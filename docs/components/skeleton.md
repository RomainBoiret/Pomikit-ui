# Skeleton

Placeholders de chargement — shimmer doux, lignes naturelles.

## Import

```ts
import { Skeleton } from 'pomikit-ui'
```

## Exemples

```vue
<Skeleton :lines="3" />

<div style="display:flex;gap:0.85rem;align-items:center">
  <Skeleton variant="circle" width="3rem" height="3rem" />
  <Skeleton :lines="2" />
</div>

<Skeleton variant="rect" height="8rem" />
<Skeleton :lines="3" :animated="false" />
```

## Props

| Prop | Type | Défaut |
| --- | --- | --- |
| `variant` | `'text' \| 'rect' \| 'circle'` | `'text'` |
| `lines` | `number` | `1` |
| `width` | `string` | — |
| `height` | `string` | — |
| `animated` | `boolean` | `true` |

## Intent

- Multi-lignes : largeurs dégressives + délai de shimmer décalé
- `aria-hidden="true"`
- Respecte `prefers-reduced-motion`
