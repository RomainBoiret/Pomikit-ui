# Skeleton

Surface placeholder mientras carga el contenido. Collection los usa automáticamente en la primera carga pending; usa Skeleton directamente para layouts custom.

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
| `lines` | Número de líneas de texto (default `1`) |
| `width` / `height` | Longitudes CSS |
| `animated` | Shimmer suave (default `true`) |

El motion sigue los tokens de motion del Design Kit.
