<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue'
import HomeHero from './HomeHero.vue'
import HomeFeatures from './HomeFeatures.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
const isHome = computed(() => frontmatter.value.layout === 'home')
</script>

<template>
  <Layout>
    <template v-if="isHome" #home-hero-before>
      <HomeHero />
      <HomeFeatures />
    </template>
  </Layout>
</template>
