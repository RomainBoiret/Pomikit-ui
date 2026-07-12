<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import {
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'reka-ui'
import { cn } from '../../utils/cn'

export type DropdownProps = {
  /** Accessible label when trigger has no visible text context */
  label?: string
  modal?: boolean
}

const props = withDefaults(defineProps<DropdownProps>(), {
  label: undefined,
  modal: true,
})

const open = defineModel<boolean>('open', { default: false })

defineOptions({ name: 'PomiDropdown', inheritAttrs: false })

const attrs = useAttrs()

const contentClass = computed(() =>
  cn('pomi-dropdown__content', attrs.class as string | undefined),
)

const fallthrough = computed(() => {
  const { class: _c, ...rest } = attrs
  return rest
})
</script>

<template>
  <DropdownMenuRoot v-model:open="open" :modal="props.modal">
    <DropdownMenuTrigger as-child :aria-label="props.label">
      <slot name="trigger" />
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent
        :class="contentClass"
        v-bind="fallthrough"
        :side-offset="6"
        align="start"
      >
        <slot />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
