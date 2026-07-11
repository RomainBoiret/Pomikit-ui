<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../utils/cn'
import type { PomiSize, PomiTone, PomiVariant } from '../../utils/types'

const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    size?: PomiSize
    variant?: PomiVariant
    tone?: PomiTone
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    type: 'button',
    size: 'md',
    variant: 'solid',
    tone: 'primary',
    disabled: false,
    loading: false,
  },
)

defineOptions({ name: 'PomiButton' })

const isDisabled = computed(() => props.disabled || props.loading)

const classes = computed(() =>
  cn(
    'pomi-button',
    `pomi-button--${props.size}`,
    `pomi-button--${props.variant}`,
    `pomi-button--${props.tone}`,
    props.loading && 'pomi-button--loading',
  ),
)
</script>

<template>
  <button
    :type="type"
    :class="classes"
    :disabled="isDisabled"
    :aria-busy="loading || undefined"
    :aria-disabled="isDisabled || undefined"
  >
    <span
      v-if="loading"
      class="pomi-button__spinner-overlay"
      aria-hidden="true"
    >
      <span class="pomi-button__spinner" />
    </span>
    <span
      class="pomi-button__content"
      :class="{ 'pomi-button__label--hidden': loading }"
    >
      <slot name="leading" />
      <slot />
      <slot name="trailing" />
    </span>
  </button>
</template>
