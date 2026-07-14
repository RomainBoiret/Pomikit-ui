# Design Kits

Una sola llamada tematiza toda la app: colores, radius, sombras, spacing, tipografía, motion y surfaces. Los componentes solo consumen tokens.

## Kits oficiales

| Design | Carácter |
| --- | --- |
| `linear` | UI de producto minimal. Grises fríos, sombras escasas, spacing aireado. **Default.** |
| `glass` | Glass suave. Blur discreto, bordes luminosos. |
| `editorial` | Contenido primero. Títulos serif, radius bajo, casi sin sombra. |
| `soft` | Cálido y acogedor. Radius generoso, contraste suave. |
| `playful` | Vivo pero no cartoon. Accent más fuerte, más redondo, motion más dinámico. |

```ts
import { DESIGNS } from 'pomikit-ui'

DESIGNS.linear // DesignKit
```

Zero-config (sin `createTheme` / tema del plugin) resuelve a **`linear`**.

## createTheme y applyTheme

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

### Opciones

| Option | Type | Notes |
| --- | --- | --- |
| `design` | `ThemeDesign` | `linear` \| `glass` \| `editorial` \| `soft` \| `playful` |
| `accent` | `string` | Hex del accent de marca |
| `mode` | `ThemeMode` | `light` \| `dark` \| `system` |
| `radius` | `ThemeRadius` | Override de eje: `sharp` \| `soft` \| `round` |
| `density` | `ThemeDensity` | `compact` \| `comfortable` \| `spacious` |
| `motion` | `ThemeMotion` | `none` \| `normal` \| `expressive` |
| `elevation` | `ThemeElevation` | `flat` \| `soft` \| `floating` |

Los kits ya definen defaults sensatos en los ejes. Sobrescribe ejes solo cuando necesites un híbrido más allá del kit.

## Vía el plugin

```ts
app.use(Pomikit, {
  theme: createTheme({ design: 'soft', accent: '#7C6AEF' }),
})
```

Pasar un objeto de opciones plano también funciona: `theme: { design: 'playful' }`.

## Playground

Prueba kits y ejes en vivo en el [Playground](/playground).
