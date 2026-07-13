# useToast

```ts
import { useToast } from 'pomikit-ui'

const toast = useToast()

toast.success('Profile saved')
toast.error('Something went wrong')
toast.warning('Heads up')
toast.info('Tip')

toast.show('Hello')
toast.show({ title: 'Hello', description: '…', duration: 3000 })

toast.dismiss(id)
toast.clear()
```

Pas de `variant` : la sémantique est dans la méthode (`success` / `error` / …).

Nécessite le plugin `Pomikit` ou `<PomikitRoot>` (voir [Providers](/guide/providers)).

```vue
<script setup lang="ts">
import { useToast, Button } from 'pomikit-ui'
const toast = useToast()
</script>

<template>
  <Button @click="toast.success('Saved')">Notify</Button>
</template>
```
