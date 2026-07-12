<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { RadioGroupRoot } from 'reka-ui'
import { cn } from '../../utils/cn'
import type { PomiSize } from '../../utils/types'

export type RadioGroupProps = {
  size?: PomiSize
  disabled?: boolean
  required?: boolean
  name?: string
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<RadioGroupProps>(), {
  size: 'md',
  disabled: false,
  required: false,
  name: undefined,
  orientation: 'vertical',
})

const model = defineModel<string>()

defineOptions({ name: 'PomiRadioGroup', inheritAttrs: false })

const attrs = useAttrs()

const rootClass = computed(() =>
  cn(
    'pomi-radio-group',
    `pomi-radio-group--${props.orientation}`,
    `pomi-radio-group--${props.size}`,
    attrs.class as string | undefined,
  ),
)

const fallthrough = computed(() => {
  const { class: _c, ...rest } = attrs
  return rest
})

function onValueChange(value: unknown) {
  if (typeof value === 'string') model.value = value
}
</script>

<template>
  <RadioGroupRoot
    :model-value="model"
    :class="rootClass"
    v-bind="fallthrough"
    :name="name"
    :disabled="disabled"
    :required="required"
    :orientation="orientation"
    @update:model-value="onValueChange"
  >
    <slot />
  </RadioGroupRoot>
</template>
