<script setup lang="ts">
import { computed, ref, useAttrs, useId, useSlots, watch } from 'vue'
import {
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'
import { cn } from '../../utils/cn'
import { useFieldContext } from '../../composables/useField'
import type { PomiSize } from '../../utils/types'

export type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}

export type SelectProps = {
  options?: SelectOption[]
  /** Intent: loading options / async fetch in progress */
  pending?: boolean
  placeholder?: string
  /**
   * @advanced Escape hatch — prefer Design Kit density.
   */
  size?: PomiSize
  disabled?: boolean
  required?: boolean
  id?: string
  name?: string
  emptyText?: string
}

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
  pending: false,
  placeholder: 'Select…',
  size: 'md',
  disabled: false,
  required: false,
  id: undefined,
  name: undefined,
  emptyText: 'No options',
})

const model = defineModel<string>()

defineOptions({ name: 'PomiSelect', inheritAttrs: false })

const attrs = useAttrs()
const slots = useSlots()
const field = useFieldContext()
const generatedId = useId()
const inputId = computed(() => props.id ?? field?.controlId.value ?? generatedId)
const isRequired = computed(() => props.required || !!field?.required.value)
const isDisabled = computed(() => props.disabled || props.pending)

const triggerClass = computed(() =>
  cn(
    'pomi-select__trigger',
    `pomi-select__trigger--${props.size}`,
    field?.resolvedError.value && 'pomi-select__trigger--invalid',
    attrs.class as string | undefined,
  ),
)

const fallthrough = computed(() => {
  const { class: _c, ...rest } = attrs
  return rest
})

const showEmpty = computed(() => !props.pending && props.options.length === 0 && !slots.default)

/** Resolve label from options — avoids Reka SelectValue placeholder flash on close. */
const selectedLabel = computed(() => {
  if (model.value == null || model.value === '') return undefined
  const match = props.options.find((opt) => opt.value === model.value)
  return match?.label
})

const hasValue = computed(() => model.value != null && model.value !== '')

/** Keep last known label so a one-frame options/DOM gap never shows the placeholder. */
const stickyLabel = ref<string | undefined>()

watch(
  selectedLabel,
  (label) => {
    if (label) stickyLabel.value = label
    else if (!hasValue.value) stickyLabel.value = undefined
  },
  { immediate: true },
)

function onValueChange(value: unknown) {
  if (typeof value === 'string') {
    const match = props.options.find((opt) => opt.value === value)
    if (match) stickyLabel.value = match.label
    model.value = value
  } else if (value == null) {
    stickyLabel.value = undefined
    model.value = undefined
  }
}
</script>

<template>
  <SelectRoot
    :model-value="model"
    :disabled="isDisabled"
    :required="isRequired"
    :name="name"
    @update:model-value="onValueChange"
  >
    <SelectTrigger
      :id="inputId"
      :class="triggerClass"
      v-bind="fallthrough"
      :aria-busy="pending || undefined"
      :aria-invalid="field?.resolvedError.value ? true : undefined"
      :aria-describedby="field?.describedBy.value"
    >
      <SelectValue
        v-slot="{ selectedLabel: rekaLabels }"
        class="pomi-select__value"
        :class="{ 'pomi-select__value--placeholder': !hasValue }"
        :placeholder="pending ? 'Loading…' : placeholder"
      >
        {{
          selectedLabel
            ?? stickyLabel
            ?? (rekaLabels?.length ? rekaLabels.join(', ') : undefined)
            ?? (hasValue ? '' : pending ? 'Loading…' : placeholder)
        }}
      </SelectValue>
      <span class="pomi-select__chevron" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 6.25L8 10.25l4-4"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="pomi-select__content"
        position="popper"
        :side-offset="8"
        :collision-padding="8"
      >
        <div class="pomi-select__surface">
          <SelectViewport class="pomi-select__viewport">
            <div v-if="pending" class="pomi-select__status">Loading…</div>
            <div v-else-if="showEmpty" class="pomi-select__status">{{ emptyText }}</div>
            <template v-else>
              <slot>
                <SelectItem
                  v-for="opt in options"
                  :key="opt.value"
                  class="pomi-select__item"
                  :value="opt.value"
                  :disabled="opt.disabled"
                >
                  <SelectItemText>{{ opt.label }}</SelectItemText>
                  <SelectItemIndicator class="pomi-select__check" as-child>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3.5 8.2l3 3 6-7"
                        stroke="currentColor"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </SelectItemIndicator>
                </SelectItem>
              </slot>
            </template>
          </SelectViewport>
        </div>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
