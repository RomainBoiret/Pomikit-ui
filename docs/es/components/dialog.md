# Dialog

Surface modal para tareas enfocadas. Usa el componente declarativo, o `useDialog().confirm` para confirms imperativos (requiere plugin / PomikitRoot).

## Declarativo

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

Slots: body por defecto, opcionales `title`, `description`, `footer`. Los props también aceptan strings `title` / `description`.

## Confirm imperativo

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

Si `onConfirm` devuelve una Promise, el botón confirm permanece busy hasta que se resuelve.

## Props de comportamiento

| Prop | Default | Notes |
| --- | --- | --- |
| `closeOnInteractOutside` | `true` | Click fuera |
| `closeOnEscape` | `true` | Tecla Escape |
| `closeLabel` | `'Close'` | Label de cierre accesible |

Asegura que los servicios estén montados vía [Root y servicios](/guide/providers). No dependas del `DialogProvider` deprecado en apps nuevas.
