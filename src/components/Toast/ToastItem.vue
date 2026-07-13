<script setup lang="ts">
import { computed } from 'vue'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from 'reka-ui'
import { cn } from '../../utils/cn'
import type { ToastRecord, ToastTone } from '../../composables/useToast'

const props = defineProps<{
  toast: ToastRecord
}>()

const emit = defineEmits<{
  close: []
}>()

defineOptions({ name: 'PomiToastItem' })

const open = computed({
  get: () => props.toast.open,
  set: (value: boolean) => {
    if (!value) emit('close')
  },
})

const tone = computed<ToastTone>(() => props.toast.tone)

const classes = computed(() => cn('pomi-toast', `pomi-toast--${tone.value}`))

const progressStyle = computed(() => ({
  animationDuration: `${props.toast.duration}ms`,
}))
</script>

<template>
  <ToastRoot
    v-model:open="open"
    :class="classes"
    :data-toast-id="String(toast.id)"
    :duration="toast.duration"
    @escape-key-down="emit('close')"
  >
    <!-- Optional 2px edge — success only -->
    <span v-if="tone === 'success'" class="pomi-toast__accent" aria-hidden="true" />

    <span class="pomi-toast__icon" aria-hidden="true">
      <svg v-if="tone === 'success'" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M3.5 8.4l3 2.95 6-7.1"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg v-else-if="tone === 'danger'" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M5.2 5.2l5.6 5.6M10.8 5.2l-5.6 5.6"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
        />
      </svg>
      <svg v-else-if="tone === 'warning'" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 5.1v3.8M8 11.15h.01"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
        />
        <path
          d="M7.18 3.2 2.55 11.55c-.32.58.1 1.3.77 1.3h9.36c.67 0 1.09-.72.77-1.3L8.82 3.2c-.33-.6-1.14-.6-1.64 0Z"
          stroke="currentColor"
          stroke-width="1.35"
          stroke-linejoin="round"
        />
      </svg>
      <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5.25" stroke="currentColor" stroke-width="1.4" />
        <path
          d="M8 7.2v3.35M8 5.2h.01"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
        />
      </svg>
    </span>

    <div class="pomi-toast__body">
      <ToastTitle class="pomi-toast__title">{{ toast.title }}</ToastTitle>
      <ToastDescription v-if="toast.description" class="pomi-toast__description">
        {{ toast.description }}
      </ToastDescription>
    </div>

    <ToastClose class="pomi-toast__close" aria-label="Close">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
          d="M3 3l6 6M9 3l-6 6"
          stroke="currentColor"
          stroke-width="1.35"
          stroke-linecap="round"
        />
      </svg>
    </ToastClose>

    <span
      v-if="toast.duration > 0"
      class="pomi-toast__progress"
      :style="progressStyle"
      aria-hidden="true"
    />
  </ToastRoot>
</template>
