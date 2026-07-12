# Dialog

Modale déclarative **ou** confirm programmatique via provider.

## Import

```ts
import { Dialog, DialogProvider, Button, useDialog } from 'pomikit-ui'
```

## Dialog déclaratif

```vue
<Dialog title="Rename workspace" description="Choose a new name.">
  <template #trigger>
    <Button variant="outline">Open</Button>
  </template>
  <Input v-model="name" />
  <template #footer>
    <Button variant="ghost" tone="neutral">Cancel</Button>
    <Button>Save</Button>
  </template>
</Dialog>
```

### Props

| Prop | Type | Défaut |
| --- | --- | --- |
| `title` | `string` | — |
| `description` | `string` | — |
| `size` | `PomiSize` | `'md'` |
| `closeLabel` | `string` | `'Close'` |
| `closeOnInteractOutside` | `boolean` | `true` |
| `closeOnEscape` | `boolean` | `true` |

`v-model:open` — `boolean`

Slots : `trigger`, `title`, `description`, `default`, `footer`, `close`

Un titre accessible est toujours exposé (fallback sr-only « Dialog »).

## Confirm programmatique

Nécessite [`DialogProvider`](/guide/providers) + [`useDialog`](/composables/use-dialog).

```vue
<script setup lang="ts">
import { useDialog, Button } from 'pomikit-ui'

const dialog = useDialog()

async function remove() {
  const ok = await dialog.confirm({
    title: 'Delete workspace?',
    description: 'This cannot be undone.',
    confirmLabel: 'Delete',
    tone: 'danger',
    onConfirm: async () => {
      await api.delete()
    },
  })
  if (ok) { /* … */ }
}
</script>

<template>
  <Button tone="danger" @click="remove">Delete</Button>
</template>
```

`DialogProvider` n’est **pas** requis pour le `Dialog` déclaratif avec trigger.
