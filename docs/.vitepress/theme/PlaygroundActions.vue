<script setup lang="ts">
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  useDialog,
  useToast,
} from 'pomikit-ui'

const dialog = useDialog()
const toast = useToast()

async function onSave() {
  await new Promise((r) => setTimeout(r, 700))
  toast.success('Saved', 'Profile updated')
}

async function onDelete() {
  const ok = await dialog.confirm({
    title: 'Delete workspace?',
    description: 'This cannot be undone.',
    confirmLabel: 'Delete',
    onConfirm: async () => {
      await new Promise((r) => setTimeout(r, 400))
    },
  })
  if (ok) toast.success('Deleted')
}
</script>

<template>
  <div class="pomi-pg__row">
    <Button @click="onSave">Save</Button>
    <Button @click="onDelete">Dialog</Button>
    <Button @click="toast.info('Hello from Pomikit')">Toast</Button>
    <Dropdown>
      <DropdownTrigger>
        <Button>Menu</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon="pencil" @select="toast.success('Edit')">Edit</DropdownItem>
        <DropdownItem icon="copy" shortcut="⌘D" @select="toast.success('Duplicated')">
          Duplicate
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon="trash" tone="danger" @select="onDelete">Delete</DropdownItem>
      </DropdownContent>
    </Dropdown>
  </div>
</template>
