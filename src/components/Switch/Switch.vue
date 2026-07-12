<script setup lang="ts">
import { computed, useAttrs, useId } from 'vue'
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { cn } from '../../utils/cn'
import { useFieldContext } from '../../composables/useField'
import type { PomiSize } from '../../utils/types'

export type SwitchProps = {
  label?: string
  size?: PomiSize
  disabled?: boolean
  required?: boolean
  id?: string
  name?: string
}

const props = withDefaults(defineProps<SwitchProps>(), {
  label: undefined,
  size: 'md',
  disabled: false,
  required: false,
  id: undefined,
  name: undefined,
})

const model = defineModel<boolean>({ default: false })

defineOptions({ name: 'PomiSwitch', inheritAttrs: false })

const attrs = useAttrs()
const field = useFieldContext()
const generatedId = useId()
const inputId = computed(() => props.id ?? field?.controlId.value ?? generatedId)
const isRequired = computed(() => props.required || !!field?.required.value)

const rootClass = computed(() =>
  cn(
    'pomi-switch',
    `pomi-switch--${props.size}`,
    props.disabled && 'pomi-switch--disabled',
    attrs.class as string | undefined,
  ),
)

const fallthrough = computed(() => {
  const { class: _c, ...rest } = attrs
  return rest
})
</script>

<template>
  <label :class="rootClass">
    <SwitchRoot
      :id="inputId"
      v-model="model"
      class="pomi-switch__control"
      v-bind="fallthrough"
      :name="name"
      :disabled="disabled"
      :required="isRequired"
      :aria-describedby="field?.describedBy.value"
    >
      <SwitchThumb class="pomi-switch__thumb" />
    </SwitchRoot>
    <span v-if="label || $slots.default" class="pomi-switch__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
