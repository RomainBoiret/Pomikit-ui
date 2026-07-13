<script setup lang="ts">
import { ToastProvider as RekaToastProvider, ToastViewport } from 'reka-ui'
import { createToastStore, provideToastApi } from '../../composables/useToast'
import { useToastStackFlip } from '../../composables/useToastStackFlip'
import ToastItem from './ToastItem.vue'

export type ToastProviderProps = {
  duration?: number
  label?: string
  /** Swipe-to-dismiss direction — enabled for mobile */
  swipeDirection?: 'right' | 'left' | 'up' | 'down'
  swipeThreshold?: number
}

const props = withDefaults(defineProps<ToastProviderProps>(), {
  duration: 4200,
  label: 'Notifications',
  swipeDirection: 'right',
  swipeThreshold: 48,
})

defineOptions({ name: 'PomiToastProvider' })

const api = createToastStore(props.duration)
provideToastApi(api)
const toasts = api.toasts

useToastStackFlip(toasts)
</script>

<template>
  <RekaToastProvider
    :duration="duration"
    :label="label"
    :swipe-direction="swipeDirection"
    :swipe-threshold="swipeThreshold"
  >
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
