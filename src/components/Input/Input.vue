<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  useAttrs,
  useId,
  useSlots,
  watch,
} from 'vue'
import { cn } from '../../utils/cn'
import { useFieldContext } from '../../composables/useField'
import { runRules, type InputRule } from '../../utils/rules'
import type { PomiSize } from '../../utils/types'

export type InputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number'

export type InputProps = {
  modelValue?: string
  /** Prefer wrapping with Field for label/helper/error. Still supported standalone. */
  label?: string
  hint?: string
  /** Controlled error escape hatch — wins over intent rules. */
  error?: string
  placeholder?: string
  type?: InputType
  /**
   * @advanced Escape hatch — prefer Design Kit density over per-input sizing.
   */
  size?: PomiSize
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  clearable?: boolean
  /** Intent: validate these on blur / form submit. */
  rules?: InputRule[]
  /** Debounce ms for update:committed (search-friendly). 0 disables. */
  commitDelay?: number
  id?: string
  name?: string
  autocomplete?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  label: undefined,
  hint: undefined,
  error: undefined,
  placeholder: undefined,
  type: 'text',
  size: 'md',
  disabled: false,
  readonly: false,
  required: false,
  clearable: false,
  rules: () => [],
  commitDelay: undefined,
  id: undefined,
  name: undefined,
  autocomplete: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:committed': [value: string]
  clear: []
  valid: [valid: boolean]
}>()

defineOptions({ name: 'PomiInput', inheritAttrs: false })

const attrs = useAttrs()
const slots = useSlots()
const field = useFieldContext()
const rootEl = ref<HTMLElement | null>(null)
const generatedId = useId()
const focused = ref(false)

const inputId = computed(() => {
  if (props.id) return props.id
  if (field) return field.controlId.value
  return generatedId
})

const hintId = computed(() => `${inputId.value}-hint`)
const errorId = computed(() => `${inputId.value}-error`)

const touched = ref(false)
const intentError = ref<string | undefined>()
const commitTimer = ref<ReturnType<typeof setTimeout> | null>(null)
const passwordRevealed = ref(false)
const showSuccess = ref(false)
let successTimer: ReturnType<typeof setTimeout> | null = null

const isRequired = computed(() => props.required || !!field?.required.value)
const isPassword = computed(() => props.type === 'password')
const isSearch = computed(() => props.type === 'search')

const resolvedClearable = computed(
  () => (props.clearable || isSearch.value) && !props.disabled && !props.readonly,
)

const nativeType = computed(() => {
  if (isPassword.value && passwordRevealed.value) return 'text'
  return props.type
})

const localError = computed(() => props.error ?? (touched.value ? intentError.value : undefined))

const resolvedError = computed(() => {
  if (field) return field.resolvedError.value
  return localError.value
})

const describedBy = computed(() => {
  if (field) return field.describedBy.value
  const ids: string[] = []
  if (props.hint && !localError.value) ids.push(hintId.value)
  if (localError.value) ids.push(errorId.value)
  return ids.length ? ids.join(' ') : undefined
})

const showChrome = computed(() => !field)
const reserveMessage = computed(
  () =>
    showChrome.value &&
    (!!props.hint || !!props.error || props.required || props.rules.length > 0),
)

const rootClass = computed(() =>
  cn(
    'pomi-input',
    `pomi-input--${props.size}`,
    field && 'pomi-input--embedded',
    focused.value && 'pomi-input--focused',
    resolvedError.value && 'pomi-input--invalid',
    props.disabled && 'pomi-input--disabled',
    attrs.class as string | undefined,
  ),
)

const rootStyle = computed(() => attrs.style as string | Record<string, string> | undefined)

const inputAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs
  return rest
})

const showClear = computed(
  () => resolvedClearable.value && !!props.modelValue && !props.disabled && !props.readonly,
)

const showSearchIcon = computed(() => isSearch.value && !slots.leading)
const showReveal = computed(() => isPassword.value && !props.disabled && !props.readonly)
const hasLeading = computed(() => !!slots.leading || showSearchIcon.value)
const hasTrailing = computed(
  () =>
    !!slots.trailing ||
    resolvedClearable.value ||
    showReveal.value ||
    showSuccess.value,
)

const defaultCommitDelay = computed(() => {
  if (props.commitDelay != null) return props.commitDelay
  return isSearch.value ? 300 : 0
})

function flashSuccess() {
  if (successTimer) clearTimeout(successTimer)
  showSuccess.value = true
  successTimer = setTimeout(() => {
    showSuccess.value = false
    successTimer = null
  }, 1200)
}

function validate(value = props.modelValue): string | undefined {
  const rulesList = [...props.rules]
  if (isRequired.value) {
    rulesList.unshift((v) => (v.trim().length > 0 ? true : 'This field is required'))
  }
  const message = runRules(value, rulesList)
  const prevIntent = intentError.value
  intentError.value = message
  field?.setIntentError(message)
  emit('valid', !message)

  if (!message && prevIntent && touched.value) {
    flashSuccess()
  }

  return message
}

