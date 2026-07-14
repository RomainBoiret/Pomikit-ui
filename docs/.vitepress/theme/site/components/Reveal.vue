<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

withDefaults(
  defineProps<{
    delay?: number
    as?: string
  }>(),
  {
    delay: 0,
    as: 'div',
  },
)

const root = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduced || !root.value) {
    visible.value = true
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
  )

  observer.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <component
    :is="as"
    ref="root"
    class="reveal"
    :class="{ 'is-visible': visible }"
    :style="{ '--reveal-delay': `${delay}ms` }"
  >
    <slot />
  </component>
</template>
