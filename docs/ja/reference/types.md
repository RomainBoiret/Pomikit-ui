# 共有型

`pomikit-ui` からエクスポートされるテーマと共有ユニオンの短い索引です。

## Design

```ts
type ThemeDesign = 'linear' | 'glass' | 'editorial' | 'soft' | 'playful'
```

`DESIGNS` と [Design Kits](/guide/theming) を参照。

## Theme 軸

```ts
type ThemeRadius = 'sharp' | 'soft' | 'round'
type ThemeDensity = 'compact' | 'comfortable' | 'spacious'
type ThemeMotion = 'none' | 'normal' | 'expressive'
type ThemeElevation = 'flat' | 'soft' | 'floating'
type ThemeMode = 'light' | 'dark' | 'system'
```

## Theme オブジェクト

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

## コンポーネント補助

小さな共有ユニオン（逃げ道スタイル props でも使用）：

```ts
type PomiSize = 'sm' | 'md' | 'lg'
type PomiTone = 'primary' | 'neutral' | 'danger' | 'success'
type PomiVariant = 'solid' | 'outline' | 'ghost' | 'soft'
```

アプリコードでは、これらでスタイルするより意図 props と Design Kits を優先してください。
