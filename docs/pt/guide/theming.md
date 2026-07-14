# Design Kits

Uma única chamada tematiza a app inteira: cores, radius, sombras, spacing, tipografia, motion e surfaces. Os componentes só consomem tokens.

## Kits oficiais

| Design | Caráter |
| --- | --- |
| `linear` | UI de produto minimal. Cinzas frios, sombras esparsas, spacing arejado. **Default.** |
| `glass` | Glass suave. Blur discreto, bordas luminosas. |
| `editorial` | Conteúdo em primeiro lugar. Títulos serif, radius baixo, quase sem sombra. |
| `soft` | Quente e acolhedor. Radius generoso, contraste suave. |
| `playful` | Vivo, mas sem cartoon. Accent mais forte, mais redondo, motion mais dinâmico. |

```ts
import { DESIGNS } from 'pomikit-ui'

DESIGNS.linear // DesignKit
```

Zero-config (sem `createTheme` / tema do plugin) resolve para **`linear`**.

## createTheme e applyTheme

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

### Opções

| Option | Type | Notes |
| --- | --- | --- |
| `design` | `ThemeDesign` | `linear` \| `glass` \| `editorial` \| `soft` \| `playful` |
| `accent` | `string` | Hex do accent da marca |
| `mode` | `ThemeMode` | `light` \| `dark` \| `system` |
| `radius` | `ThemeRadius` | Override de eixo: `sharp` \| `soft` \| `round` |
| `density` | `ThemeDensity` | `compact` \| `comfortable` \| `spacious` |
| `motion` | `ThemeMotion` | `none` \| `normal` \| `expressive` |
| `elevation` | `ThemeElevation` | `flat` \| `soft` \| `floating` |

Os kits já definem defaults sensatos nos eixos. Sobrescreva eixos só quando precisar de um híbrido além do kit.

## Via o plugin

```ts
app.use(Pomikit, {
  theme: createTheme({ design: 'soft', accent: '#7C6AEF' }),
})
```

Passar um objeto de opções simples também funciona: `theme: { design: 'playful' }`.

## Playground

Experimente kits e eixos ao vivo no [Playground](/playground).
