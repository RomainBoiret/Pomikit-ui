# Skeleton

Surface placeholder pendant le chargement du contenu. Collection les utilise automatiquement au premier chargement pending ; utilisez Skeleton directement pour des layouts personnalisés.

## Variantes

```vue
<script setup lang="ts">
import { Skeleton } from 'pomikit-ui'
</script>

<template>
  <Skeleton variant="text" :lines="3" />
  <Skeleton variant="rect" width="100%" height="120px" />
  <Skeleton variant="circle" width="40px" height="40px" />
</template>
```

| Prop | Notes |
| --- | --- |
| `variant` | `text` \| `rect` \| `circle` |
| `lines` | Nombre de lignes de texte (défaut `1`) |
| `width` / `height` | Longueurs CSS |
| `animated` | Shimmer doux (défaut `true`) |

Le mouvement suit les tokens de motion du Design Kit.
