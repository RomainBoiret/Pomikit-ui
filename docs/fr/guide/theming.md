# Design Kits

Un seul appel thématise toute l'application : couleurs, rayon, ombres, espacement, typographie, mouvement et surfaces. Les composants ne font que consommer des tokens.

## Kits officiels

| Design | Caractère |
| --- | --- |
| `linear` | UI produit minimale. Gris froids, ombres discrètes, espacement aéré. **Par défaut.** |
| `glass` | Verre doux. Flou discret, bords lumineux. |
| `editorial` | Contenu d'abord. Titres serif, rayon bas, presque pas d'ombre. |
| `soft` | Chaleureux et accueillant. Rayon généreux, contraste doux. |
| `playful` | Vivant sans être cartoon. Accent plus fort, plus rond, motion plus dynamique. |

```ts
import { DESIGNS } from 'pomikit-ui'

DESIGNS.linear // DesignKit
```

Le zero-config (sans `createTheme` / thème via le plugin) se résout en **`linear`**.

## createTheme et applyTheme

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

### Options

| Option | Type | Notes |
| --- | --- | --- |
| `design` | `ThemeDesign` | `linear` \| `glass` \| `editorial` \| `soft` \| `playful` |
| `accent` | `string` | Accent de marque en hex |
| `mode` | `ThemeMode` | `light` \| `dark` \| `system` |
| `radius` | `ThemeRadius` | Surcharge d'axe : `sharp` \| `soft` \| `round` |
| `density` | `ThemeDensity` | `compact` \| `comfortable` \| `spacious` |
| `motion` | `ThemeMotion` | `none` \| `normal` \| `expressive` |
| `elevation` | `ThemeElevation` | `flat` \| `soft` \| `floating` |

Les kits définissent déjà des axes par défaut sensés. Ne surchargez les axes que pour un hybride au-delà du kit.

## Via le plugin

```ts
app.use(Pomikit, {
  theme: createTheme({ design: 'soft', accent: '#7C6AEF' }),
})
```

Passer un objet d'options brut fonctionne aussi : `theme: { design: 'playful' }`.

## Playground

Essayez les kits et les axes en direct sur le [Playground](/playground).
