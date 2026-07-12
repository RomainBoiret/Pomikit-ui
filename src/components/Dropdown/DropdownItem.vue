<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuItem } from 'reka-ui'
import { cn } from '../../utils/cn'
import type { PomiTone } from '../../utils/types'

export type DropdownItemProps = {
  disabled?: boolean
  tone?: Extract<PomiTone, 'neutral' | 'danger'>
}

const props = withDefaults(defineProps<DropdownItemProps>(), {
  disabled: false,
  tone: 'neutral',
})

const emit = defineEmits<{
  select: [event: Event]
}>()

defineOptions({ name: 'PomiDropdownItem' })

const classes = computed(() =>
  cn('pomi-dropdown__item', `pomi-dropdown__item--${props.tone}`),
)

function onSelect(event: Event) {
  emit('select', event)
}
</script>

<template>
  <DropdownMenuItem :class="classes" :disabled="disabled" @select="onSelect">
    <slot />
  </DropdownMenuItem>
</template>
