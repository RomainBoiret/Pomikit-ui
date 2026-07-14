# Exports

Public surface from `pomikit-ui` (see `src/index.ts`). Radio is **not** exported.

## Theme & root

- `Pomikit` plugin
- `PomikitRoot`
- `createTheme`, `applyTheme`, `applyThemeOptions`, `resolveColorScheme`
- `DESIGNS`
- Types: `CreateThemeOptions`, `DesignKit`, `PomikitPluginOptions`, `PomikitTheme`, `ThemeDesign`, `ThemeDensity`, `ThemeElevation`, `ThemeMode`, `ThemeMotion`, `ThemeRadius`, `PomikitRootProps`
- Deprecated alias type: `ThemePersonality` (prefer `ThemeDesign`)

## Components

- `Button`, `Card`, `Checkbox`, `Collection`, `Dialog`, `Dropdown` (+ compound parts), `EmptyState`, `ErrorState`, `Field`, `Input`, `Select`, `Skeleton`, `Switch`

### Dropdown parts

`Dropdown`, `DropdownTrigger`, `DropdownContent`, `DropdownItem`, `DropdownSeparator`, `DropdownSub`, `DropdownSubTrigger`, `DropdownSubContent`

### Deprecated

- `DialogProvider`
- `ToastProvider`

Prefer plugin / `PomikitRoot`.

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

Entry also side-effects `./styles/index.css` when importing the package in source builds.
