# 공유 타입

`pomikit-ui`에서 export하는 테마와 공유 유니온의 간단한 색인입니다.

## Design

```ts
type ThemeDesign = 'linear' | 'glass' | 'editorial' | 'soft' | 'playful'
```

`DESIGNS`와 [Design Kits](/guide/theming)를 보세요.

## Theme 축

```ts
type ThemeRadius = 'sharp' | 'soft' | 'round'
type ThemeDensity = 'compact' | 'comfortable' | 'spacious'
type ThemeMotion = 'none' | 'normal' | 'expressive'
type ThemeElevation = 'flat' | 'soft' | 'floating'
type ThemeMode = 'light' | 'dark' | 'system'
```

## Theme 객체

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

## 컴포넌트 헬퍼

작은 공유 유니온 (탈출구 스타일 props에도 사용):

```ts
type PomiSize = 'sm' | 'md' | 'lg'
type PomiTone = 'primary' | 'neutral' | 'danger' | 'success'
type PomiVariant = 'solid' | 'outline' | 'ghost' | 'soft'
```

앱 코드에서는 이들로 스타일하기보다 의도 props와 Design Kits를 우선하세요.
