# Dialog

Modale déclarative **ou** confirm programmatique.

## Import

```ts
import { Dialog, Button, useDialog } from 'pomikit-ui'
```

## Chemin recommandé — confirm

```vue
<script setup lang="ts">
import { useDialog, Button } from 'pomikit-ui'

const dialog = useDialog()

async function remove() {
  const ok = await dialog.confirm({
    title: 'Delete workspace?',
    description: 'This cannot be undone.',
    confirmLabel: 'Delete',
    onConfirm: async () => {
      await api.delete()
    },
  })
  if (ok) { /* … */ }
}
</script>

<template>
  <Button confirm="Delete workspace?" @click="remove">Delete</Button>
</template>
```

Ou uniquement via `dialog.confirm` sans Button confirm.

## Dialog déclaratif

```vue
<Dialog title="Rename workspace" description="Choose a new name.">
  <template #trigger>
    <Button>Open</Button>
  </template>
  <Input v-model="name" />
  <template #footer>
    <Button @click="close">Cancel</Button>
    <Button @click="save">Save</Button>
  </template>
</Dialog>
```

## Props d’intention

| Prop | Type | Défaut |
| --- | --- | --- |
| `title` / `description` | `string` | — |
| `closeLabel` | `string` | `'Close'` |
| `closeOnInteractOutside` | `boolean` | `true` |
| `closeOnEscape` | `boolean` | `true` |

`v-model:open` — `boolean`

## Escape hatches

| Prop | Notes |
| --- | --- |
| `size` | `sm` \| `md` \| `lg` |

Slots : `trigger`, `title`, `description`, `default`, `footer`, `close`

Voir aussi [`useDialog`](/composables/use-dialog).
