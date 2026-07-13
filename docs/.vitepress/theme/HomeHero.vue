<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <section class="pomi-home-hero">
    <div class="pomi-home-hero__inner">
      <div class="pomi-home-hero__copy">
        <p class="pomi-home-hero__eyebrow">Design System pour Vue 3</p>
        <h1 class="pomi-home-hero__title">
          <span class="pomi-home-hero__name">Pomikit</span>
        </h1>
        <p class="pomi-home-hero__tagline">
          Beautiful by default.<br />
          Personalized in seconds.
        </p>
        <p class="pomi-home-hero__desc">
          Des composants intelligents, une identité visuelle forte, et un thème
          transformable en quelques paramètres. Oublie le CSS.
        </p>
        <div class="pomi-home-hero__actions">
          <a class="pomi-home-hero__btn pomi-home-hero__btn--brand" :href="withBase('/guide/getting-started')">
            Commencer
          </a>
          <a class="pomi-home-hero__btn pomi-home-hero__btn--alt" :href="withBase('/guide/theming')">
            Design DNA
          </a>
        </div>
      </div>

      <div class="pomi-home-hero__mascot" aria-hidden="true">
        <img
          class="pomi-home-hero__mascot-img"
          :src="withBase('/mascot.png')"
          alt=""
          width="360"
          height="360"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.pomi-home-hero {
  position: relative;
  padding: 2.5rem 24px 1rem;
  overflow: hidden;
}

.pomi-home-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 80% 30%, rgb(52 199 89 / 18%), transparent 70%),
    radial-gradient(ellipse 40% 40% at 10% 80%, rgb(52 199 89 / 10%), transparent 65%);
  pointer-events: none;
}

.pomi-home-hero__inner {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  align-items: center;
  grid-template-columns: 1fr;
}

@media (min-width: 900px) {
  .pomi-home-hero__inner {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 1.5rem;
    min-height: 420px;
  }
}

.pomi-home-hero__eyebrow {
  margin: 0 0 0.75rem;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}

.pomi-home-hero__title {
  margin: 0;
  line-height: 1.05;
}

.pomi-home-hero__name {
  display: inline-block;
  font-size: clamp(3.2rem, 9vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  background: linear-gradient(120deg, #34c759 20%, #1faa5a 55%, #0d8f45 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.pomi-home-hero__tagline {
  margin: 1rem 0 0.75rem;
  font-size: clamp(1.35rem, 3vw, 1.85rem);
  font-weight: 650;
  letter-spacing: -0.03em;
  line-height: 1.25;
  color: var(--vp-c-text-1);
}

.pomi-home-hero__desc {
  margin: 0;
  max-width: 34rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.pomi-home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.pomi-home-hero__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0 1.35rem;
  border-radius: 999px;
  font-weight: 650;
  font-size: 0.95rem;
  text-decoration: none;
  transition:
    background-color 0.18s ease,
    color 0.18s ease,
    box-shadow 0.18s ease,
    transform 0.15s ease;
}

.pomi-home-hero__btn--brand {
  background: var(--vp-c-brand-1);
  color: #fff;
  box-shadow: 0 8px 24px rgb(52 199 89 / 28%);
}

.pomi-home-hero__btn--brand:hover {
  background: var(--vp-c-brand-2);
  box-shadow: 0 10px 28px rgb(52 199 89 / 34%);
}

.pomi-home-hero__btn--alt {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.pomi-home-hero__btn--alt:hover {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 40%, var(--vp-c-divider));
  color: var(--vp-c-brand-1);
}

.pomi-home-hero__mascot {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pomi-home-hero__mascot-img {
  width: min(100%, 340px);
  height: auto;
  filter: drop-shadow(0 18px 40px rgb(18 20 26 / 12%));
  animation: pomi-mascot-float 4.5s ease-in-out infinite;
}

@keyframes pomi-mascot-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pomi-home-hero__mascot-img {
    animation: none;
  }
}
</style>
