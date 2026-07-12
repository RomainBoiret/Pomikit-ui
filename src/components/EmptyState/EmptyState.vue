<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import { cn } from '../../utils/cn'

export type EmptyStateProps = {
  title: string
  description?: string
}

const props = withDefaults(defineProps<EmptyStateProps>(), {
  description: undefined,
})

defineOptions({ name: 'PomiEmptyState', inheritAttrs: false })

const attrs = useAttrs()
const slots = useSlots()

const classes = computed(() =>
  cn('pomi-feedback', 'pomi-empty-state', attrs.class as string | undefined),
)

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})
</script>

<template>
  <div :class="classes" v-bind="fallthroughAttrs" role="status">
    <div v-if="slots.icon" class="pomi-feedback__icon" aria-hidden="true">
      <slot name="icon" />
    </div>
    <h3 class="pomi-feedback__title">{{ props.title }}</h3>
    <p v-if="props.description || slots.description" class="pomi-feedback__description">
      <slot name="description">{{ props.description }}</slot>
    </p>
    <div v-if="slots.action" class="pomi-feedback__action">
      <slot name="action" />
    </div>
  </div>
</template>
