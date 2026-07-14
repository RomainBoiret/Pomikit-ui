# Dialog

Surface modal para tarefas focadas. Use o componente declarativo, ou `useDialog().confirm` para confirms imperativos (requer plugin / PomikitRoot).

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

Slots: body padrão, opcionais `title`, `description`, `footer`. Os props também aceitam strings `title` / `description`.

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

Se `onConfirm` retornar uma Promise, o botão confirm permanece busy até resolver.

## Props de comportamento

| Prop | Default | Notes |
| --- | --- | --- |
| `closeOnInteractOutside` | `true` | Click fora |
| `closeOnEscape` | `true` | Tecla Escape |
| `closeLabel` | `'Close'` | Label de fechamento acessível |

Garanta que os serviços estejam montados via [Root e serviços](/guide/providers). Não dependa do `DialogProvider` deprecado em apps novas.
