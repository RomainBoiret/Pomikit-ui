# useDialog

Confirmations en Promise — file FIFO.

## Prérequis

Plugin `Pomikit`, `<PomikitRoot>`, ou (legacy) `DialogProvider`.

## Chemin recommandé

```ts
import { useDialog } from 'pomikit-ui'

const dialog = useDialog()

const ok = await dialog.confirm({
  title: 'Delete workspace?',
  description: 'This cannot be undone.',
  confirmLabel: 'Delete',
  onConfirm: async () => {
    await api.deleteWorkspace()
  },
})
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
    onConfirm: async () => {
      await api.deleteWorkspace()
    },
  })
  if (ok) toast.success('Deleted')
}
</script>

<template>
  <Button @click="askDelete">Delete</Button>
</template>
```

`tone` sur `confirm(...)` reste un escape hatch (ex. accent danger sur le bouton Confirm).

## Intent

- Requêtes en file (FIFO)
- Si `onConfirm` est async, le bouton Confirm reste busy
- Hors provider → erreur explicite
