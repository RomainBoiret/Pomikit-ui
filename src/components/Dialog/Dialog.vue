<script setup lang="ts">
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

const open = defineModel<boolean>('open', { default: false })

withDefaults(
  defineProps<{
    title?: string
    description?: string
  }>(),
  {
    title: undefined,
    description: undefined,
  },
)

defineOptions({ name: 'PomiDialog' })
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-if="$slots.trigger" as-child>
      <slot name="trigger" />
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay class="pomi-dialog__overlay" />
      <DialogContent class="pomi-dialog__content">
        <div class="pomi-dialog__header">
          <DialogTitle v-if="title || $slots.title" class="pomi-dialog__title">
            <slot name="title">{{ title }}</slot>
          </DialogTitle>
          <DialogClose class="pomi-dialog__close" aria-label="Close">
            <slot name="close">×</slot>
          </DialogClose>
        </div>

        <DialogDescription
          class="pomi-dialog__description"
          :class="{ 'pomi-dialog__description--empty': !(description || $slots.description) }"
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
