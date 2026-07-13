<script setup lang="ts">
import { computed, useSlots, type Slots } from 'vue'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'
import { cn } from '../../utils/cn'
import type { PomiSize } from '../../utils/types'

export type DialogProps = {
  title?: string
  description?: string
  /**
   * @advanced Escape hatch — prefer Design Kit defaults.
   */
  size?: PomiSize
  closeLabel?: string
  closeOnInteractOutside?: boolean
  closeOnEscape?: boolean
}

const props = withDefaults(defineProps<DialogProps>(), {
  title: undefined,
  description: undefined,
  size: 'md',
  closeLabel: 'Close',
  closeOnInteractOutside: true,
  closeOnEscape: true,
})

const open = defineModel<boolean>('open', { default: false })

defineOptions({ name: 'PomiDialog' })

const slots: Slots = useSlots()
const hasTitle = computed<boolean>(() => !!(props.title || slots.title))
const hasDescription = computed<boolean>(() => !!(props.description || slots.description))

const contentClass = computed(() => cn('pomi-dialog__content', `pomi-dialog__content--${props.size}`))

const contentA11y = computed(() =>
  hasDescription.value ? {} : ({ 'aria-describedby': undefined } as const),
)

function onInteractOutside(event: Event) {
  if (!props.closeOnInteractOutside) event.preventDefault()
}

function onEscapeKeyDown(event: KeyboardEvent) {
  if (!props.closeOnEscape) event.preventDefault()
}
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-if="$slots.trigger" as-child>
      <slot name="trigger" />
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay class="pomi-dialog__overlay" />
      <DialogContent
        :class="contentClass"
        v-bind="contentA11y"
        @pointer-down-outside="onInteractOutside"
        @interact-outside="onInteractOutside"
        @escape-key-down="onEscapeKeyDown"
      >
        <div class="pomi-dialog__header">
          <DialogTitle
            class="pomi-dialog__title"
            :class="{ 'pomi-sr-only': !hasTitle }"
          >
            <slot name="title">{{ title || 'Dialog' }}</slot>
          </DialogTitle>
          <DialogClose class="pomi-dialog__close" :aria-label="closeLabel">
            <slot name="close">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none">
                <path
                  d="M4 4l8 8M12 4l-8 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </slot>
          </DialogClose>
        </div>

        <DialogDescription
          v-if="hasDescription"
          class="pomi-dialog__description"
        >
          <slot name="description">{{ description }}</slot>
        </DialogDescription>

        <div v-if="$slots.default" class="pomi-dialog__body">
          <slot />
        </div>

        <div v-if="$slots.footer" class="pomi-dialog__footer">
          <slot name="footer" />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
