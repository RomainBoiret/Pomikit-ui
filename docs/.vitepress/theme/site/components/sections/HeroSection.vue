<script setup lang="ts">
import Reveal from '../Reveal.vue'
import HeroShowcase from '../HeroShowcase.vue'
import { Button } from 'pomikit-ui'
import { useSiteI18n } from '../../composables/useSiteI18n'

const { t, localePath } = useSiteI18n()
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__glow" aria-hidden="true" />

    <div class="site-shell hero__container">
      <Reveal class="hero__main">
        <div class="hero__heading">
          <h1 class="hero__name">
            <span class="pom">Pomi</span><span class="kit">kit</span>
          </h1>
          <p class="hero__text">{{ t.hero.text }}</p>
          <p class="hero__tagline">{{ t.hero.tagline }}</p>
        </div>

        <div class="hero__actions">
          <Button size="lg" :href="localePath(t.paths.gettingStarted)">{{ t.hero.getStarted }}</Button>
          <Button size="lg" variant="outline" :href="localePath(t.paths.playground)">{{
            t.hero.playground
          }}</Button>
        </div>

        <p class="hero__credit">
          {{ t.hero.createdBy }}
          <a href="https://github.com/RomainBoiret" target="_blank" rel="noopener noreferrer"
            >Romain Boiret</a
          >
        </p>
      </Reveal>

      <Reveal class="hero__media" :delay="80">
        <HeroShowcase />
      </Reveal>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 3rem 0 2.5rem;
  background: var(--pomi-bg);
}

.hero__glow {
  position: absolute;
  top: 8%;
  right: -8%;
  width: min(52vw, 540px);
  height: min(52vw, 540px);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    color-mix(in srgb, #8bcf53 28%, transparent) 0%,
    color-mix(in srgb, #34c759 12%, transparent) 42%,
    transparent 72%
  );
  filter: blur(8px);
  pointer-events: none;
  z-index: 0;
}

.hero__container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  text-align: center;
}

.hero__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 592px;
}

.hero__heading {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__name,
.hero__text {
  margin: 0;
  width: fit-content;
  max-width: 392px;
  font-family: var(--pomi-font-display, var(--pomi-font));
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 40px;
}

.pom {
  color: #111827;
}

.dark .pom,
html.dark .pom {
  color: var(--pomi-fg);
}

.kit {
  color: #8bcf53;
}

.hero__text {
  text-wrap: balance;
}

.hero__tagline {
  margin: 0;
  padding-top: 8px;
  max-width: 392px;
  color: var(--pomi-muted);
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-wrap: pretty;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  padding-top: 1.5rem;
}

.hero__credit {
  margin: 1.15rem 0 0;
  color: var(--pomi-muted);
  font-size: 0.875rem;
}

.hero__credit a {
  color: var(--pomi-fg);
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--pomi-fg) 20%, transparent);
  text-underline-offset: 0.16em;
  transition: text-decoration-color 120ms ease;
}

.hero__credit a:hover,
.hero__credit a:focus-visible {
  text-decoration-color: var(--pomi-accent);
}

.hero__media {
  display: flex;
  justify-content: center;
  width: 100%;
}

@media (min-width: 640px) {
  .hero {
    padding: 4.5rem 0 3.25rem;
  }

  .hero__name,
  .hero__text {
    max-width: 576px;
    font-size: 48px;
    line-height: 56px;
  }

  .hero__tagline {
    padding-top: 12px;
    max-width: 576px;
    font-size: 20px;
    line-height: 32px;
  }

  .hero__actions {
    padding-top: 2rem;
  }
}

@media (min-width: 960px) {
  .hero {
    padding: 5rem 0 3.5rem;
  }

  .hero__glow {
    top: 0;
    right: 2%;
    width: 480px;
    height: 480px;
  }

  .hero__container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    text-align: left;
  }

  .hero__main,
  .hero__heading {
    align-items: flex-start;
  }

  .hero__main {
    flex: 1 1 auto;
    max-width: 592px;
  }

  .hero__name,
  .hero__text {
    font-size: 56px;
    line-height: 64px;
  }

  .hero__tagline {
    font-size: 24px;
    line-height: 36px;
  }

  .hero__actions {
    justify-content: flex-start;
  }

  .hero__media {
    flex: 0 1 420px;
    justify-content: flex-end;
  }
}
</style>
