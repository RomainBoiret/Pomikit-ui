<script setup lang="ts">
import { computed, useAttrs, useId } from 'vue'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { cn } from '../../utils/cn'
import { useFieldContext } from '../../composables/useField'
import type { PomiSize } from '../../utils/types'

export type CheckboxProps = {
  /** Optional inline label when not wrapped in Field. */
  label?: string
  size?: PomiSize
  disabled?: boolean
  required?: boolean
  id?: string
  name?: string
  value?: string
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: undefined,
  size: 'md',
  disabled: false,
  required: false,
  id: undefined,
  name: undefined,
  value: 'on',
})

const model = defineModel<boolean | 'indeterminate'>({ default: false })

defineOptions({ name: 'PomiCheckbox', inheritAttrs: false })

const attrs = useAttrs()
const field = useFieldContext()
const generatedId = useId()
const inputId = computed(() => props.id ?? field?.controlId.value ?? generatedId)
const isRequired = computed(() => props.required || !!field?.required.value)

const rootClass = computed(() =>
  cn(
    'pomi-check',
    `pomi-check--${props.size}`,
    props.disabled && 'pomi-check--disabled',
    attrs.class as string | undefined,
  ),
)

const fallthrough = computed(() => {
  const { class: _c, ...rest } = attrs
  return rest
})
</script>

<template>
  <label :class="rootClass" :for="inputId">
    <CheckboxRoot
      :id="inputId"
      v-model="model"
      class="pomi-check__control"
      v-bind="fallthrough"
      :name="name"
      :value="value"
      :disabled="disabled"
      :required="isRequired"
      :aria-describedby="field?.describedBy.value"
      :aria-invalid="field?.resolvedError.value ? true : undefined"
    >
      <CheckboxIndicator class="pomi-check__indicator" as-child>
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            class="pomi-check__tick"
            d="M4 8.25 6.85 11 12 4.75"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="pomi-check__dash"
            d="M4 8h8"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </CheckboxIndicator>
    </CheckboxRoot>
    <span v-if="label || $slots.default" class="pomi-check__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
