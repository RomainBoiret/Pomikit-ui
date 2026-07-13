<script setup lang="ts">
import { computed, useSlots, type Slots } from 'vue'
import { DropdownMenuItem } from 'reka-ui'
import { cn } from '../../utils/cn'
import type { PomiTone } from '../../utils/types'
import DropdownIcon, { type DropdownIconName } from './DropdownIcon.vue'

export type DropdownItemProps = {
  disabled?: boolean
  /** Marks the current selection — subtle accent cue */
  active?: boolean
  tone?: Extract<PomiTone, 'neutral' | 'danger'>
  /** Built-in icon name, or use the `#icon` slot */
  icon?: DropdownIconName
  /** Keyboard shortcut hint (e.g. `⌘D`, `F2`) */
  shortcut?: string
}

const props = withDefaults(defineProps<DropdownItemProps>(), {
  disabled: false,
  active: false,
  tone: 'neutral',
  icon: undefined,
  shortcut: undefined,
})

const emit = defineEmits<{
  select: [event: Event]
}>()

defineOptions({ name: 'PomiDropdownItem' })

const slots: Slots = useSlots()

const classes = computed(() =>
  cn(
    'pomi-dropdown__item',
    props.tone === 'danger' && 'pomi-dropdown__item--danger',
    props.active && 'pomi-dropdown__item--active',
  ),
)

const hasIcon = computed<boolean>(() => !!props.icon || !!slots.icon)

function onSelect(event: Event) {
  emit('select', event)
}
</script>

<template>
  <DropdownMenuItem :class="classes" :disabled="disabled" @select="onSelect">
    <span v-if="hasIcon" class="pomi-dropdown__item-icon" aria-hidden="true">
      <slot name="icon">
        <DropdownIcon v-if="icon" :name="icon" />
      </slot>
    </span>
    <span class="pomi-dropdown__item-label">
      <slot />
    </span>
    <span v-if="shortcut" class="pomi-dropdown__item-shortcut">{{ shortcut }}</span>
  </DropdownMenuItem>
</template>
