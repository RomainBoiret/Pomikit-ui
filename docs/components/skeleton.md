# Skeleton

Placeholder surface while content loads. Collection uses these automatically on first pending load; use Skeleton directly for custom layouts.

## Variants

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
| `lines` | Text line count (default `1`) |
| `width` / `height` | CSS lengths |
| `animated` | Soft shimmer (default `true`) |

Motion follows the Design Kit motion tokens.
