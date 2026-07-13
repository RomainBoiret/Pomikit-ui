<script setup lang="ts">
import { computed, provide, ref, useAttrs, useId, watch } from 'vue'
import { cn } from '../../utils/cn'
import { FieldContextKey, type FieldContext } from '../../composables/useField'

export type FieldProps = {
  label?: string
  /** Hint shown when there is no error (same reserved message row — zero layout shift). */
  helper?: string
  /** Controlled error — wins over child intent validation. */
  error?: string
  required?: boolean
  id?: string
}

const props = withDefaults(defineProps<FieldProps>(), {
  label: undefined,
  helper: undefined,
  error: undefined,
  required: false,
  id: undefined,
})

defineOptions({ name: 'PomiField', inheritAttrs: false })

const attrs = useAttrs()
const generatedId = useId()
const controlId = computed(() => props.id ?? generatedId)
const labelId = computed(() => `${controlId.value}-label`)
const helperId = computed(() => `${controlId.value}-helper`)
const errorId = computed(() => `${controlId.value}-error`)

const intentError = ref<string | undefined>()
const floatingLabelClaimed = ref(false)

const resolvedError = computed(() => props.error ?? intentError.value)

const describedBy = computed(() => {
  if (resolvedError.value) return errorId.value
  if (props.helper) return helperId.value
  return undefined
})

/** Always reserve when helper/required/error/rules path exists — no jump on error. */
const reserveMessage = computed(
  () => !!props.helper || !!props.error || props.required || !!intentError.value,
)

const rootClass = computed(() =>
  cn(
    'pomi-field',
    resolvedError.value && 'pomi-field--invalid',
    attrs.class as string | undefined,
  ),
)

const rootStyle = computed(() => attrs.style as string | Record<string, string> | undefined)

function setIntentError(message: string | undefined) {
  intentError.value = message
}

function claimFloatingLabel() {
  floatingLabelClaimed.value = true
}

function releaseFloatingLabel() {
  floatingLabelClaimed.value = false
}

watch(
  () => props.error,
  (value) => {
    if (value) intentError.value = undefined
  },
)

const ctx: FieldContext = {
  controlId,
  labelId,
  describedBy,
  required: computed(() => props.required),
  label: computed(() => props.label),
  resolvedError,
  setIntentError,
  claimFloatingLabel,
  releaseFloatingLabel,
  floatingLabelClaimed,
}

provide(FieldContextKey, ctx)
</script>

<template>
  <div :class="rootClass" :style="rootStyle" :data-pomi-invalid="resolvedError ? '' : undefined">
    <label v-if="label || $slots.label" :id="labelId" class="pomi-field__label" :for="controlId">
      <slot name="label">
        {{ label }}
        <span v-if="required" class="pomi-field__required" aria-hidden="true">*</span>
      </slot>
    </label>

    <div class="pomi-field__control">
      <slot />
    </div>

    <div
      v-if="reserveMessage || helper || resolvedError || $slots.helper || $slots.error"
      class="pomi-field__message"
      aria-live="polite"
    >
      <p v-if="resolvedError || $slots.error" :id="errorId" class="pomi-field__error" role="alert">
        <slot name="error">{{ resolvedError }}</slot>
      </p>
      <p v-else-if="helper || $slots.helper" :id="helperId" class="pomi-field__helper">
        <slot name="helper">{{ helper }}</slot>
      </p>
    </div>
  </div>
</template>
