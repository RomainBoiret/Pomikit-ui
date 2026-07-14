# Design Kits

一次调用即可主题化整个应用：颜色、圆角、阴影、间距、排版、动效和表面。组件只消费 tokens。

## 官方套件

| Design | 特征 |
| --- | --- |
| `linear` | 极简产品 UI。冷灰、稀疏阴影、通透间距。**默认。** |
| `glass` | 柔和玻璃。轻模糊、明亮边缘。 |
| `editorial` | 内容优先。衬线标题、低圆角、几乎无阴影。 |
| `soft` | 温暖友好。更大圆角、柔和对比。 |
| `playful` | 活泼但不卡通。更强 accent、更圆润、更动态的运动。 |

```ts
import { DESIGNS } from 'pomikit-ui'

DESIGNS.linear // DesignKit
```

零配置（无 `createTheme` / 插件 theme）解析为 **`linear`**。

## createTheme 与 applyTheme

```ts
import { createTheme, applyTheme, applyThemeOptions } from 'pomikit-ui'

const theme = createTheme({
  design: 'glass',
  accent: '#5B5FFF',
  mode: 'system',
})

applyTheme(theme)

// Or shortcuts:
applyThemeOptions({ design: 'editorial', accent: '#0A2540' })
```

### 选项

| Option | Type | 说明 |
| --- | --- | --- |
| `design` | `ThemeDesign` | `linear` \| `glass` \| `editorial` \| `soft` \| `playful` |
| `accent` | `string` | 品牌 accent 十六进制色值 |
| `mode` | `ThemeMode` | `light` \| `dark` \| `system` |
| `radius` | `ThemeRadius` | 轴覆盖：`sharp` \| `soft` \| `round` |
| `density` | `ThemeDensity` | `compact` \| `comfortable` \| `spacious` |
| `motion` | `ThemeMotion` | `none` \| `normal` \| `expressive` |
| `elevation` | `ThemeElevation` | `flat` \| `soft` \| `floating` |

套件已设定合理的轴默认值。仅在需要超出套件的混合效果时覆盖这些轴。

## 通过插件

```ts
app.use(Pomikit, {
  theme: createTheme({ design: 'soft', accent: '#7C6AEF' }),
})
```

传入普通选项对象也可以：`theme: { design: 'playful' }`。

## 演示台

在 [演示台](/playground) 上实时试用套件与轴。
