<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Dialog from '../components/Dialog/Dialog.vue'
import Button from '../components/Button/Button.vue'
import { ToastProvider as RekaToastProvider, ToastViewport } from 'reka-ui'
import ToastItem from '../components/Toast/ToastItem.vue'
import { getPomikitServices } from './services'

defineOptions({ name: 'PomiOverlays' })

const props = withDefaults(
  defineProps<{
    toastDuration?: number
    toastLabel?: string
  }>(),
  {
    toastDuration: 4200,
    toastLabel: 'Notifications',
  },
)

const { dialog, toast } = getPomikitServices(props.toastDuration)
const toasts = toast.toasts

const open = ref(false)

watch(
  () => dialog.current.value?.id,
  (id) => {
    open.value = id != null
  },
  { immediate: true },
)

const current = computed(() => dialog.current.value)
const confirmTone = computed(() => current.value?.tone ?? 'primary')

async function onConfirm() {
  const active = current.value
  if (!active) return
  if (active.onConfirm) await active.onConfirm()
  dialog.closeCurrent(true)
}

function onCancel() {
  dialog.closeCurrent(false)
}

function onOpenUpdate(value: boolean) {
  open.value = value
  if (!value && current.value) dialog.closeCurrent(false)
}
</script>

<template>
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

  <RekaToastProvider :duration="toastDuration" :label="toastLabel">
    <ToastItem
      v-for="item in toasts"
      :key="item.id"
      :toast="item"
      @close="toast.dismiss(item.id)"
    />
    <ToastViewport class="pomi-toast__viewport" />
  </RekaToastProvider>
</template>
