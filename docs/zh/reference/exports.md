# Exports

来自 `pomikit-ui` 的公开表面（见 `src/index.ts`）。Radio **不会**导出。

## Theme & root

- `Pomikit` 插件
- `PomikitRoot`
- `createTheme`、`applyTheme`、`applyThemeOptions`、`resolveColorScheme`
- `DESIGNS`
- Types：`CreateThemeOptions`、`DesignKit`、`PomikitPluginOptions`、`PomikitTheme`、`ThemeDesign`、`ThemeDensity`、`ThemeElevation`、`ThemeMode`、`ThemeMotion`、`ThemeRadius`、`PomikitRootProps`
- 已弃用别名类型：`ThemePersonality`（优先使用 `ThemeDesign`）

## Components

- `Button`、`Card`、`Checkbox`、`Collection`、`Dialog`、`Dropdown`（+ 复合部件）、`EmptyState`、`ErrorState`、`Field`、`Input`、`Select`、`Skeleton`、`Switch`

### Dropdown 部件

`Dropdown`、`DropdownTrigger`、`DropdownContent`、`DropdownItem`、`DropdownSeparator`、`DropdownSub`、`DropdownSubTrigger`、`DropdownSubContent`

### Deprecated

- `DialogProvider`
- `ToastProvider`

优先使用 plugin / `PomikitRoot`。

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

在源码构建中导入包时，入口还会副作用引入 `./styles/index.css`。
