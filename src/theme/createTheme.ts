import {
  DENSITY,
  ELEVATION,
  MOTION,
  RADIUS,
  normalizeMotion,
  type ThemeDensity,
  type ThemeElevation,
  type ThemeMode,
  type ThemeMotion,
  type ThemeMotionLegacy,
  type ThemeRadius,
} from './axes'
import {
  DESIGNS,
  resolveDesign,
  type DesignKit,
  type ThemeDesign,
  type ThemePersonality,
} from './designs'

export type {
  ThemeDensity,
  ThemeElevation,
  ThemeMode,
  ThemeMotion,
  ThemeRadius,
} from './axes'
export type { ThemeDesign, ThemePersonality } from './designs'

export type CreateThemeOptions = {
  /** Brand accent hex, e.g. `#5B5FFF` */
  accent?: string
  /**
   * Official Design Kit — changes colors, radius, shadows, spacing, motion, typography, surfaces.
   * @default 'linear'
   */
  design?: ThemeDesign
  /**
   * @deprecated Use `design`. Mapped: pomikit/minimal→linear, elegant→editorial, glass→glass, playful→playful.
   */
  personality?: ThemePersonality
  radius?: ThemeRadius
  density?: ThemeDensity
  motion?: ThemeMotion | ThemeMotionLegacy
  elevation?: ThemeElevation
  mode?: ThemeMode
}

export type PomikitTheme = {
  vars: Record<string, string>
  attrs: {
    'data-pomi-design': ThemeDesign
    /** @deprecated Mirror of `data-pomi-design` for migration */
    'data-pomi-personality': ThemeDesign
    'data-pomi-mode': 'light' | 'dark'
    'data-pomi-elevation': ThemeElevation
    'data-pomi-motion': ThemeMotion
  }
  resolved: {
    accent: string
    design: ThemeDesign
    /** @deprecated Same as `design` */
    personality: ThemeDesign
    radius: ThemeRadius
    density: ThemeDensity
    motion: ThemeMotion
    elevation: ThemeElevation
    mode: ThemeMode
    colorScheme: 'light' | 'dark'
  }
}

function clampChannel(n: number) {
  return Math.max(0, Math.min(255, Math.round(n)))
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const raw = hex.replace('#', '').trim()
  const full =
    raw.length === 3
      ? raw
          .split('')
          .map((c) => c + c)
          .join('')
      : raw
  if (!/^[0-9a-fA-F]{6}$/.test(full)) return null
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  }
}

function mix(hex: string, toward: 'white' | 'black', amount: number): string {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  const t = toward === 'white' ? 255 : 0
  const r = clampChannel(rgb.r + (t - rgb.r) * amount)
  const g = clampChannel(rgb.g + (t - rgb.g) * amount)
  const b = clampChannel(rgb.b + (t - rgb.b) * amount)
  return `#${[r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('')}`
}

export function resolveColorScheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode !== 'system') return mode
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function buildShadow(
  isDark: boolean,
  strength: number,
  elevation: ThemeElevation,
): { shadow: string; shadowLg: string } {
  const s = strength * ELEVATION[elevation].strength
  if (elevation === 'flat' || s < 0.3) {
    return {
      shadow: isDark ? '0 1px 0 rgb(255 255 255 / 4%)' : '0 1px 0 rgb(0 0 0 / 0.04)',
      shadowLg: isDark ? '0 1px 0 rgb(255 255 255 / 5%)' : '0 1px 0 rgb(0 0 0 / 0.05)',
    }
  }
  if (elevation === 'floating') {
    return {
      shadow: isDark
        ? `0 1px 2px rgb(0 0 0 / calc(0.35 * ${s})), 0 8px 28px rgb(0 0 0 / calc(0.38 * ${s}))`
        : `0 1px 2px rgb(0 0 0 / calc(0.04 * ${s})), 0 10px 28px rgb(0 0 0 / calc(0.07 * ${s}))`,
      shadowLg: isDark
        ? `0 1px 2px rgb(0 0 0 / calc(0.4 * ${s})), 0 16px 40px rgb(0 0 0 / calc(0.48 * ${s}))`
        : `0 1px 2px rgb(0 0 0 / calc(0.04 * ${s})), 0 16px 40px rgb(0 0 0 / calc(0.1 * ${s}))`,
    }
  }
  return {
    shadow: isDark
      ? `0 1px 2px rgb(0 0 0 / calc(0.28 * ${s}))`
      : `0 1px 2px rgb(0 0 0 / calc(0.045 * ${s}))`,
    shadowLg: isDark
      ? `0 1px 2px rgb(0 0 0 / calc(0.32 * ${s})), 0 8px 24px rgb(0 0 0 / calc(0.38 * ${s}))`
      : `0 1px 2px rgb(0 0 0 / calc(0.04 * ${s})), 0 8px 24px rgb(0 0 0 / calc(0.07 * ${s}))`,
  }
}

