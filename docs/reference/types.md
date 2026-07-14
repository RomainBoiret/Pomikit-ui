# Shared types

Brief index of theme and shared unions exported from `pomikit-ui`.

## Design

```ts
type ThemeDesign = 'linear' | 'glass' | 'editorial' | 'soft' | 'playful'
```

See `DESIGNS` and [Design Kits](/guide/theming).

## Theme axes

```ts
type ThemeRadius = 'sharp' | 'soft' | 'round'
type ThemeDensity = 'compact' | 'comfortable' | 'spacious'
type ThemeMotion = 'none' | 'normal' | 'expressive'
type ThemeElevation = 'flat' | 'soft' | 'floating'
type ThemeMode = 'light' | 'dark' | 'system'
```

## Theme objects

```ts
type CreateThemeOptions = {
  accent?: string
  design?: ThemeDesign
  radius?: ThemeRadius
  density?: ThemeDensity
  motion?: ThemeMotion
  elevation?: ThemeElevation
  mode?: ThemeMode
}

type PomikitTheme = {
  vars: Record<string, string>
  attrs: { /* data-pomi-* */ }
  resolved: { /* accent, design, axes, colorScheme */ }
}
```

## Plugin / root

```ts
type PomikitPluginOptions = {
  theme?: CreateThemeOptions | PomikitTheme
  toastDuration?: number
  toastLabel?: string
  overlays?: boolean
}

type PomikitRootProps = {
  toastDuration?: number
  toastLabel?: string
}
```

## Component helpers

Small shared unions (also used by escape-hatch style props):

```ts
type PomiSize = 'sm' | 'md' | 'lg'
type PomiTone = 'primary' | 'neutral' | 'danger' | 'success'
type PomiVariant = 'solid' | 'outline' | 'ghost' | 'soft'
```

Prefer intent props and Design Kits over styling with these in app code.
