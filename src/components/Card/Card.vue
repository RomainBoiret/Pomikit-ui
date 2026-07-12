<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '../../utils/cn'
import type { PomiSize } from '../../utils/types'

export type CardVariant = 'elevated' | 'outline' | 'ghost'
export type CardTitleAs = 'h2' | 'h3' | 'h4' | 'div'

export type CardProps = {
  variant?: CardVariant
  size?: PomiSize
  titleAs?: CardTitleAs
  /** Intent: navigational card. */
  href?: string
  target?: string
  rel?: string
  /** Intent: selectable card (picker grids). */
  selectable?: boolean
  selected?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'elevated',
  size: 'md',
  titleAs: 'h3',
  href: undefined,
  target: undefined,
  rel: undefined,
  selectable: false,
  selected: false,
})

const emit = defineEmits<{
  'update:selected': [value: boolean]
  select: [value: boolean]
}>()

defineOptions({ name: 'PomiCard', inheritAttrs: false })

const attrs = useAttrs()

const isLink = computed(() => !!props.href)
const isInteractive = computed(() => isLink.value || props.selectable)
const tag = computed(() => {
  if (isLink.value) return 'a'
  if (props.selectable) return 'div'
  return 'article'
})

const classes = computed(() =>
  cn(
    'pomi-card',
    `pomi-card--${props.variant}`,
    `pomi-card--${props.size}`,
    isInteractive.value && 'pomi-card--interactive',
    props.selected && 'pomi-card--selected',
    attrs.class as string | undefined,
  ),
)

const fallthroughAttrs = computed(() => {
  const { class: _class, onClick: _onClick, ...rest } = attrs
  return rest
})

function toggleSelected() {
  if (!props.selectable) return
  const next = !props.selected
  emit('update:selected', next)
  emit('select', next)
}

function onClick(event: MouseEvent) {
  if (props.selectable) {
    toggleSelected()
  }
  const handler = attrs.onClick
  if (typeof handler === 'function') handler(event)
  else if (Array.isArray(handler)) handler.forEach((fn) => typeof fn === 'function' && fn(event))
}

function onKeydown(event: KeyboardEvent) {
  if (!props.selectable) return
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    toggleSelected()
  }
}
</script>

<template>
  <Primitive
    :as="tag"
    :class="classes"
    v-bind="fallthroughAttrs"
    :href="isLink ? href : undefined"
    :target="isLink ? target : undefined"
    :rel="isLink ? rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined) : undefined"
    :role="selectable ? 'button' : undefined"
    :tabindex="selectable ? 0 : undefined"
    :aria-pressed="selectable ? selected : undefined"
    @click="onClick"
    @keydown="onKeydown"
  >
    <div v-if="$slots.media" class="pomi-card__media">
      <slot name="media" />
    </div>

    <header
      v-if="$slots.header || $slots.title || $slots.description || $slots.actions"
      class="pomi-card__header"
    >
      <slot name="header">
        <div class="pomi-card__heading">
          <component :is="titleAs" v-if="$slots.title" class="pomi-card__title">
            <slot name="title" />
          </component>
          <p v-if="$slots.description" class="pomi-card__description">
            <slot name="description" />
          </p>
        </div>
        <div v-if="$slots.actions" class="pomi-card__actions">
          <slot name="actions" />
        </div>
      </slot>
    </header>

    <div v-if="$slots.default" class="pomi-card__body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="pomi-card__footer">
      <slot name="footer" />
    </footer>
  </Primitive>
</template>
