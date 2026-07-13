<script setup lang="ts">
import { DropdownMenuRoot } from 'reka-ui'

export type DropdownSide = 'top' | 'right' | 'bottom' | 'left'
export type DropdownAlign = 'start' | 'center' | 'end'

export type DropdownProps = {
  /** When true, interacts like a modal (focus trap + scroll lock). */
  modal?: boolean
}

const props = withDefaults(defineProps<DropdownProps>(), {
  modal: true,
})

const open = defineModel<boolean>('open', { default: false })

defineOptions({ name: 'PomiDropdown' })
</script>

<template>
  <DropdownMenuRoot v-model:open="open" :modal="props.modal">
    <slot />
  </DropdownMenuRoot>
</template>
