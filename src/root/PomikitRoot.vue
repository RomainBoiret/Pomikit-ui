<script setup lang="ts">
import { ToastProvider as RekaToastProvider, ToastViewport } from 'reka-ui'
import { computed, ref, watch } from 'vue'
import Dialog from '../components/Dialog/Dialog.vue'
import Button from '../components/Button/Button.vue'
import ToastItem from '../components/Toast/ToastItem.vue'
import { provideDialogApi } from '../composables/useDialog'
import { provideToastApi } from '../composables/useToast'
import { getPomikitServices, markOverlaysMounted } from './services'

export type PomikitRootProps = {
  toastDuration?: number
  toastLabel?: string
}

const props = withDefaults(defineProps<PomikitRootProps>(), {
  toastDuration: 4200,
  toastLabel: 'Notifications',
})

defineOptions({ name: 'PomikitRoot' })

const { dialog, toast } = getPomikitServices(props.toastDuration)
provideDialogApi(dialog.api)
provideToastApi(toast)
markOverlaysMounted()

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
const toasts = toast.toasts

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
  <RekaToastProvider :duration="toastDuration" :label="toastLabel">
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

    <ToastItem
      v-for="item in toasts"
      :key="item.id"
      :toast="item"
      @close="toast.dismiss(item.id)"
    />
    <ToastViewport class="pomi-toast__viewport" />
  </RekaToastProvider>
</template>
