<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../utils/cn'
import type { PomiSize, PomiTone } from '../../utils/types'

export type BadgeVariant = 'solid' | 'soft' | 'outline'

const props = withDefaults(
  defineProps<{
    size?: PomiSize
    variant?: BadgeVariant
    tone?: PomiTone
  }>(),
  {
    size: 'md',
    variant: 'soft',
    tone: 'primary',
  },
)

defineOptions({ name: 'PomiBadge' })

const classes = computed(() =>
  cn(
    'pomi-badge',
    `pomi-badge--${props.size}`,
    `pomi-badge--${props.variant}`,
    `pomi-badge--${props.tone}`,
  ),
)
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
