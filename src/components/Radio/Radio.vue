<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupIndicator, RadioGroupItem } from 'reka-ui'
import { cn } from '../../utils/cn'

export type RadioProps = {
  value: string
  label?: string
  disabled?: boolean
  id?: string
}

const props = withDefaults(defineProps<RadioProps>(), {
  label: undefined,
  disabled: false,
  id: undefined,
})

defineOptions({ name: 'PomiRadio' })

const itemClass = computed(() =>
  cn('pomi-radio', props.disabled && 'pomi-radio--disabled'),
)
</script>

<template>
  <label :class="itemClass" :for="id">
    <RadioGroupItem
      :id="id"
      class="pomi-radio__control"
      :value="value"
      :disabled="disabled"
    >
      <RadioGroupIndicator class="pomi-radio__indicator" />
    </RadioGroupItem>
    <span v-if="label || $slots.default" class="pomi-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
