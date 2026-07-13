# Thème (Design Kits)

**Design once. Nowhere else.**

Tu ne stylises pas chaque composant. Tu choisis **une identité** pour toute l’app — c’est la seule décision visuelle recommandée.

```ts
createTheme({ design: 'linear', accent: '#5B5FFF' })
createTheme({ design: 'glass' })
createTheme({ design: 'editorial' })
```

```ts
createTheme({ design: 'linear', accent: '#5B5FFF' })
createTheme({ design: 'glass' })
createTheme({ design: 'editorial' })
```

Même `Button` / `Input` / `Card` — tokens différents.

## Zero-config

Sans `createTheme`, les tokens `:root` = kit **`linear`**.

## Setup

```ts
import { Pomikit, createTheme } from 'pomikit-ui'

app.use(Pomikit, {
  theme: createTheme({
    accent: '#5B5FFF',
    design: 'linear',
  }),
})
```

Ou à chaud :

```ts
import { createTheme, applyTheme } from 'pomikit-ui'

applyTheme(createTheme({ design: 'glass' }))
```

## Design Kits

| Kit | Ambiance |
| --- | --- |
| **`linear`** | Ultra minimal — Linear, Vercel, GitHub |
| **`glass`** | Translucide discret — Raycast, Arc |
| **`editorial`** | Contenu, Newsreader — Notion, Medium |
| **`soft`** | Accueillant — Figma, Framer |
| **`playful`** | Plus vif — Discord, Pitch |

Chaque kit règle : couleurs, radius, shadows, spacing, motion, typography, surfaces.

Les composants n’ont **aucune** branche `if (design === …)`.

## Axes (overrides rares)

| Option | Rôle |
| --- | --- |
| `accent` | Couleur de marque |
| `design` | Kit d’identité |
| `radius` / `density` / `motion` / `elevation` | Escape hatches d’axes |
| `mode` | `light` \| `dark` \| `system` |

> Migration : `personality: 'pomikit' | 'minimal'` → `linear`, `elegant` → `editorial`.

## Règle produit

Le développeur **ne choisit pas** un style par bouton.  
Il choisit le kit une fois — Pomikit fait le reste.

Voir [Philosophie](/guide/philosophy).
