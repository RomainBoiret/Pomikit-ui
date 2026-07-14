# 共享类型

从 `pomikit-ui` 导出的主题与共享联合类型的简要索引。

## Design

```ts
type ThemeDesign = 'linear' | 'glass' | 'editorial' | 'soft' | 'playful'
```

参见 `DESIGNS` 与 [Design Kits](/guide/theming)。

## Theme 轴

```ts
type ThemeRadius = 'sharp' | 'soft' | 'round'
type ThemeDensity = 'compact' | 'comfortable' | 'spacious'
type ThemeMotion = 'none' | 'normal' | 'expressive'
type ThemeElevation = 'flat' | 'soft' | 'floating'
type ThemeMode = 'light' | 'dark' | 'system'
```

## Theme 对象

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

## 组件辅助

小型共享联合（也用于逃生舱样式 props）：

```ts
type PomiSize = 'sm' | 'md' | 'lg'
type PomiTone = 'primary' | 'neutral' | 'danger' | 'success'
type PomiVariant = 'solid' | 'outline' | 'ghost' | 'soft'
```

在应用代码中，优先使用意图 props 与 Design Kits，而不是用这些做样式。
