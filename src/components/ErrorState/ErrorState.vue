<script setup lang="ts">
import { computed, getCurrentInstance, useAttrs, useSlots } from 'vue'
import { cn } from '../../utils/cn'
import Button from '../Button/Button.vue'

export type ErrorStateProps = {
  title?: string
  description?: string
  /** Intent: string | Error | unknown — used when description is omitted. */
  error?: unknown
  retryLabel?: string
}

const props = withDefaults(defineProps<ErrorStateProps>(), {
  title: 'Something went wrong',
  description: undefined,
  error: undefined,
  retryLabel: 'Retry',
})

const emit = defineEmits<{
  retry: []
}>()

defineOptions({ name: 'PomiErrorState', inheritAttrs: false })

const attrs = useAttrs()
const slots = useSlots()
const instance = getCurrentInstance()

const classes = computed(() =>
  cn('pomi-feedback', 'pomi-error-state', attrs.class as string | undefined),
)

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})

const resolvedDescription = computed(() => {
  if (props.description) return props.description
  if (props.error == null) return undefined
  if (typeof props.error === 'string') return props.error
  if (props.error instanceof Error) return props.error.message
  return 'Please try again.'
})

const hasRetryListener = computed(() => {
  const vnodeProps = instance?.vnode.props
  return typeof vnodeProps?.onRetry === 'function'
})

const showRetry = computed(() => hasRetryListener.value || !!slots.action)

function onRetryClick() {
  emit('retry')
}
</script>

<template>
  <div :class="classes" v-bind="fallthroughAttrs" role="alert">
    <div v-if="slots.icon" class="pomi-feedback__icon" aria-hidden="true">
      <slot name="icon" />
    </div>
    <h3 class="pomi-feedback__title">{{ title }}</h3>
    <p v-if="resolvedDescription || slots.description" class="pomi-feedback__description">
      <slot name="description">{{ resolvedDescription }}</slot>
    </p>
    <div v-if="showRetry" class="pomi-feedback__action">
      <slot name="action">
        <Button tone="neutral" variant="outline" size="sm" @click="onRetryClick">
          {{ retryLabel }}
        </Button>
      </slot>
    </div>
  </div>
</template>
