import type { ThemeDensity, ThemeElevation, ThemeMotion, ThemeRadius } from './axes'

export type ThemeDesign = 'linear' | 'glass' | 'editorial' | 'soft' | 'playful'

/** @deprecated Use `ThemeDesign` — mapped to a kit for migration. */
export type ThemePersonality = 'pomikit' | 'minimal' | 'glass' | 'playful' | 'elegant' | ThemeDesign

export type SurfacePalette = {
  bg: string
  fg: string
  muted: string
  border: string
  surface: string
  surfaceElevated: string
  surfaceHover: string
}

export type MotionProfile = {
  fast: string
  mid: string
  slow: string
  ease: string
  easeOut: string
  lift: string
  press: string
  /** Enter travel — used by shared keyframes */
  enterY: string
  enterScale: string
}

export type DesignKit = {
  accent: string
  radius: ThemeRadius
  /** Optional exact radii — overrides axis table when set */
  radiusTokens?: { sm: string; md: string; lg: string }
  density: ThemeDensity
  motion: ThemeMotion
  elevation: ThemeElevation
  blur: string
  saturate: string
  shadowStrength: number
  borderStrength: number
  surfaceAlpha: number
  /** Inset highlight for luminous edges (glass) — or `none` */
  borderHighlightLight: string
  borderHighlightDark: string
  font: string
  fontDisplay: string
  tracking: string
  titleTracking: string
  motionProfile: MotionProfile
  light: SurfacePalette
  dark: SurfacePalette
}

const INTER = '"Inter", ui-sans-serif, system-ui, sans-serif'
const INTER_DM = '"Inter", "DM Sans", ui-sans-serif, system-ui, sans-serif'
const DM_INTER = '"DM Sans", "Inter", ui-sans-serif, system-ui, sans-serif'
const NEWSREADER = '"Newsreader", "Inter", ui-serif, Georgia, serif'

/**
 * Official Design Kits — same components, different identity via tokens only.
 */
