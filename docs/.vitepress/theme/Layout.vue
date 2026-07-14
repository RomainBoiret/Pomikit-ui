<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed, onMounted, watch } from 'vue'
import MarketingHome from './MarketingHome.vue'
import { useSiteTheme } from './site/composables/useSiteTheme'

const { Layout } = DefaultTheme
const { frontmatter, isDark } = useData()
const isHome = computed(() => frontmatter.value.layout === 'home')
const { setMode, reapply } = useSiteTheme()

watch(
  isDark,
  (dark) => {
    setMode(dark ? 'dark' : 'light')
  },
  { immediate: true },
)

onMounted(() => {
  setMode(isDark.value ? 'dark' : 'light')
  reapply()
})
</script>

<template>
  <Layout>
    <template v-if="isHome" #home-hero-before>
      <MarketingHome />
    </template>
  </Layout>
</template>
