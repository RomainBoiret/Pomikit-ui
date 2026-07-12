<script setup lang="ts">
import { ToastProvider as RekaToastProvider, ToastViewport } from 'reka-ui'
import { createToastStore, provideToastApi } from '../../composables/useToast'
import ToastItem from './ToastItem.vue'

export type ToastProviderProps = {
  duration?: number
  label?: string
}

const props = withDefaults(defineProps<ToastProviderProps>(), {
  duration: 4200,
  label: 'Notifications',
})

defineOptions({ name: 'PomiToastProvider' })

const api = createToastStore(props.duration)
provideToastApi(api)
const toasts = api.toasts
</script>

<template>
  <RekaToastProvider :duration="duration" :label="label">
    <slot />
    <ToastItem
      v-for="toast in toasts"
      :key="toast.id"
      :toast="toast"
      @close="api.dismiss(toast.id)"
    />
    <ToastViewport class="pomi-toast__viewport" />
  </RekaToastProvider>
</template>
