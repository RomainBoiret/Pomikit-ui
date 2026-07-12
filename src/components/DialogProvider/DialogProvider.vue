<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Dialog from '../Dialog/Dialog.vue'
import Button from '../Button/Button.vue'
import { createDialogStore, provideDialogApi } from '../../composables/useDialog'

defineOptions({ name: 'PomiDialogProvider' })

const store = createDialogStore()
provideDialogApi(store.api)

const open = ref(false)

watch(
  () => store.current.value?.id,
  (id) => {
    open.value = id != null
  },
  { immediate: true },
)

const current = computed(() => store.current.value)
const confirmTone = computed(() => current.value?.tone ?? 'primary')

async function onConfirm() {
  const active = current.value
  if (!active) return

  if (active.onConfirm) {
    await active.onConfirm()
  }

  store.closeCurrent(true)
}

function onCancel() {
  store.closeCurrent(false)
}

function onOpenUpdate(value: boolean) {
  open.value = value
  if (!value && current.value) {
    store.closeCurrent(false)
  }
}
</script>

<template>
  <slot />

  <Dialog
    :open="open"
    :title="current?.title"
    :description="current?.description"
    @update:open="onOpenUpdate"
  >
    <template #footer>
      <Button variant="ghost" tone="neutral" @click="onCancel">
        {{ current?.cancelLabel ?? 'Cancel' }}
      </Button>
      <Button :tone="confirmTone" @click="onConfirm">
        {{ current?.confirmLabel ?? 'Confirm' }}
      </Button>
    </template>
  </Dialog>
</template>
