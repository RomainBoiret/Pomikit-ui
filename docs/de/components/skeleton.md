# Skeleton

Placeholder-Surface während Content lädt. Collection nutzt sie automatisch beim ersten pending Load; Skeleton direkt für Custom Layouts verwenden.

## Varianten

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
| `lines` | Textzeilenanzahl (Default `1`) |
| `width` / `height` | CSS-Längen |
| `animated` | Weicher Shimmer (Default `true`) |

Motion folgt den Motion-Tokens des Design Kits.
