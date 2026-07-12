<script setup lang="ts">
import { computed } from 'vue'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from 'reka-ui'
import { cn } from '../../utils/cn'
import type { ToastRecord } from '../../composables/useToast'

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

const classes = computed(() =>
  cn('pomi-toast', `pomi-toast--${props.toast.tone ?? 'neutral'}`),
)
</script>

<template>
  <ToastRoot
    v-model:open="open"
    :class="classes"
    :duration="toast.duration"
    @escape-key-down="emit('close')"
  >
    <div class="pomi-toast__body">
      <ToastTitle class="pomi-toast__title">{{ toast.title }}</ToastTitle>
      <ToastDescription v-if="toast.description" class="pomi-toast__description">
        {{ toast.description }}
      </ToastDescription>
    </div>
    <ToastClose class="pomi-toast__close" aria-label="Close">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </ToastClose>
  </ToastRoot>
</template>
