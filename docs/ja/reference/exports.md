# Exports

`pomikit-ui` の公開面です（`src/index.ts` を参照）。Radio は **エクスポートされません**。

## Theme & root

- `Pomikit` プラグイン
- `PomikitRoot`
- `createTheme`、`applyTheme`、`applyThemeOptions`、`resolveColorScheme`
- `DESIGNS`
- Types：`CreateThemeOptions`、`DesignKit`、`PomikitPluginOptions`、`PomikitTheme`、`ThemeDesign`、`ThemeDensity`、`ThemeElevation`、`ThemeMode`、`ThemeMotion`、`ThemeRadius`、`PomikitRootProps`
- 非推奨エイリアス型：`ThemePersonality`（`ThemeDesign` を優先）

## Components

- `Button`、`Card`、`Checkbox`、`Collection`、`Dialog`、`Dropdown`（+ 複合パーツ）、`EmptyState`、`ErrorState`、`Field`、`Input`、`Select`、`Skeleton`、`Switch`

### Dropdown パーツ

`Dropdown`、`DropdownTrigger`、`DropdownContent`、`DropdownItem`、`DropdownSeparator`、`DropdownSub`、`DropdownSubTrigger`、`DropdownSubContent`

### Deprecated

- `DialogProvider`
- `ToastProvider`

plugin / `PomikitRoot` を優先。

## Composables

- `useDialog`、`useToast`、`useFieldContext`
- Types：`DialogApi`、`DialogConfirmOptions`、`FieldContext`、`ToastApi`、`ToastInput`、`ToastRecord`、`ToastTone`

## Validation & utils

- `rules`、`runRules`、type `InputRule`
- `cn`、`isThenable`、`invokeClickHandlers`
- Types：`PomiSize`、`PomiTone`、`PomiVariant`

## Styles

```ts
import 'pomikit-ui/styles.css'
```

ソースビルドでパッケージをインポートすると、エントリは副作用として `./styles/index.css` も読み込みます。
