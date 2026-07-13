export type ThemeRadius = 'sharp' | 'soft' | 'round'
export type ThemeDensity = 'compact' | 'comfortable' | 'spacious'
export type ThemeMotion = 'none' | 'normal' | 'expressive'
/** @deprecated Use `normal` — kept as input alias for migration */
export type ThemeMotionLegacy = 'subtle' | 'smooth'
export type ThemeElevation = 'flat' | 'soft' | 'floating'
export type ThemeMode = 'light' | 'dark' | 'system'

/** Soft = 10–12px Linear range; sharp = editorial; round = soft/playful */
export const RADIUS: Record<ThemeRadius, { sm: string; md: string; lg: string; pill: string }> = {
  sharp: { sm: '4px', md: '6px', lg: '8px', pill: '999px' },
  soft: { sm: '8px', md: '10px', lg: '12px', pill: '999px' },
  round: { sm: '12px', md: '16px', lg: '20px', pill: '999px' },
}

export const DENSITY: Record<
  ThemeDensity,
  {
    hSm: string
    hMd: string
    hLg: string
    pxSm: string
    pxMd: string
    pxLg: string
    gap: string
    space1: string
    space2: string
    space3: string
    space4: string
    space6: string
  }
> = {
  compact: {
    hSm: '1.75rem',
    hMd: '2.125rem',
    hLg: '2.5rem',
    pxSm: '0.625rem',
    pxMd: '0.875rem',
    pxLg: '1.125rem',
    gap: '0.5rem',
    space1: '0.2rem',
    space2: '0.4rem',
    space3: '0.6rem',
    space4: '0.85rem',
    space6: '1.25rem',
  },
  comfortable: {
    hSm: '2rem',
    hMd: '2.5rem',
    hLg: '3rem',
    pxSm: '0.75rem',
    pxMd: '1rem',
    pxLg: '1.25rem',
    gap: '0.75rem',
    space1: '0.25rem',
    space2: '0.5rem',
    space3: '0.75rem',
    space4: '1rem',
    space6: '1.5rem',
  },
  spacious: {
    hSm: '2.25rem',
    hMd: '2.75rem',
    hLg: '3.25rem',
    pxSm: '0.875rem',
    pxMd: '1.125rem',
    pxLg: '1.5rem',
    gap: '1rem',
    space1: '0.3rem',
    space2: '0.6rem',
    space3: '0.9rem',
    space4: '1.2rem',
    space6: '1.75rem',
  },
}

/** Fallback axis presets — Design Kits supply their own motionProfile by default */
export const MOTION: Record<
  ThemeMotion,
  { fast: string; mid: string; slow: string; spring: string; lift: string; press: string }
> = {
  none: {
    fast: '0ms',
    mid: '0ms',
    slow: '0ms',
    spring: 'linear',
    lift: '0px',
    press: '1',
  },
  normal: {
    fast: '160ms',
    mid: '200ms',
    slow: '280ms',
    spring: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    lift: '1px',
    press: '0.98',
  },
  expressive: {
    fast: '180ms',
    mid: '240ms',
    slow: '340ms',
    spring: 'cubic-bezier(0.34, 1.2, 0.64, 1)',
    lift: '3px',
    press: '0.96',
  },
}

export const ELEVATION: Record<
  ThemeElevation,
  { strength: number; cardLift: string; glow: string }
> = {
  flat: { strength: 0.2, cardLift: '0px', glow: '0' },
  soft: { strength: 1, cardLift: '2px', glow: '0.15' },
  floating: { strength: 1.2, cardLift: '3px', glow: '0.25' },
}

export function normalizeMotion(
  motion: ThemeMotion | ThemeMotionLegacy | undefined,
): ThemeMotion | undefined {
  if (motion === 'subtle' || motion === 'smooth') return 'normal'
  return motion
}
