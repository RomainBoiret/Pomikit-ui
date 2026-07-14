<script setup lang="ts">
import HeroSection from './site/components/sections/HeroSection.vue'
import FeaturesSection from './site/components/sections/FeaturesSection.vue'
</script>

<template>
  <div class="marketing-home">
    <HeroSection />
    <div class="marketing-home__rule" aria-hidden="true" />
    <FeaturesSection />
  </div>
</template>

<style scoped>
.marketing-home {
  width: 100%;
  background: var(--pomi-bg);
}

.marketing-home__rule {
  width: min(1120px, calc(100% - 2.5rem));
  height: 1px;
  margin: 0 auto;
  background: color-mix(in srgb, var(--pomi-border) 85%, transparent);
}

@media (max-width: 640px) {
  .marketing-home__rule {
    width: calc(100% - 1.5rem);
  }
}
</style>
