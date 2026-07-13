<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { DropdownMenuPortal, DropdownMenuSubContent } from 'reka-ui'
import { cn } from '../../utils/cn'

export type DropdownSubContentProps = {
  sideOffset?: number
  collisionPadding?: number
}

const props = withDefaults(defineProps<DropdownSubContentProps>(), {
  sideOffset: 4,
  collisionPadding: 8,
})

defineOptions({ name: 'PomiDropdownSubContent', inheritAttrs: false })

const attrs = useAttrs()

const contentClass = computed(() =>
  cn('pomi-dropdown__content', 'pomi-dropdown__content--sub', attrs.class as string | undefined),
)

const fallthrough = computed(() => {
  const { class: _c, ...rest } = attrs
  return rest
})
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuSubContent
      :class="contentClass"
      v-bind="fallthrough"
      :side-offset="props.sideOffset"
      :collision-padding="props.collisionPadding"
      :avoid-collisions="true"
    >
      <div class="pomi-dropdown__surface">
        <slot />
      </div>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</template>
