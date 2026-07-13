# Toast

Notifications — sémantique via le composable, pas via des variants.

## Import

```ts
import { useToast, Button } from 'pomikit-ui'
```

## Chemin recommandé

```vue
<script setup lang="ts">
import { useToast, Button } from 'pomikit-ui'

const toast = useToast()
</script>

<template>
  <Button @click="toast.success('Profile saved')">Success</Button>
  <Button @click="toast.error('Something went wrong')">Error</Button>
  <Button @click="toast.warning('Heads up')">Warning</Button>
  <Button @click="toast.info('Tip')">Info</Button>
</template>
```

Surface neutre. Accents uniquement sur l’icône. Stack FLIP, bas à droite, swipe mobile.

## Setup

Via plugin `Pomikit` ou `<PomikitRoot>` — voir [Providers](/guide/providers).

| Prop provider | Défaut |
| --- | --- |
| `duration` | `4200` |
| `swipeDirection` | `'right'` |

API : [`useToast`](/composables/use-toast).
