# Skeleton

Surface placeholder enquanto o conteúdo carrega. Collection os usa automaticamente na primeira carga pending; use Skeleton diretamente para layouts custom.

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
| `lines` | Número de linhas de texto (default `1`) |
| `width` / `height` | Comprimentos CSS |
| `animated` | Shimmer suave (default `true`) |

O motion segue os tokens de motion do Design Kit.
