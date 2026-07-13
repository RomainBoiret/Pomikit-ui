<script setup lang="ts">
const features = [
  {
    icon: '🧠',
    title: 'Less decisions',
    details:
      'Importer un composant suffit. Pas de variant / tone / size à chaque usage.',
  },
  {
    icon: '✨',
    title: 'Beautiful by default',
    details:
      'Premium dès le premier import. Aucun plugin, aucun thème obligatoire.',
  },
  {
    icon: '🎨',
    title: 'Design once',
    details:
      'createTheme({ design }) une fois — toute l’app change. Jamais composant par composant.',
  },
  {
    icon: '⚡',
    title: 'Smart by design',
    details:
      'Promise → busy, toast.success, Field required — Pomikit infère l’intention.',
  },
  {
    icon: '🧩',
    title: 'Catalogue focalisé',
    details:
      'Une douzaine de composants excellents. Qualité avant quantité.',
  },
  {
    icon: '🍃',
    title: 'Léger & Vue 3',
    details:
      'Vue 3 + reka-ui. Peer dependency minimale, charge mentale minimale.',
  },
]
</script>

<template>
  <section class="pomi-home-features">
    <div class="pomi-home-features__inner">
      <article v-for="feature in features" :key="feature.title" class="pomi-home-features__card">
        <div class="pomi-home-features__icon" aria-hidden="true">{{ feature.icon }}</div>
        <h2 class="pomi-home-features__title">{{ feature.title }}</h2>
        <p class="pomi-home-features__details">{{ feature.details }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.pomi-home-features {
  padding: 2.5rem 1.25rem 3.5rem;
  background: var(--pomi-bg, #fff);
  color: var(--pomi-fg, #111);
  font-family: var(--pomi-font, system-ui, sans-serif);
}

.pomi-home-features__inner {
  max-width: 64rem;
  margin: 0 auto;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
}

.pomi-home-features__card {
  padding: 1.25rem 1.35rem;
  border: 1px solid var(--pomi-border, #e8e8ea);
  border-radius: var(--pomi-radius-lg, 14px);
  background: var(--pomi-surface-elevated, #fff);
  box-shadow: var(--pomi-shadow, none);
}

.pomi-home-features__icon {
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.65rem;
}

.pomi-home-features__title {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.pomi-home-features__details {
  margin: 0;
  font-size: 0.925rem;
  line-height: 1.5;
  color: var(--pomi-muted, #6b7280);
}
</style>
