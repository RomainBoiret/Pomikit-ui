<script setup lang="ts">
import { computed, useId } from 'vue'
import { cn } from '../../utils/cn'
import type { PomiSize } from '../../utils/types'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    label?: string
    hint?: string
    error?: string
    placeholder?: string
    type?: string
    size?: PomiSize
    disabled?: boolean
    id?: string
    name?: string
    autocomplete?: string
  }>(),
  {
    modelValue: '',
    label: undefined,
    hint: undefined,
    error: undefined,
    placeholder: undefined,
    type: 'text',
    size: 'md',
    disabled: false,
    id: undefined,
    name: undefined,
    autocomplete: undefined,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

defineOptions({ name: 'PomiInput' })

const generatedId = useId()
const inputId = computed(() => props.id ?? generatedId)
const hintId = computed(() => `${inputId.value}-hint`)
const errorId = computed(() => `${inputId.value}-error`)
const describedBy = computed(() => {
  if (props.error) return errorId.value
  if (props.hint) return hintId.value
  return undefined
})

const rootClass = computed(() =>
  cn('pomi-input', `pomi-input--${props.size}`, props.error && 'pomi-input--invalid'),
)

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div :class="rootClass">
    <label v-if="label" class="pomi-input__label" :for="inputId">
      {{ label }}
    </label>
    <input
      :id="inputId"
      class="pomi-input__field"
      :type="type"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :aria-invalid="error ? true : undefined"
      :aria-describedby="describedBy"
      @input="onInput"
    />
    <p v-if="error" :id="errorId" class="pomi-input__error" role="alert">
      {{ error }}
    </p>
    <p v-else-if="hint" :id="hintId" class="pomi-input__hint">
      {{ hint }}
    </p>
  </div>
</template>
