<script setup lang="ts">
import { DropdownMenuTrigger } from 'reka-ui'

export type DropdownTriggerProps = {
  /** Accessible label when trigger has no visible text */
  label?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<DropdownTriggerProps>(), {
  label: undefined,
  disabled: false,
})

defineOptions({ name: 'PomiDropdownTrigger' })
</script>

<template>
  <DropdownMenuTrigger as-child :disabled="props.disabled" :aria-label="props.label">
    <slot />
  </DropdownMenuTrigger>
</template>
