# Exports

Superfície pública de `pomikit-ui` (veja `src/index.ts`). Radio **não** é exportado.

## Theme e root

- Plugin `Pomikit`
- `PomikitRoot`
- `createTheme`, `applyTheme`, `applyThemeOptions`, `resolveColorScheme`
- `DESIGNS`
- Types: `CreateThemeOptions`, `DesignKit`, `PomikitPluginOptions`, `PomikitTheme`, `ThemeDesign`, `ThemeDensity`, `ThemeElevation`, `ThemeMode`, `ThemeMotion`, `ThemeRadius`, `PomikitRootProps`
- Alias de tipo deprecado: `ThemePersonality` (prefira `ThemeDesign`)

## Components

- `Button`, `Card`, `Checkbox`, `Collection`, `Dialog`, `Dropdown` (+ partes compostas), `EmptyState`, `ErrorState`, `Field`, `Input`, `Select`, `Skeleton`, `Switch`

### Partes de Dropdown

`Dropdown`, `DropdownTrigger`, `DropdownContent`, `DropdownItem`, `DropdownSeparator`, `DropdownSub`, `DropdownSubTrigger`, `DropdownSubContent`

### Deprecated

- `DialogProvider`
- `ToastProvider`

Prefira plugin / `PomikitRoot`.

## Composables

- `useDialog`, `useToast`, `useFieldContext`
- Types: `DialogApi`, `DialogConfirmOptions`, `FieldContext`, `ToastApi`, `ToastInput`, `ToastRecord`, `ToastTone`

## Validation e utils

- `rules`, `runRules`, type `InputRule`
- `cn`, `isThenable`, `invokeClickHandlers`
- Types: `PomiSize`, `PomiTone`, `PomiVariant`

## Styles

```ts
import 'pomikit-ui/styles.css'
```

O entry também aplica side-effects de `./styles/index.css` ao importar o package em builds de source.
