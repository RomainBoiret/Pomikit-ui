<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '../../utils/cn'

export type SkeletonVariant = 'text' | 'rect' | 'circle'

export type SkeletonProps = {
  variant?: SkeletonVariant
  /** Number of text lines when variant is text (default 1). */
  lines?: number
  width?: string
  height?: string
  /** Soft shimmer sweep. Default true. */
  animated?: boolean
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  variant: 'text',
  lines: 1,
  width: undefined,
  height: undefined,
  animated: true,
})

defineOptions({ name: 'PomiSkeleton', inheritAttrs: false })

const attrs = useAttrs()

const rootClass = computed(() =>
  cn('pomi-skeleton-stack', attrs.class as string | undefined),
)

const itemClass = computed(() =>
  cn(
    'pomi-skeleton',
    `pomi-skeleton--${props.variant}`,
    !props.animated && 'pomi-skeleton--static',
  ),
)

const count = computed(() => {
  if (props.variant !== 'text') return 1
  return Math.max(1, props.lines)
})

function lineWidth(index: number): string | undefined {
  if (props.width) return props.width
  if (props.variant !== 'text' || count.value === 1) return undefined
  if (index === count.value) return '64%'
  if (index === count.value - 1 && count.value > 2) return '86%'
  return undefined
}

function itemStyle(index = 1) {
  const style: Record<string, string> = {
    '--pomi-skeleton-delay': `${(index - 1) * 90}ms`,
  }
  const width = lineWidth(index)
  if (width) style.width = width
  if (props.height) style.height = props.height
  return style
}

const fallthroughAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs
  return rest
})
</script>

<template>
  <div
    v-if="count > 1"
    :class="rootClass"
    v-bind="fallthroughAttrs"
    aria-hidden="true"
  >
    <span
      v-for="i in count"
      :key="i"
      :class="itemClass"
      :style="itemStyle(i)"
    />
  </div>
  <span
    v-else
    :class="cn(itemClass, attrs.class as string | undefined)"
    :style="itemStyle(1)"
    v-bind="fallthroughAttrs"
    aria-hidden="true"
  />
</template>
