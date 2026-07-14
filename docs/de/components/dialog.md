# Dialog

Modale Surface für fokussierte Tasks. Deklarative Komponente nutzen, oder `useDialog().confirm` für imperative Confirms (braucht Plugin / PomikitRoot).

## Deklarativ

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

Slots: Default Body, optional `title`, `description`, `footer`. Props akzeptieren auch `title` / `description` Strings.

## Imperatives Confirm

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

Wenn `onConfirm` ein Promise zurückgibt, bleibt der Confirm-Button busy bis zur Settlement.

## Behavior Props

| Prop | Default | Notes |
| --- | --- | --- |
| `closeOnInteractOutside` | `true` | Outside Click |
| `closeOnEscape` | `true` | Escape-Taste |
| `closeLabel` | `'Close'` | Accessible Close Label |

Sicherstellen, dass Services über [Root & Services](/guide/providers) gemountet sind. Nicht auf deprecated `DialogProvider` in neuen Apps setzen.
