# Dialog

Surface modale pour des tâches focalisées. Utilisez le composant déclaratif, ou `useDialog().confirm` pour des confirms impératifs (nécessite plugin / PomikitRoot).

## Déclaratif

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

Slots : corps par défaut, optionnels `title`, `description`, `footer`. Les props acceptent aussi des chaînes `title` / `description`.

## Confirm impératif

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

Si `onConfirm` retourne une Promise, le bouton de confirmation reste busy jusqu'à la résolution.

## Props de comportement

| Prop | Défaut | Notes |
| --- | --- | --- |
| `closeOnInteractOutside` | `true` | Clic extérieur |
| `closeOnEscape` | `true` | Touche Escape |
| `closeLabel` | `'Close'` | Libellé accessible de fermeture |

Assurez-vous que les services sont montés via [Root et services](/guide/providers). Ne vous appuyez pas sur le `DialogProvider` déprécié dans les nouvelles applications.
