# Exports

`pomikit-ui`의 공개 표면입니다 (`src/index.ts` 참고). Radio는 **export되지 않습니다**.

## Theme & root

- `Pomikit` 플러그인
- `PomikitRoot`
- `createTheme`, `applyTheme`, `applyThemeOptions`, `resolveColorScheme`
- `DESIGNS`
- Types: `CreateThemeOptions`, `DesignKit`, `PomikitPluginOptions`, `PomikitTheme`, `ThemeDesign`, `ThemeDensity`, `ThemeElevation`, `ThemeMode`, `ThemeMotion`, `ThemeRadius`, `PomikitRootProps`
- Deprecated 별칭 타입: `ThemePersonality` (`ThemeDesign` 우선)

## Components

- `Button`, `Card`, `Checkbox`, `Collection`, `Dialog`, `Dropdown` (+ 복합 파트), `EmptyState`, `ErrorState`, `Field`, `Input`, `Select`, `Skeleton`, `Switch`

### Dropdown 파트

`Dropdown`, `DropdownTrigger`, `DropdownContent`, `DropdownItem`, `DropdownSeparator`, `DropdownSub`, `DropdownSubTrigger`, `DropdownSubContent`

### Deprecated

- `DialogProvider`
- `ToastProvider`

plugin / `PomikitRoot`를 우선하세요.

## Composables

- `useDialog`, `useToast`, `useFieldContext`
- Types: `DialogApi`, `DialogConfirmOptions`, `FieldContext`, `ToastApi`, `ToastInput`, `ToastRecord`, `ToastTone`

## Validation & utils

- `rules`, `runRules`, type `InputRule`
- `cn`, `isThenable`, `invokeClickHandlers`
- Types: `PomiSize`, `PomiTone`, `PomiVariant`

## Styles

```ts
import 'pomikit-ui/styles.css'
```

소스 빌드에서 패키지를 import하면 엔트리도 `./styles/index.css`를 side-effect로 읽습니다.
