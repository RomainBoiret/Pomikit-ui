export type ThemeRadius = 'sharp' | 'soft' | 'round'
export type ThemeDensity = 'compact' | 'comfortable' | 'spacious'
export type ThemeMotion = 'none' | 'subtle' | 'expressive'
export type ThemeMode = 'light' | 'dark'
export type ThemePersonality = 'minimal' | 'glass' | 'playful'

export type CreateThemeOptions = {
  /** Brand accent hex, e.g. `#5B5FFF` */
  accent?: string
  radius?: ThemeRadius
  density?: ThemeDensity
  motion?: ThemeMotion
  mode?: ThemeMode
  /** Preset that composes the axes above + surface effects */
  personality?: ThemePersonality
}

export type PomikitTheme = {
  vars: Record<string, string>
  attrs: {
    'data-pomi-radius': ThemeRadius
    'data-pomi-density': ThemeDensity
    'data-pomi-motion': ThemeMotion
    'data-pomi-mode': ThemeMode
    'data-pomi-personality'?: ThemePersonality
  }
}

const RADIUS: Record<ThemeRadius, { sm: string; md: string; lg: string; pill: string }> = {
  sharp: { sm: '4px', md: '6px', lg: '8px', pill: '999px' },
  soft: { sm: '8px', md: '12px', lg: '16px', pill: '999px' },
  round: { sm: '12px', md: '18px', lg: '24px', pill: '999px' },
}

const DENSITY: Record<
  ThemeDensity,
  { hSm: string; hMd: string; hLg: string; pxSm: string; pxMd: string; pxLg: string; gap: string }
> = {
  compact: {
    hSm: '1.75rem',
    hMd: '2.125rem',
    hLg: '2.5rem',
    pxSm: '0.625rem',
    pxMd: '0.875rem',
    pxLg: '1.125rem',
    gap: '0.5rem',
  },
  comfortable: {
    hSm: '2rem',
    hMd: '2.5rem',
    hLg: '3rem',
    pxSm: '0.75rem',
    pxMd: '1rem',
    pxLg: '1.5rem',
    gap: '0.75rem',
  },
  spacious: {
    hSm: '2.25rem',
    hMd: '2.75rem',
    hLg: '3.25rem',
    pxSm: '0.875rem',
    pxMd: '1.25rem',
    pxLg: '1.75rem',
    gap: '1rem',
  },
}