function scheduleCommit(value: string) {
  if (defaultCommitDelay.value <= 0) {
    emit('update:committed', value)
    return
  }
  if (commitTimer.value) clearTimeout(commitTimer.value)
  commitTimer.value = setTimeout(() => {
    emit('update:committed', value)
    commitTimer.value = null
  }, defaultCommitDelay.value)
}

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
  scheduleCommit(value)
  if (showSuccess.value) showSuccess.value = false
  if (touched.value && (props.rules.length || isRequired.value)) {
    validate(value)
  }
}

function onFocus() {
  focused.value = true
}

function onBlur() {
  focused.value = false
  touched.value = true
  if (props.rules.length || isRequired.value) validate()
}

function clear() {
  emit('update:modelValue', '')
  emit('update:committed', '')
  emit('clear')
  if (touched.value) validate('')
  focusField()
}

function toggleReveal() {
  passwordRevealed.value = !passwordRevealed.value
}

function focusField() {
  rootEl.value?.querySelector<HTMLInputElement>('.pomi-input__field')?.focus()
}

function onFormSubmitCapture(event: Event) {
  touched.value = true
  const message = validate()
  if (!message) return

  event.preventDefault()

  requestAnimationFrame(() => {
    const form = rootEl.value?.closest('form')
    if (!form) return
    const firstInvalid = form.querySelector<HTMLElement>(
      '.pomi-input--invalid .pomi-input__field',
    )
    firstInvalid?.focus()
  })
}

onMounted(() => {
  const form = rootEl.value?.closest('form')
  form?.addEventListener('submit', onFormSubmitCapture, true)
})

onBeforeUnmount(() => {
  const form = rootEl.value?.closest('form')
  form?.removeEventListener('submit', onFormSubmitCapture, true)
  if (commitTimer.value) clearTimeout(commitTimer.value)
  if (successTimer) clearTimeout(successTimer)
  field?.setIntentError(undefined)
})

watch(
  () => props.error,
  (value) => {
    if (value) {
      touched.value = true
      field?.setIntentError(value)
    }
  },
)

watch(
  () => props.type,
  () => {
    passwordRevealed.value = false
  },
)

defineExpose({ validate, focusField })
</script>

<template>
  <div
    ref="rootEl"
    :class="rootClass"
    :style="rootStyle"
    :data-pomi-invalid="resolvedError ? '' : undefined"
  >
    <label v-if="showChrome && (label || $slots.label)" class="pomi-input__label" :for="inputId">
      <slot name="label">
        {{ label }}
        <span v-if="isRequired" class="pomi-input__required" aria-hidden="true">*</span>
      </slot>
    </label>

    <div
      class="pomi-input__control"
      :class="{
        'pomi-input__control--leading': hasLeading,
        'pomi-input__control--trailing': hasTrailing,
      }"
    >
      <span v-if="hasLeading" class="pomi-input__affix pomi-input__affix--leading">
        <slot name="leading">
          <span v-if="showSearchIcon" class="pomi-input__search-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="5" stroke="currentColor" stroke-width="1.5" />
              <path
                d="M11.75 11.75L15.25 15.25"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </slot>
      </span>

      <input
        :id="inputId"
        class="pomi-input__field"
        v-bind="inputAttrs"
        :type="nativeType"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="isRequired"
        :autocomplete="autocomplete"
        :aria-invalid="resolvedError ? true : undefined"
        :aria-describedby="describedBy"
        :aria-required="isRequired || undefined"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />

      <span v-if="hasTrailing" class="pomi-input__affix pomi-input__affix--trailing">
        <slot name="trailing" />

        <span v-if="showSuccess" class="pomi-input__success" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.75 7.25l2.75 2.75 5.75-6"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <button
          v-if="showReveal"
          type="button"
          class="pomi-input__reveal"
          :aria-label="passwordRevealed ? 'Hide password' : 'Show password'"
          :aria-pressed="passwordRevealed"
          @click="toggleReveal"
        >
          <span class="pomi-input__reveal-icon" aria-hidden="true">
            <svg
              v-if="passwordRevealed"
              key="open"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1.75 8s2.25-4.25 6.25-4.25S14.25 8 14.25 8s-2.25 4.25-6.25 4.25S1.75 8 1.75 8Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <circle cx="8" cy="8" r="1.75" stroke="currentColor" stroke-width="1.5" />
            </svg>
            <svg v-else key="closed" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M1.75 8s2.25-4.25 6.25-4.25S14.25 8 14.25 8s-2.25 4.25-6.25 4.25S1.75 8 1.75 8Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <circle cx="8" cy="8" r="1.75" stroke="currentColor" stroke-width="1.5" />
              <path
                d="M3 13.25 13 2.75"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </button>

        <button
          v-if="resolvedClearable"
          type="button"
          class="pomi-input__clear"
          :class="{ 'pomi-input__clear--visible': showClear }"
          :tabindex="showClear ? 0 : -1"
          :aria-hidden="showClear ? undefined : true"
          :aria-label="showClear ? 'Clear input' : undefined"
          :disabled="!showClear"
          @click="clear"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" fill="none">
            <path
              d="M3.5 3.5l7 7M10.5 3.5l-7 7"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </span>
    </div>

    <div v-if="reserveMessage" class="pomi-input__message">
      <p v-if="localError" :id="errorId" class="pomi-input__error" role="alert">
        {{ localError }}
      </p>
      <p v-else-if="hint" :id="hintId" class="pomi-input__hint">
        {{ hint }}
      </p>
    </div>
  </div>
</template>
