# Exports

Superficie pública de `pomikit-ui` (ver `src/index.ts`). Radio **no** se exporta.

## Theme y root

- Plugin `Pomikit`
- `PomikitRoot`
- `createTheme`, `applyTheme`, `applyThemeOptions`, `resolveColorScheme`
- `DESIGNS`
- Types: `CreateThemeOptions`, `DesignKit`, `PomikitPluginOptions`, `PomikitTheme`, `ThemeDesign`, `ThemeDensity`, `ThemeElevation`, `ThemeMode`, `ThemeMotion`, `ThemeRadius`, `PomikitRootProps`
- Alias de tipo deprecado: `ThemePersonality` (preferir `ThemeDesign`)

## Components

- `Button`, `Card`, `Checkbox`, `Collection`, `Dialog`, `Dropdown` (+ partes compuestas), `EmptyState`, `ErrorState`, `Field`, `Input`, `Select`, `Skeleton`, `Switch`

### Partes de Dropdown

`Dropdown`, `DropdownTrigger`, `DropdownContent`, `DropdownItem`, `DropdownSeparator`, `DropdownSub`, `DropdownSubTrigger`, `DropdownSubContent`

### Deprecated

- `DialogProvider`
- `ToastProvider`

Preferir plugin / `PomikitRoot`.

## Composables

- `useDialog`, `useToast`, `useFieldContext`
- Types: `DialogApi`, `DialogConfirmOptions`, `FieldContext`, `ToastApi`, `ToastInput`, `ToastRecord`, `ToastTone`

## Validation y utils

- `rules`, `runRules`, type `InputRule`
- `cn`, `isThenable`, `invokeClickHandlers`
- Types: `PomiSize`, `PomiTone`, `PomiVariant`

## Styles

```ts
import 'pomikit-ui/styles.css'
```

El entry también aplica side-effects de `./styles/index.css` al importar el package en builds de source.