function resolveMotionTokens(
  pack: DesignKit,
  motionOption: ThemeMotion | ThemeMotionLegacy | undefined,
): DesignKit['motionProfile'] & { key: ThemeMotion } {
  const key = normalizeMotion(motionOption) ?? pack.motion
  if (key === 'none') {
    return {
      key,
      fast: '0ms',
      mid: '0ms',
      slow: '0ms',
      ease: 'linear',
      easeOut: 'linear',
      lift: '0px',
      press: '1',
      enterY: '0px',
      enterScale: '1',
    }
  }
  // Explicit axis override: durations from MOTION table, identity from kit
  if (motionOption !== undefined) {
    const axis = MOTION[key]
    return {
      key,
      fast: axis.fast,
      mid: axis.mid,
      slow: axis.slow,
      ease: pack.motionProfile.ease,
      easeOut: pack.motionProfile.easeOut,
      lift: axis.lift,
      press: axis.press,
      enterY: pack.motionProfile.enterY,
      enterScale: pack.motionProfile.enterScale,
    }
  }
  return { key, ...pack.motionProfile }
}

function withAlpha(color: string, alpha: number): string {
  if (alpha >= 1) return color
  if (color.startsWith('rgb')) return color
  return `color-mix(in srgb, ${color} ${Math.round(alpha * 100)}%, transparent)`
}