const MOTION: Record<ThemeMotion, { fast: string; mid: string; slow: string; spring: string }> = {
  none: {
    fast: '0ms',
    mid: '0ms',
    slow: '0ms',
    spring: 'linear',
  },
  subtle: {
    fast: '120ms',
    mid: '200ms',
    slow: '320ms',
    spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },
  expressive: {
    fast: '160ms',
    mid: '280ms',
    slow: '480ms',
    spring: 'linear(0, 0.068, 0.232 7.1%, 0.892 26.5%, 1.054 34.5%, 1.09, 1.046 46.4%, 1.004 59.9%, 0.995, 1)',
  },
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

function resolvePersonality(
  options: CreateThemeOptions,
): Required<Pick<CreateThemeOptions, 'radius' | 'density' | 'motion' | 'mode'>> & {
  accent: string
  personality?: ThemePersonality
  blur: string
  saturate: string
  shadowStrength: string
} {
  const personality = options.personality
  const base = {
    accent: options.accent ?? '#5B5FFF',
    radius: options.radius ?? 'soft',
    density: options.density ?? 'comfortable',
    motion: options.motion ?? 'expressive',
    mode: options.mode ?? 'light',
    personality,
    blur: '0px',
    saturate: '1',
    shadowStrength: '1',
  }

  if (personality === 'minimal') {
    return {
      ...base,
      radius: options.radius ?? 'sharp',
      motion: options.motion ?? 'subtle',
      density: options.density ?? 'compact',
      shadowStrength: '0.55',
    }
  }
  if (personality === 'glass') {
    return {
      ...base,
      radius: options.radius ?? 'round',
      motion: options.motion ?? 'expressive',
      blur: '18px',
      saturate: '1.15',
      shadowStrength: '0.75',
    }
  }
  if (personality === 'playful') {
    return {
      ...base,
      accent: options.accent ?? '#FF5A7A',
      radius: options.radius ?? 'round',
      motion: options.motion ?? 'expressive',
      density: options.density ?? 'spacious',
      shadowStrength: '1.15',
    }
  }
  return base
}

export function createTheme(options: CreateThemeOptions = {}): PomikitTheme {
  const resolved = resolvePersonality(options)
  const radius = RADIUS[resolved.radius]
  const density = DENSITY[resolved.density]
  const motion = MOTION[resolved.motion]
  const accent = resolved.accent
  const isDark = resolved.mode === 'dark'

  const bg = isDark ? '#0B0D12' : '#F6F5F2'
  const fg = isDark ? '#F4F4F5' : '#12141A'
  const muted = isDark ? '#9A9AA3' : '#5C5F6A'
  const border = isDark ? '#23262F' : '#E6E4DE'
  const surface = isDark ? '#14171F' : '#FFFFFF'
  const surfaceElevated = isDark ? '#1A1E28' : '#FFFFFF'

  const vars: Record<string, string> = {
    '--pomi-accent': accent,
    '--pomi-accent-hover': mix(accent, isDark ? 'white' : 'black', 0.12),
    '--pomi-accent-soft': isDark ? mix(accent, 'black', 0.65) : mix(accent, 'white', 0.88),
    '--pomi-accent-fg': '#FFFFFF',
    '--pomi-danger': '#E5484D',
    '--pomi-danger-fg': '#FFFFFF',
    '--pomi-success': '#30A46C',
    '--pomi-success-fg': '#FFFFFF',
    '--pomi-neutral': isDark ? '#8B8F9A' : '#6B7280',
    '--pomi-neutral-solid': isDark ? '#2A2F3A' : '#18181B',
    '--pomi-neutral-fg': '#FFFFFF',

    '--pomi-bg': bg,
    '--pomi-fg': fg,
    '--pomi-muted': muted,
    '--pomi-border': border,
    '--pomi-surface': surface,
    '--pomi-surface-elevated': surfaceElevated,

    '--pomi-radius-sm': radius.sm,
    '--pomi-radius-md': radius.md,
    '--pomi-radius-lg': radius.lg,
    '--pomi-radius': radius.md,
    '--pomi-radius-pill': radius.pill,

    '--pomi-control-h-sm': density.hSm,
    '--pomi-control-h-md': density.hMd,
    '--pomi-control-h-lg': density.hLg,
    '--pomi-control-px-sm': density.pxSm,
    '--pomi-control-px-md': density.pxMd,
    '--pomi-control-px-lg': density.pxLg,
    '--pomi-gap': density.gap,

    '--pomi-duration-fast': motion.fast,
    '--pomi-duration-mid': motion.mid,
    '--pomi-duration-slow': motion.slow,
    '--pomi-ease': motion.spring,
    '--pomi-ease-out': 'cubic-bezier(0.16, 1, 0.3, 1)',

    '--pomi-font': '"DM Sans", ui-sans-serif, system-ui, sans-serif',
    '--pomi-font-display': '"Newsreader", ui-serif, Georgia, serif',
    '--pomi-font-mono': 'ui-monospace, SFMono-Regular, Menlo, monospace',

    '--pomi-shadow-strength': resolved.shadowStrength,
    '--pomi-shadow': isDark
      ? `0 1px 0 rgb(255 255 255 / 4%), 0 8px 24px rgb(0 0 0 / calc(0.45 * ${resolved.shadowStrength}))`
      : `0 1px 0 rgb(255 255 255 / 70%), 0 1px 2px rgb(18 20 26 / calc(0.04 * ${resolved.shadowStrength})), 0 12px 32px rgb(18 20 26 / calc(0.08 * ${resolved.shadowStrength}))`,
    '--pomi-overlay': isDark ? 'rgb(0 0 0 / 55%)' : 'rgb(18 20 26 / 40%)',
    '--pomi-focus-ring': `0 0 0 3px color-mix(in srgb, ${accent} 35%, transparent)`,

    '--pomi-skeleton': isDark ? '#23262F' : '#E8E6E0',
    '--pomi-skeleton-shine': isDark ? 'rgb(255 255 255 / 8%)' : 'rgb(255 255 255 / 55%)',
    '--pomi-feedback-max-width': '22rem',
    '--pomi-message-lh': '1.4',
    '--pomi-message-fs': '0.8rem',
    '--pomi-message-min-height': 'calc(0.8rem * 1.4)',

    '--pomi-surface-blur': resolved.blur,
    '--pomi-surface-saturate': resolved.saturate,
  }

  const attrs: PomikitTheme['attrs'] = {
    'data-pomi-radius': resolved.radius,
    'data-pomi-density': resolved.density,
    'data-pomi-motion': resolved.motion,
    'data-pomi-mode': resolved.mode,
  }
  if (resolved.personality) attrs['data-pomi-personality'] = resolved.personality

  return { vars, attrs }
}

export function applyTheme(theme: PomikitTheme, el: HTMLElement = document.documentElement) {
  for (const [key, value] of Object.entries(theme.vars)) {
    el.style.setProperty(key, value)
  }
  for (const [key, value] of Object.entries(theme.attrs)) {
    if (value == null) el.removeAttribute(key)
    else el.setAttribute(key, value)
  }
}

export type PomikitPluginOptions = {
  theme?: CreateThemeOptions | PomikitTheme
}

export const Pomikit = {
  install(_app: unknown, options: PomikitPluginOptions = {}) {
    if (typeof document === 'undefined') return
    const theme =
      options.theme && 'vars' in options.theme
        ? options.theme
        : createTheme((options.theme as CreateThemeOptions) ?? {})
    applyTheme(theme)
  },
}
