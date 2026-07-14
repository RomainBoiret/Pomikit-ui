# Exports

Surface publique depuis `pomikit-ui` (voir `src/index.ts`). Radio n'est **pas** exporté.

## Thème et root

- Plugin `Pomikit`
- `PomikitRoot`
- `createTheme`, `applyTheme`, `applyThemeOptions`, `resolveColorScheme`
- `DESIGNS`
- Types : `CreateThemeOptions`, `DesignKit`, `PomikitPluginOptions`, `PomikitTheme`, `ThemeDesign`, `ThemeDensity`, `ThemeElevation`, `ThemeMode`, `ThemeMotion`, `ThemeRadius`, `PomikitRootProps`
- Type alias déprécié : `ThemePersonality` (préférer `ThemeDesign`)

## Composants

- `Button`, `Card`, `Checkbox`, `Collection`, `Dialog`, `Dropdown` (+ parties composées), `EmptyState`, `ErrorState`, `Field`, `Input`, `Select`, `Skeleton`, `Switch`

### Parties Dropdown

`Dropdown`, `DropdownTrigger`, `DropdownContent`, `DropdownItem`, `DropdownSeparator`, `DropdownSub`, `DropdownSubTrigger`, `DropdownSubContent`

### Dépréciés

- `DialogProvider`
- `ToastProvider`

Préférez le plugin / `PomikitRoot`.

## Composables

- `useDialog`, `useToast`, `useFieldContext`
- Types : `DialogApi`, `DialogConfirmOptions`, `FieldContext`, `ToastApi`, `ToastInput`, `ToastRecord`, `ToastTone`

## Validation et utils

- `rules`, `runRules`, type `InputRule`
- `cn`, `isThenable`, `invokeClickHandlers`
- Types : `PomiSize`, `PomiTone`, `PomiVariant`

## Styles

```ts
import 'pomikit-ui/styles.css'
```

L'entrée charge aussi en side-effect `./styles/index.css` lors de l'import du package dans les builds source.