export const DESIGNS: Record<ThemeDesign, DesignKit> = {
  /**
   * Ultra-minimal product UI — Linear / Vercel / GitHub.
   * Cold greys, sparse shadows, Inter, 10–12px radius, airy spacing.
   */
  linear: {
    accent: '#34C759',
    radius: 'soft',
    radiusTokens: { sm: '8px', md: '10px', lg: '12px' },
    density: 'spacious',
    motion: 'normal',
    elevation: 'flat',
    blur: '0px',
    saturate: '1',
    shadowStrength: 0.35,
    borderStrength: 1,
    surfaceAlpha: 1,
    borderHighlightLight: 'none',
    borderHighlightDark: 'none',
    font: INTER,
    fontDisplay: INTER,
    tracking: '-0.011em',
    titleTracking: '-0.022em',
    motionProfile: {
      fast: '120ms',
      mid: '160ms',
      slow: '220ms',
      ease: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
      lift: '0px',
      press: '0.985',
      enterY: '6px',
      enterScale: '0.98',
    },
    light: {
      bg: '#FFFFFF',
      fg: '#0F172A',
      muted: '#64748B',
      border: '#E2E8F0',
      surface: '#F8FAFC',
      surfaceElevated: '#FFFFFF',
      surfaceHover: '#F1F5F9',
    },
    dark: {
      bg: '#16161A',
      fg: '#FAFAFA',
      muted: '#A1A1AA',
      border: '#2E2E33',
      surface: '#1E1E24',
      surfaceElevated: '#26262C',
      surfaceHover: '#2E2E33',
    },
  },

  /**
   * Soft glass — Raycast / Arc / macOS. Discrete blur, luminous edges.
   */
  glass: {
    accent: '#5B5FFF',
    radius: 'soft',
    radiusTokens: { sm: '10px', md: '12px', lg: '14px' },
    density: 'comfortable',
    motion: 'normal',
    elevation: 'floating',
    blur: '16px',
    saturate: '1.2',
    shadowStrength: 0.85,
    borderStrength: 0.7,
    surfaceAlpha: 0.72,
    borderHighlightLight: 'inset 0 0.5px 0 rgb(255 255 255 / 0.65)',
    borderHighlightDark: 'inset 0 0.5px 0 rgb(255 255 255 / 0.12)',
    font: INTER_DM,
    fontDisplay: INTER_DM,
    tracking: '-0.01em',
    titleTracking: '-0.02em',
    motionProfile: {
      fast: '160ms',
      mid: '240ms',
      slow: '360ms',
      ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
      lift: '1px',
      press: '0.98',
      enterY: '10px',
      enterScale: '0.96',
    },
    light: {
      bg: '#EEF0F5',
      fg: '#111827',
      muted: '#6B7280',
      border: 'rgb(255 255 255 / 55%)',
      surface: '#FFFFFF',
      surfaceElevated: '#FFFFFF',
      surfaceHover: 'rgb(255 255 255 / 70%)',
    },
    dark: {
      bg: '#15161C',
      fg: '#F3F4F6',
      muted: '#9CA3AF',
      border: 'rgb(255 255 255 / 14%)',
      surface: '#1C1D25',
      surfaceElevated: '#24252E',
      surfaceHover: 'rgb(255 255 255 / 7%)',
    },
  },

  /**
   * Content-first — Notion / Medium / Stripe Sessions.
   * Newsreader titles, low radius, almost no shadow.
   */
  editorial: {
    accent: '#0A2540',
    radius: 'sharp',
    radiusTokens: { sm: '4px', md: '6px', lg: '8px' },
    density: 'spacious',
    motion: 'normal',
    elevation: 'flat',
    blur: '0px',
    saturate: '1',
    shadowStrength: 0.15,
    borderStrength: 0.85,
    surfaceAlpha: 1,
    borderHighlightLight: 'none',
    borderHighlightDark: 'none',
    font: INTER,
    fontDisplay: NEWSREADER,
    tracking: '-0.005em',
    titleTracking: '-0.015em',
    motionProfile: {
      fast: '140ms',
      mid: '180ms',
      slow: '240ms',
      ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      easeOut: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      lift: '0px',
      press: '0.99',
      enterY: '4px',
      enterScale: '0.995',
    },
    light: {
      bg: '#FFFFFF',
      fg: '#0A0A0A',
      muted: '#5C5C5C',
      border: '#E8E8E8',
      surface: '#FFFFFF',
      surfaceElevated: '#FFFFFF',
      surfaceHover: '#F7F7F7',
    },
    dark: {
      bg: '#151515',
      fg: '#F5F5F5',
      muted: '#A3A3A3',
      border: '#2E2E2E',
      surface: '#1C1C1C',
      surfaceElevated: '#232323',
      surfaceHover: '#2A2A2A',
    },
  },

  /**
   * Warm & welcoming — Figma / Framer / Dropbox.
   * Soft colors, generous radius, gentle contrast.
   */
  soft: {
    accent: '#7C6AEF',
    radius: 'round',
    radiusTokens: { sm: '12px', md: '16px', lg: '20px' },
    density: 'comfortable',
    motion: 'normal',
    elevation: 'soft',
    blur: '0px',
    saturate: '1',
    shadowStrength: 0.75,
    borderStrength: 0.8,
    surfaceAlpha: 1,
    borderHighlightLight: 'none',
    borderHighlightDark: 'none',
    font: INTER_DM,
    fontDisplay: INTER_DM,
    tracking: '-0.008em',
    titleTracking: '-0.016em',
    motionProfile: {
      fast: '180ms',
      mid: '260ms',
      slow: '380ms',
      ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
      easeOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
      lift: '2px',
      press: '0.97',
      enterY: '8px',
      enterScale: '0.97',
    },
    light: {
      bg: '#F7F7F8',
      fg: '#1F1F23',
      muted: '#6B6B76',
      border: '#E4E4E9',
      surface: '#FBFBFC',
      surfaceElevated: '#FFFFFF',
      surfaceHover: '#F0F0F3',
    },
    dark: {
      bg: '#1A1A1E',
      fg: '#F4F4F5',
      muted: '#A1A1AA',
      border: '#323238',
      surface: '#222228',
      surfaceElevated: '#2A2A30',
      surfaceHover: '#323238',
    },
  },

  /**
   * Lively but not cartoon — Discord / Vercel AI / Pitch.
   * Stronger accent presence, rounder, more dynamic motion.
   */
  playful: {
    accent: '#FF5A7A',
    radius: 'round',
    radiusTokens: { sm: '14px', md: '18px', lg: '22px' },
    density: 'comfortable',
    motion: 'expressive',
    elevation: 'floating',
    blur: '0px',
    saturate: '1.05',
    shadowStrength: 1.1,
    borderStrength: 1,
    surfaceAlpha: 1,
    borderHighlightLight: 'none',
    borderHighlightDark: 'none',
    font: DM_INTER,
    fontDisplay: DM_INTER,
    tracking: '-0.012em',
    titleTracking: '-0.024em',
    motionProfile: {
      fast: '160ms',
      mid: '240ms',
      slow: '340ms',
      ease: 'cubic-bezier(0.34, 1.2, 0.64, 1)',
      easeOut: 'cubic-bezier(0.22, 1.15, 0.36, 1)',
      lift: '3px',
      press: '0.96',
      enterY: '12px',
      enterScale: '0.94',
    },
    light: {
      bg: '#FAFAFF',
      fg: '#18181B',
      muted: '#71717A',
      border: '#E4E4F0',
      surface: '#FFFFFF',
      surfaceElevated: '#FFFFFF',
      surfaceHover: '#F4F4FF',
    },
    dark: {
      bg: '#15151C',
      fg: '#FAFAFA',
      muted: '#A1A1AA',
      border: '#323242',
      surface: '#1C1C26',
      surfaceElevated: '#242430',
      surfaceHover: '#2C2C3A',
    },
  },
}

/** Legacy personality → Design Kit */
export const PERSONALITY_TO_DESIGN: Record<string, ThemeDesign> = {
  pomikit: 'linear',
  minimal: 'linear',
  elegant: 'editorial',
  glass: 'glass',
  playful: 'playful',
  linear: 'linear',
  editorial: 'editorial',
  soft: 'soft',
}

export function resolveDesign(
  design?: ThemeDesign,
  personality?: ThemePersonality,
): ThemeDesign {
  if (design && design in DESIGNS) return design
  if (personality) {
    return PERSONALITY_TO_DESIGN[personality] ?? 'linear'
  }
  return 'linear'
}

/** @deprecated Prefer `DESIGNS` */
export const PERSONALITIES = DESIGNS as unknown as Record<string, DesignKit>
