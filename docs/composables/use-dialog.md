# useDialog

Confirmations en Promise — file FIFO.

## Prérequis

[`DialogProvider`](/guide/providers) monté dans l’arbre.

## API

```ts
import { useDialog } from 'pomikit-ui'

const dialog = useDialog()

const ok = await dialog.confirm({
  title: string
  description?: string
  confirmLabel?: string  // défaut "Confirm"
  cancelLabel?: string   // défaut "Cancel"
  tone?: PomiTone        // défaut "primary"
  onConfirm?: () => unknown // peut être async
})
// ok === true si confirmé, false si annulé / fermé
```

## Exemple

```vue
<script setup lang="ts">
import { useDialog, useToast, Button } from 'pomikit-ui'

const dialog = useDialog()
const toast = useToast()

async function askDelete() {
  const ok = await dialog.confirm({
    title: 'Delete workspace?',
    description: 'This cannot be undone.',
    confirmLabel: 'Delete',
    tone: 'danger',
    onConfirm: async () => {
      await api.deleteWorkspace()
    },
  })
  if (ok) toast.success('Deleted')
}
</script>

<template>
  <Button tone="danger" variant="outline" @click="askDelete">
    Delete
  </Button>
</template>
```

## Intent

- Les requêtes sont mises en file (FIFO)
- Si `onConfirm` retourne une Promise, le bouton Confirm reste busy
- Hors provider → erreur explicite
