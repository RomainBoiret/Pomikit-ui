# Toast

Notifications éphémères via provider + composable.

## Import

```ts
import { ToastProvider, useToast, Button } from 'pomikit-ui'
```

## Setup

Voir [Providers](/guide/providers).

```vue
<ToastProvider :duration="4200">
  <App />
</ToastProvider>
```

| Prop | Type | Défaut |
| --- | --- | --- |
| `duration` | `number` | `4200` |
| `label` | `string` | `'Notifications'` |

## Usage

```vue
<script setup lang="ts">
import { useToast, Button } from 'pomikit-ui'

const toast = useToast()
</script>

<template>
  <Button @click="toast.show('Hello Pomikit')">Show</Button>
  <Button @click="toast.success('Saved', 'Profile updated')">Success</Button>
  <Button tone="danger" @click="toast.error('Failed', 'Try again')">Error</Button>
</template>
```

API complète : [`useToast`](/composables/use-toast).
