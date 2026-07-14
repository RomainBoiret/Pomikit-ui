# Dialog

Modal surface for focused tasks. Use the declarative component, or `useDialog().confirm` for imperative confirms (requires plugin / PomikitRoot).

## Declarative

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, Button } from 'pomikit-ui'

const open = ref(false)
</script>

<template>
  <Button @click="open = true">Edit profile</Button>

  <Dialog v-model:open="open" title="Edit profile" description="Update your public details.">
    <!-- form fields -->
    <template #footer>
      <Button @click="open = false">Cancel</Button>
      <Button @click="save">Save</Button>
    </template>
  </Dialog>
</template>
```

Slots: default body, optional `title`, `description`, `footer`. Props also accept `title` / `description` strings.

## Imperative confirm

```ts
import { useDialog, useToast } from 'pomikit-ui'

const dialog = useDialog()
const toast = useToast()

async function onDelete() {
  const ok = await dialog.confirm({
    title: 'Delete project?',
    description: 'This cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    tone: 'danger',
    onConfirm: () => api.deleteProject(),
  })
  if (ok) toast.success('Deleted')
}
```

If `onConfirm` returns a Promise, the confirm button stays busy until it settles.

## Behavior props

| Prop | Default | Notes |
| --- | --- | --- |
| `closeOnInteractOutside` | `true` | Outside click |
| `closeOnEscape` | `true` | Escape key |
| `closeLabel` | `'Close'` | Accessible close label |

Ensure services are mounted via [Root & services](/guide/providers). Do not rely on deprecated `DialogProvider` in new apps.
