# useToast

API imperative pour les notifications.

## Prérequis

[`ToastProvider`](/guide/providers) monté dans l’arbre.

## API

```ts
import { useToast } from 'pomikit-ui'

const toast = useToast()

toast.show('Hello') // id
toast.show({ title: 'Hello', description: '…', tone: 'primary', duration: 3000 })

toast.success(title, description?)
toast.error(title, description?)

toast.dismiss(id)
toast.clear()
toast.toasts // Ref<ToastRecord[]>
```

### Types

```ts
type ToastTone = 'neutral' | 'success' | 'danger' | 'primary'

type ToastInput = {
  title: string
  description?: string
  tone?: ToastTone
  duration?: number
}
```

## Exemple

```vue
<script setup lang="ts">
import { useToast, Button } from 'pomikit-ui'

const toast = useToast()
</script>

<template>
  <Button variant="soft" @click="toast.show('Hello Pomikit')">Toast</Button>
  <Button @click="toast.success('Saved', 'Profile updated')">Saved</Button>
</template>
```

La durée par défaut vient de `ToastProvider` (`4200` ms), surchargeable par toast.