export function createTheme(options: CreateThemeOptions = {}): PomikitTheme {
  const design = resolveDesign(options.design, options.personality)
  const pack = DESIGNS[design]
  const motionTokens = resolveMotionTokens(pack, options.motion)
  const radius = options.radius ?? pack.radius
  const density = options.density ?? pack.density
  const elevation = options.elevation ?? pack.elevation
  const mode = options.mode ?? 'light'
  const accent = options.accent ?? pack.accent
  const colorScheme = resolveColorScheme(mode)
  const isDark = colorScheme === 'dark'
  const surfaces = isDark ? pack.dark : pack.light

  const radiusBase = RADIUS[radius]
  const useKitRadii = Boolean(pack.radiusTokens) && radius === pack.radius
  const radiusTokens = {
    sm: useKitRadii ? pack.radiusTokens!.sm : radiusBase.sm,
    md: useKitRadii ? pack.radiusTokens!.md : radiusBase.md,
    lg: useKitRadii ? pack.radiusTokens!.lg : radiusBase.lg,
    pill: radiusBase.pill,
  }

  const densityTokens = DENSITY[density]
  const elevationTokens = ELEVATION[elevation]
  const shadows = buildShadow(isDark, pack.shadowStrength, elevation)

  const surface = withAlpha(surfaces.surface, pack.surfaceAlpha)
  const surfaceElevated = withAlpha(surfaces.surfaceElevated, pack.surfaceAlpha)

  const vars: Record<string, string> = {
    '--pomi-accent': accent,
    '--pomi-accent-hover': mix(accent, isDark ? 'white' : 'black', 0.12),
    '--pomi-accent-soft': isDark ? mix(accent, 'black', 0.65) : mix(accent, 'white', 0.88),
    '--pomi-accent-fg': '#FFFFFF',
    '--pomi-danger': '#E5484D',
    '--pomi-danger-fg': '#FFFFFF',
    '--pomi-success': '#30A46C',
    '--pomi-success-fg': '#FFFFFF',
    '--pomi-warning': isDark ? '#E5B04A' : '#D9971A',
    '--pomi-warning-fg': '#FFFFFF',
    '--pomi-info': isDark ? '#60A5FA' : '#3B82F6',
    '--pomi-info-fg': '#FFFFFF',
    '--pomi-neutral': isDark ? '#8B8F9A' : '#6B7280',
    '--pomi-neutral-solid': isDark ? '#2A2F3A' : '#18181B',
    '--pomi-neutral-fg': '#FFFFFF',

    '--pomi-bg': surfaces.bg,
    '--pomi-fg': surfaces.fg,
    '--pomi-muted': surfaces.muted,
    '--pomi-border': surfaces.border,
    '--pomi-surface': surface,
    '--pomi-surface-elevated': surfaceElevated,
    '--pomi-surface-hover': surfaces.surfaceHover,
    '--pomi-surface-alpha': String(pack.surfaceAlpha),
    '--pomi-border-strength': String(pack.borderStrength),
    '--pomi-border-highlight': isDark ? pack.borderHighlightDark : pack.borderHighlightLight,

    '--pomi-radius-sm': radiusTokens.sm,
    '--pomi-radius-md': radiusTokens.md,
    '--pomi-radius-lg': radiusTokens.lg,
    '--pomi-radius': radiusTokens.md,
    '--pomi-radius-pill': radiusTokens.pill,

    '--pomi-control-h-sm': densityTokens.hSm,
    '--pomi-control-h-md': densityTokens.hMd,
    '--pomi-control-h-lg': densityTokens.hLg,
    '--pomi-control-px-sm': densityTokens.pxSm,
    '--pomi-control-px-md': densityTokens.pxMd,
    '--pomi-control-px-lg': densityTokens.pxLg,
    '--pomi-gap': densityTokens.gap,
    '--pomi-space-1': densityTokens.space1,
    '--pomi-space-2': densityTokens.space2,
    '--pomi-space-3': densityTokens.space3,
    '--pomi-space-4': densityTokens.space4,
    '--pomi-space-6': densityTokens.space6,

    '--pomi-duration-fast': motionTokens.fast,
    '--pomi-duration-mid': motionTokens.mid,
    '--pomi-duration-slow': motionTokens.slow,
    '--pomi-ease': motionTokens.ease,
    '--pomi-ease-out': motionTokens.easeOut,
    '--pomi-motion-lift': motionTokens.lift,
    '--pomi-motion-press': motionTokens.press,
    '--pomi-motion-enter-y': motionTokens.enterY,
    '--pomi-motion-enter-scale': motionTokens.enterScale,

    '--pomi-font': pack.font,
    '--pomi-font-display': pack.fontDisplay,
    '--pomi-font-mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    '--pomi-tracking': pack.tracking,
    '--pomi-title-tracking': pack.titleTracking,

    '--pomi-shadow-strength': String(pack.shadowStrength * elevationTokens.strength),
    '--pomi-shadow': shadows.shadow,
    '--pomi-shadow-lg': shadows.shadowLg,
    '--pomi-card-lift': elevationTokens.cardLift,
    '--pomi-glow-strength': elevationTokens.glow,
    '--pomi-overlay': isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(17 24 39 / 28%)',
    '--pomi-focus-ring': `0 0 0 3px color-mix(in srgb, ${accent} 22%, transparent)`,

    '--pomi-skeleton': isDark ? '#23262F' : '#E8E8EC',
    '--pomi-skeleton-shine': isDark ? 'rgb(255 255 255 / 8%)' : 'rgb(255 255 255 / 55%)',
    '--pomi-feedback-max-width': '22rem',
    '--pomi-message-lh': '1.4',
    '--pomi-message-fs': '0.8rem',
    '--pomi-message-min-height': 'calc(0.8rem * 1.4)',

    '--pomi-surface-blur': pack.blur,
    '--pomi-surface-saturate': pack.saturate,
  }

  return {
    vars,
    attrs: {
      'data-pomi-design': design,
      'data-pomi-personality': design,
      'data-pomi-mode': colorScheme,
      'data-pomi-elevation': elevation,
      'data-pomi-motion': motionTokens.key,
    },
    resolved: {
      accent,
      design,
      personality: design,
      radius,
      density,
      motion: motionTokens.key,
      elevation,
      mode,
      colorScheme,
    },
  }
}

let systemModeCleanup: (() => void) | null = null
let lastThemeOptions: CreateThemeOptions | null = null

export function applyTheme(theme: PomikitTheme, el: HTMLElement = document.documentElement) {
  for (const [key, value] of Object.entries(theme.vars)) {
    el.style.setProperty(key, value)
  }

  const attrs = [
    'data-pomi-design',
    'data-pomi-personality',
    'data-pomi-mode',
    'data-pomi-elevation',
    'data-pomi-motion',
  ] as const
  for (const key of attrs) {
    el.setAttribute(key, theme.attrs[key])
  }

  el.removeAttribute('data-pomi-radius')
  el.removeAttribute('data-pomi-density')
}

/**
 * Apply theme from options and keep `mode: 'system'` in sync with OS preference.
 */
export function applyThemeOptions(
  options: CreateThemeOptions = {},
  el: HTMLElement = document.documentElement,
): () => void {
  lastThemeOptions = options
  systemModeCleanup?.()
  systemModeCleanup = null

  applyTheme(createTheme(options), el)

  if (options.mode !== 'system' || typeof window === 'undefined') {
    return () => undefined
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const onChange = () => {
    if (!lastThemeOptions) return
    applyTheme(createTheme(lastThemeOptions), el)
  }
  mql.addEventListener('change', onChange)
  systemModeCleanup = () => mql.removeEventListener('change', onChange)
  return systemModeCleanup
}
