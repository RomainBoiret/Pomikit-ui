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
  <div class="pg-actions">
    <div class="pg-actions__group">
      <p class="pg-actions__label">Try me</p>
      <div class="pg-actions__row">
        <Button @click="onSave">Save</Button>
        <Button confirm="Delete project?" @click="onDelete">Delete</Button>
        <Button @click="toast.info('Hello from Pomikit', 'Nice to meet you')">Toast</Button>
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
    </div>

    <div class="pg-actions__group">
      <p class="pg-actions__label">Variants</p>
      <div class="pg-actions__row">
        <Button>Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>

    <div class="pg-actions__group">
      <p class="pg-actions__label">Tones</p>
      <div class="pg-actions__row">
        <Button tone="primary">Primary</Button>
        <Button tone="neutral">Neutral</Button>
        <Button tone="success">Success</Button>
        <Button tone="danger">Danger</Button>
      </div>
    </div>

    <div class="pg-actions__group">
      <p class="pg-actions__label">Sizes</p>
      <div class="pg-actions__row">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pg-actions {
  display: grid;
  gap: 1.15rem;
}

.pg-actions__group {
  display: grid;
  gap: 0.55rem;
}

.pg-actions__label {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--pomi-muted, #5c5f6a);
}

.pg-actions__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}
</style>
