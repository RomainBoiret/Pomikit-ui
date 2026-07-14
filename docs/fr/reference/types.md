# Types partagés

Index bref des unions de thème et partagées exportées depuis `pomikit-ui`.

## Design

```ts
type ThemeDesign = 'linear' | 'glass' | 'editorial' | 'soft' | 'playful'
```

Voir `DESIGNS` et [Design Kits](/guide/theming).

## Axes de thème

```ts
type ThemeRadius = 'sharp' | 'soft' | 'round'
type ThemeDensity = 'compact' | 'comfortable' | 'spacious'
type ThemeMotion = 'none' | 'normal' | 'expressive'
type ThemeElevation = 'flat' | 'soft' | 'floating'
type ThemeMode = 'light' | 'dark' | 'system'
```

## Objets de thème

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

## Helpers de composants

Petites unions partagées (aussi utilisées par les props de style échappatoires) :

```ts
type PomiSize = 'sm' | 'md' | 'lg'
type PomiTone = 'primary' | 'neutral' | 'danger' | 'success'
type PomiVariant = 'solid' | 'outline' | 'ghost' | 'soft'
```

Préférez les props d'intention et les Design Kits au styling avec ces types dans le code applicatif.
