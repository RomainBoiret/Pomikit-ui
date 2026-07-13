<script setup lang="ts">
import { computed, useSlots, type Slots } from 'vue'
import { DropdownMenuSubTrigger } from 'reka-ui'
import { cn } from '../../utils/cn'
import DropdownIcon, { type DropdownIconName } from './DropdownIcon.vue'

export type DropdownSubTriggerProps = {
  disabled?: boolean
  icon?: DropdownIconName
}

const props = withDefaults(defineProps<DropdownSubTriggerProps>(), {
  disabled: false,
  icon: undefined,
})

defineOptions({ name: 'PomiDropdownSubTrigger' })

const slots: Slots = useSlots()

const classes = computed(() => cn('pomi-dropdown__item', 'pomi-dropdown__sub-trigger'))

const hasIcon = computed<boolean>(() => !!props.icon || !!slots.icon)
</script>

<template>
  <DropdownMenuSubTrigger :class="classes" :disabled="disabled">
    <span v-if="hasIcon" class="pomi-dropdown__item-icon" aria-hidden="true">
      <slot name="icon">
        <DropdownIcon v-if="icon" :name="icon" />
      </slot>
    </span>
    <span class="pomi-dropdown__item-label">
      <slot />
    </span>
    <span class="pomi-dropdown__item-chevron" aria-hidden="true">
      <DropdownIcon name="chevron-right" />
    </span>
  </DropdownMenuSubTrigger>
</template>
