<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { DropdownMenuContent, DropdownMenuPortal } from 'reka-ui'
import { cn } from '../../utils/cn'
import type { DropdownAlign, DropdownSide } from './Dropdown.vue'

export type DropdownContentProps = {
  side?: DropdownSide
  align?: DropdownAlign
  sideOffset?: number
  collisionPadding?: number
}

const props = withDefaults(defineProps<DropdownContentProps>(), {
  side: 'bottom',
  align: 'start',
  sideOffset: 6,
  collisionPadding: 8,
})

defineOptions({ name: 'PomiDropdownContent', inheritAttrs: false })

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
  <DropdownMenuPortal>
    <!--
      Outer node owns Floating UI positioning (inline transform).
      Inner surface owns enter/exit motion — never animate transform on the positioned node.
    -->
    <DropdownMenuContent
      :class="contentClass"
      v-bind="fallthrough"
      :side="props.side"
      :align="props.align"
      :side-offset="props.sideOffset"
      :collision-padding="props.collisionPadding"
      :avoid-collisions="true"
    >
      <div class="pomi-dropdown__surface">
        <slot />
      </div>
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
