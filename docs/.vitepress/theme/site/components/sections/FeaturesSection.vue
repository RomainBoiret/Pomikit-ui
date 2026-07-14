<script setup lang="ts">
import { computed } from 'vue'
import Reveal from '../Reveal.vue'
import { useSiteI18n } from '../../composables/useSiteI18n'

const { t } = useSiteI18n()

const features = computed(() =>
  t.value.features.items.map((item) => {
    const match = item.title.match(/^(\p{Extended_Pictographic}\uFE0F?)\s*(.+)$/u)
    return {
      icon: match?.[1] ?? '•',
      title: match?.[2] ?? item.title,
      body: item.body,
    }
  }),
)
</script>

<template>
  <section class="features">
    <div class="site-shell">
      <div class="features__grid">
        <Reveal
          v-for="(item, index) in features"
          :key="item.title"
          class="feature"
          :delay="index * 40"
        >
          <div class="feature__icon" aria-hidden="true">{{ item.icon }}</div>
          <h2 class="feature__title">{{ item.title }}</h2>
          <p class="feature__body">{{ item.body }}</p>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 2.25rem 0 4.5rem;
  background: var(--pomi-bg);
}

.features__grid {
  display: grid;
  gap: 1.75rem 1.25rem;
}

.feature {
  display: flex;
  flex-direction: column;
  max-width: 22rem;
}

.feature__icon {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.85rem;
  border-radius: 12px;
  background: color-mix(in srgb, #8bcf53 14%, var(--pomi-surface, var(--pomi-bg)));
  font-size: 1.35rem;
  line-height: 1;
}

.feature__title {
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
  font-weight: 650;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.feature__body {
  margin: 0;
  color: var(--pomi-muted);
  font-size: 0.9375rem;
  line-height: 1.55;
}

@media (min-width: 640px) {
  .features {
    padding: 2.75rem 0 5rem;
  }

  .features__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem 1.75rem;
  }

  .feature {
    max-width: none;
  }
}

@media (min-width: 960px) {
  .features {
    padding: 3.25rem 0 5.75rem;
  }

  .features__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.25rem 2rem;
  }
}
</style>
