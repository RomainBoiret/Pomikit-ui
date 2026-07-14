<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useData } from 'vitepress'
import {
  Button,
  Card,
  Checkbox,
  Collection,
  DESIGNS,
  Field,
  Input,
  Select,
  Skeleton,
  Switch,
  applyTheme,
  createTheme,
  type ThemeDensity,
  type ThemeDesign,
  type ThemeElevation,
  type ThemeMode,
  type ThemeMotion,
  type ThemeRadius,
} from 'pomikit-ui'
import PlaygroundActions from './PlaygroundActions.vue'
import { useSiteI18n } from './site/composables/useSiteI18n'

const { isDark } = useData()
const { t } = useSiteI18n()
const rootEl = ref<HTMLElement | null>(null)
const copied = ref(false)
const surprisePulse = ref(false)

const dna = reactive({
  accent: DESIGNS.linear.accent,
  design: 'linear' as ThemeDesign,
  radius: DESIGNS.linear.radius as ThemeRadius,
  density: DESIGNS.linear.density as ThemeDensity,
  motion: DESIGNS.linear.motion as ThemeMotion,
  elevation: DESIGNS.linear.elevation as ThemeElevation,
  mode: (isDark.value ? 'dark' : 'light') as ThemeMode,
})

const designs: { id: ThemeDesign; label: string; hint: string; emoji: string }[] = [
  { id: 'linear', label: 'Linear', hint: 'Clean product', emoji: '─' },
  { id: 'glass', label: 'Glass', hint: 'Soft blur', emoji: '◇' },
  { id: 'editorial', label: 'Editorial', hint: 'Calm type', emoji: '¶' },
  { id: 'soft', label: 'Soft', hint: 'Friendly', emoji: '○' },
  { id: 'playful', label: 'Playful', hint: 'Expressive', emoji: '✦' },
]

const accentPresets = ['#34C759', '#8BCF53', '#FF6B6B', '#4DABF7', '#FAB005', '#BE4BDB', '#20C997', '#FF922B']

const radii: { id: ThemeRadius; label: string }[] = [
  { id: 'sharp', label: 'Sharp' },
  { id: 'soft', label: 'Soft' },
  { id: 'round', label: 'Round' },
]
const densities: { id: ThemeDensity; label: string }[] = [
  { id: 'compact', label: 'Compact' },
  { id: 'comfortable', label: 'Cozy' },
  { id: 'spacious', label: 'Airy' },
]
const motions: { id: ThemeMotion; label: string }[] = [
  { id: 'none', label: 'Still' },
  { id: 'normal', label: 'Smooth' },
  { id: 'expressive', label: 'Bounce' },
]
const elevations: { id: ThemeElevation; label: string }[] = [
  { id: 'flat', label: 'Flat' },
  { id: 'soft', label: 'Lift' },
  { id: 'floating', label: 'Float' },
]

const activeKit = computed(() => designs.find((d) => d.id === dna.design) ?? designs[0])

function selectDesign(id: ThemeDesign) {
  const pack = DESIGNS[id]
  dna.design = id
  dna.accent = pack.accent
  dna.radius = pack.radius
  dna.density = pack.density
  dna.motion = pack.motion
  dna.elevation = pack.elevation
}

function surprise() {
  const ids = designs.map((d) => d.id)
  let next = ids[Math.floor(Math.random() * ids.length)]!
  if (ids.length > 1) {
    while (next === dna.design) {
      next = ids[Math.floor(Math.random() * ids.length)]!
    }
  }
  selectDesign(next)
  dna.accent = accentPresets[Math.floor(Math.random() * accentPresets.length)]!
  surprisePulse.value = true
  window.setTimeout(() => {
    surprisePulse.value = false
  }, 600)
}

function syncTheme() {
  if (!rootEl.value) return
  applyTheme(
    createTheme({
      accent: dna.accent,
      design: dna.design,
      radius: dna.radius,
      density: dna.density,
      motion: dna.motion,
      elevation: dna.elevation,
      mode: dna.mode,
    }),
    rootEl.value,
  )
}

watch(dna, syncTheme, { deep: true })
watch(isDark, (dark) => {
  dna.mode = dark ? 'dark' : 'light'
})
onMounted(syncTheme)

const name = ref('Alex')
const email = ref('')
const notify = ref(true)
const accept = ref(false)
const plan = ref('pro')
const pending = ref(false)

const planOptions = [
  { label: 'Starter', value: 'starter' },
  { label: 'Pro', value: 'pro' },
  { label: 'Studio', value: 'studio' },
]

const people = ref([
  { id: 1, name: 'Ada Lovelace' },
  { id: 2, name: 'Grace Hopper' },
  { id: 3, name: 'Alan Turing' },
])

const themeSnippet = computed(
  () => `createTheme({
  design: '${dna.design}',
  accent: '${dna.accent}',
  radius: '${dna.radius}',
  density: '${dna.density}',
  motion: '${dna.motion}',
  elevation: '${dna.elevation}',
  mode: '${dna.mode}',
})`,
)

async function onSubmit() {
  await new Promise((r) => setTimeout(r, 800))
}

async function copySnippet() {
  try {
    await navigator.clipboard.writeText(themeSnippet.value)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 1600)
  } catch {
    /* ignore */
  }
}
</script>

<template>
  <div ref="rootEl" class="lab" :class="{ 'lab--pulse': surprisePulse }">
    <div class="lab__blob lab__blob--a" aria-hidden="true" />
    <div class="lab__blob lab__blob--b" aria-hidden="true" />

    <header class="lab__hero">
      <p class="lab__eyebrow">{{ t.playground.eyebrow }}</p>
      <h1 class="lab__title">{{ t.playground.title }}</h1>
      <p class="lab__lede">{{ t.playground.lede }}</p>
      <div class="lab__hero-actions">
        <Button @click="surprise">Surprise me</Button>
        <Button variant="outline" @click="selectDesign('playful')">Try Playful</Button>
      </div>
    </header>

    <div class="lab__layout">
      <aside class="lab__sidebar" aria-label="Design Kit controls">
        <section class="lab__panel">
          <div class="lab__panel-head">
            <h2 class="lab__panel-title">Design Kits</h2>
            <button type="button" class="lab__surprise" @click="surprise">🎲</button>
          </div>
          <div class="lab__kits" role="list">
            <button
              v-for="d in designs"
              :key="d.id"
              type="button"
              class="lab__kit"
              :class="{ 'lab__kit--active': dna.design === d.id }"
              role="listitem"
              @click="selectDesign(d.id)"
            >
              <span
                class="lab__kit-swatch"
                :style="{ background: DESIGNS[d.id].accent }"
                aria-hidden="true"
              >
                <span class="lab__kit-emoji">{{ d.emoji }}</span>
              </span>
              <span class="lab__kit-copy">
                <span class="lab__kit-name">{{ d.label }}</span>
                <span class="lab__kit-hint">{{ d.hint }}</span>
              </span>
            </button>
          </div>
        </section>

        <section class="lab__panel">
          <h2 class="lab__panel-title">Accent</h2>
          <div class="lab__presets" role="list">
            <button
              v-for="color in accentPresets"
              :key="color"
              type="button"
              class="lab__preset"
              :class="{ 'lab__preset--active': dna.accent.toLowerCase() === color.toLowerCase() }"
              :style="{ background: color }"
              :aria-label="`Accent ${color}`"
              role="listitem"
              @click="dna.accent = color"
            />
            <label class="lab__preset lab__preset--custom" :style="{ background: dna.accent }">
              <input v-model="dna.accent" type="color" aria-label="Custom accent" />
            </label>
          </div>
          <code class="lab__accent-code">{{ dna.accent }}</code>
        </section>

        <section class="lab__panel">
          <h2 class="lab__panel-title">Feel</h2>

          <div class="lab__axis">
            <span class="lab__axis-label">Radius</span>
            <div class="lab__chips">
              <button
                v-for="r in radii"
                :key="r.id"
                type="button"
                class="lab__chip"
                :class="{ 'lab__chip--active': dna.radius === r.id }"
                @click="dna.radius = r.id"
              >
                {{ r.label }}
              </button>
            </div>
          </div>

          <div class="lab__axis">
            <span class="lab__axis-label">Density</span>
            <div class="lab__chips">
              <button
                v-for="d in densities"
                :key="d.id"
                type="button"
                class="lab__chip"
                :class="{ 'lab__chip--active': dna.density === d.id }"
                @click="dna.density = d.id"
              >
                {{ d.label }}
              </button>
            </div>
          </div>

          <div class="lab__axis">
            <span class="lab__axis-label">Motion</span>
            <div class="lab__chips">
              <button
                v-for="m in motions"
                :key="m.id"
                type="button"
                class="lab__chip"
                :class="{ 'lab__chip--active': dna.motion === m.id }"
                @click="dna.motion = m.id"
              >
                {{ m.label }}
              </button>
            </div>
          </div>

          <div class="lab__axis">
            <span class="lab__axis-label">Elevation</span>
            <div class="lab__chips">
              <button
                v-for="e in elevations"
                :key="e.id"
                type="button"
                class="lab__chip"
                :class="{ 'lab__chip--active': dna.elevation === e.id }"
                @click="dna.elevation = e.id"
              >
                {{ e.label }}
              </button>
            </div>
          </div>
        </section>

        <section class="lab__panel lab__panel--code">
          <div class="lab__code-head">
            <h2 class="lab__panel-title">Snippet</h2>
            <button type="button" class="lab__copy" @click="copySnippet">
              {{ copied ? 'Copied!' : 'Copy' }}
            </button>
          </div>
          <pre class="lab__code"><code>{{ themeSnippet }}</code></pre>
        </section>
      </aside>

      <div class="lab__canvas">
        <div class="lab__canvas-bar">
          <div class="lab__live">
            <span class="lab__live-dot" aria-hidden="true" />
            <span class="lab__canvas-label">Live stage</span>
          </div>
          <span class="lab__canvas-kit">
            <span class="lab__canvas-emoji" aria-hidden="true">{{ activeKit.emoji }}</span>
            {{ activeKit.label }} · {{ dna.mode }}
          </span>
        </div>

        <div class="lab__canvas-body">
          <section class="lab__block">
            <h3>Click around</h3>
            <PlaygroundActions />
          </section>

          <div class="lab__grid">
            <Card>
              <template #title>Profile playground</template>
              <template #description>Fields, selects, and intent buttons</template>
              <form class="lab__stack" @submit.prevent="onSubmit">
                <Field label="Name" required>
                  <Input v-model="name" />
                </Field>
                <Field label="Email" helper="Work email only">
                  <Input v-model="email" type="email" placeholder="you@studio.dev" />
                </Field>
                <Field label="Plan">
                  <Select v-model="plan" :options="planOptions" />
                </Field>
                <Checkbox v-model="accept" label="Accept terms" />
                <Switch v-model="notify" label="Email notifications" />
                <Button type="submit" busy-text="Saving…" success-text="Saved">Save profile</Button>
              </form>
            </Card>

            <div class="lab__stack">
              <Card>
                <template #title>People list</template>
                <template #description>Toggle loading to feel the skeleton</template>
                <div class="lab__row" style="margin-bottom: 0.75rem">
                  <Button variant="soft" @click="pending = !pending">
                    {{ pending ? 'Stop loading' : 'Fake loading' }}
                  </Button>
                </div>
                <Collection
                  :items="people"
                  :pending="pending"
                  layout="stack"
                  empty-title="No people"
                >
                  <template #item="{ item }">
                    <div class="lab__person">{{ item.name }}</div>
                  </template>
                </Collection>
              </Card>

              <Card>
                <template #title>Skeleton vibes</template>
                <div class="lab__skeleton">
                  <Skeleton variant="circle" width="2.75rem" height="2.75rem" />
                  <Skeleton :lines="3" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lab {
  --lab-panel: color-mix(in srgb, var(--pomi-surface, #fff) 92%, transparent);
  position: relative;
  margin: 0 0 3.5rem;
  color: var(--pomi-fg, #12141a);
  font-family: var(--pomi-font, ui-sans-serif, system-ui, sans-serif);
  isolation: isolate;
}

.lab__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.55;
}

.lab__blob--a {
  top: -2rem;
  right: -4rem;
  width: 18rem;
  height: 18rem;
  background: color-mix(in srgb, var(--pomi-accent, #34c759) 28%, transparent);
}

.lab__blob--b {
  top: 12rem;
  left: -6rem;
  width: 14rem;
  height: 14rem;
  background: color-mix(in srgb, #8bcf53 22%, transparent);
}

.lab--pulse .lab__canvas {
  animation: lab-wiggle 520ms cubic-bezier(0.34, 1.4, 0.64, 1);
}

.lab__hero,
.lab__layout {
  position: relative;
  z-index: 1;
}

.lab__hero {
  margin-bottom: 1.75rem;
  max-width: 42rem;
}

.lab__eyebrow {
  margin: 0;
  color: var(--pomi-accent, #34c759);
  font-size: 0.75rem;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.lab__title {
  margin: 0.4rem 0 0.65rem;
  font-family: var(--pomi-font-display, var(--pomi-font));
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 750;
  letter-spacing: -0.035em;
  line-height: 1.1;
}

.lab__lede {
  margin: 0;
  color: var(--pomi-muted, #5c5f6a);
  font-size: 1.05rem;
  line-height: 1.6;
}

.lab__hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.15rem;
}

.lab__layout {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 1024px) {
  .lab__layout {
    grid-template-columns: minmax(16rem, 19rem) minmax(0, 1fr);
    align-items: start;
    gap: 1.35rem;
  }
}

.lab__sidebar {
  display: grid;
  gap: 0.8rem;
}

@media (min-width: 1024px) {
  .lab__sidebar {
    position: sticky;
    top: 5.25rem;
  }
}

.lab__panel {
  padding: 1rem;
  border: 1px solid color-mix(in srgb, var(--pomi-border, #e6e4de) 90%, transparent);
  border-radius: 16px;
  background: var(--lab-panel);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px color-mix(in srgb, var(--pomi-fg) 4%, transparent);
}

.lab__panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.lab__panel-head .lab__panel-title {
  margin: 0;
}

.lab__panel-title {
  margin: 0 0 0.75rem;
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--pomi-muted, #5c5f6a);
}

.lab__surprise {
  width: 1.85rem;
  height: 1.85rem;
  border: 1px solid var(--pomi-border, #e6e4de);
  border-radius: 999px;
  background: var(--pomi-surface, #fff);
  cursor: pointer;
  font-size: 0.85rem;
  line-height: 1;
  transition: transform 160ms ease;
}

.lab__surprise:hover {
  transform: rotate(-12deg) scale(1.06);
}

.lab__kits {
  display: grid;
  gap: 0.4rem;
}

.lab__kit {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  padding: 0.55rem 0.65rem;
  border: 1px solid transparent;
  border-radius: 12px;
  background: color-mix(in srgb, var(--pomi-bg, #f6f5f2) 55%, var(--pomi-surface, #fff));
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    border-color 140ms ease,
    background-color 140ms ease,
    transform 140ms ease;
}

.lab__kit:hover {
  transform: translateX(2px);
  background: var(--pomi-surface-hover, var(--pomi-surface));
}

.lab__kit--active {
  border-color: color-mix(in srgb, var(--pomi-accent) 50%, var(--pomi-border));
  background: color-mix(in srgb, var(--pomi-accent) 10%, var(--pomi-surface));
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--pomi-accent) 18%, transparent);
}

.lab__kit-swatch {
  display: grid;
  place-items: center;
  width: 1.85rem;
  height: 1.85rem;
  border-radius: 999px;
  flex-shrink: 0;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  box-shadow: 0 4px 10px color-mix(in srgb, var(--pomi-fg) 12%, transparent);
}

.lab__kit-emoji {
  text-shadow: 0 1px 1px color-mix(in srgb, #000 25%, transparent);
}

.lab__kit-copy {
  display: grid;
  gap: 0.08rem;
  min-width: 0;
}

.lab__kit-name {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: -0.015em;
}

.lab__kit-hint {
  font-size: 0.75rem;
  color: var(--pomi-muted, #5c5f6a);
}

.lab__presets {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.lab__preset {
  width: 1.65rem;
  height: 1.65rem;
  border: 2px solid color-mix(in srgb, #fff 55%, transparent);
  border-radius: 999px;
  padding: 0;
  cursor: pointer;
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--pomi-fg) 12%, transparent);
  transition: transform 140ms ease;
}

.lab__preset:hover {
  transform: scale(1.1);
}

.lab__preset--active {
  box-shadow:
    0 0 0 2px var(--pomi-bg, #fff),
    0 0 0 4px var(--pomi-accent, #34c759);
}

.lab__preset--custom {
  position: relative;
  overflow: hidden;
}

.lab__preset--custom input {
  position: absolute;
  inset: -30%;
  width: 160%;
  height: 160%;
  border: 0;
  padding: 0;
  cursor: pointer;
  opacity: 0;
}

.lab__accent-code {
  display: inline-block;
  margin-top: 0.65rem;
  font-size: 0.78rem;
  font-weight: 650;
  color: var(--pomi-muted);
}

.lab__axis {
  display: grid;
  gap: 0.4rem;
  margin-bottom: 0.85rem;
}

.lab__axis:last-child {
  margin-bottom: 0;
}

.lab__axis-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--pomi-muted, #5c5f6a);
}

.lab__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.lab__chip {
  border: 1px solid var(--pomi-border, #e6e4de);
  border-radius: 999px;
  background: var(--pomi-surface, #fff);
  color: var(--pomi-fg);
  font: inherit;
  font-size: 0.75rem;
  font-weight: 650;
  padding: 0.32rem 0.65rem;
  cursor: pointer;
  transition:
    background-color 140ms ease,
    border-color 140ms ease,
    color 140ms ease,
    transform 140ms ease;
}

.lab__chip:hover {
  transform: translateY(-1px);
}

.lab__chip--active {
  border-color: color-mix(in srgb, var(--pomi-accent) 45%, var(--pomi-border));
  background: color-mix(in srgb, var(--pomi-accent) 16%, var(--pomi-surface));
  color: var(--pomi-fg);
}

.lab__code-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.55rem;
}

.lab__code-head .lab__panel-title {
  margin: 0;
}

.lab__copy {
  border: 1px solid var(--pomi-border, #e6e4de);
  border-radius: 999px;
  background: var(--pomi-surface, #fff);
  color: var(--pomi-fg, #12141a);
  font: inherit;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  min-width: 4.5rem;
}

.lab__code {
  margin: 0;
  padding: 0.85rem;
  border-radius: 12px;
  background: color-mix(in srgb, var(--pomi-fg, #12141a) 92%, transparent);
  color: #f4f4f5;
  font-size: 0.72rem;
  line-height: 1.5;
  overflow: auto;
}

.lab__canvas {
  min-width: 0;
  border: 1px solid color-mix(in srgb, var(--pomi-border, #e6e4de) 85%, transparent);
  border-radius: 18px;
  background:
    radial-gradient(
      circle at 14% 0%,
      color-mix(in srgb, var(--pomi-accent, #34c759) 18%, transparent),
      transparent 46%
    ),
    radial-gradient(
      circle at 90% 12%,
      color-mix(in srgb, #8bcf53 12%, transparent),
      transparent 40%
    ),
    var(--pomi-bg, #f6f5f2);
  box-shadow: 0 18px 40px color-mix(in srgb, var(--pomi-fg) 6%, transparent);
  overflow: hidden;
  transition:
    background 180ms ease,
    border-color 180ms ease;
}

.lab__canvas-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 1.1rem;
  border-bottom: 1px solid color-mix(in srgb, var(--pomi-border, #e6e4de) 85%, transparent);
  background: color-mix(in srgb, var(--pomi-surface, #fff) 72%, transparent);
  backdrop-filter: blur(8px);
}

.lab__live {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.lab__live-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: #34c759;
  box-shadow: 0 0 0 0 color-mix(in srgb, #34c759 55%, transparent);
  animation: lab-pulse 1.6s ease-out infinite;
}

.lab__canvas-label {
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--pomi-muted, #5c5f6a);
}

.lab__canvas-kit {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: capitalize;
  color: var(--pomi-fg, #12141a);
}

.lab__canvas-emoji {
  display: inline-grid;
  place-items: center;
  width: 1.35rem;
  height: 1.35rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--pomi-accent) 18%, transparent);
  font-size: 0.7rem;
}

.lab__canvas-body {
  display: grid;
  gap: 1.25rem;
  padding: 1.15rem;
}

.lab__block h3,
.lab__grid :deep(.pomi-card__title) {
  letter-spacing: -0.02em;
}

.lab__block h3 {
  margin: 0 0 0.9rem;
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--pomi-muted, #5c5f6a);
}

.lab__row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.lab__stack {
  display: grid;
  gap: 0.85rem;
}

.lab__grid {
  display: grid;
  gap: 1rem;
}

@media (min-width: 860px) {
  .lab__grid {
    grid-template-columns: 1.05fr 0.95fr;
    align-items: start;
  }
}

.lab__person {
  padding: 0.7rem 0.85rem;
  border: 1px solid var(--pomi-border, #e6e4de);
  border-radius: var(--pomi-radius, 12px);
  background: var(--pomi-surface, #fff);
  font-size: 0.9rem;
  transition: transform 140ms ease;
}

.lab__person:hover {
  transform: translateX(3px);
}

.lab__skeleton {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.lab__skeleton :deep(.pomi-skeleton-stack) {
  flex: 1;
  min-width: 0;
}

@keyframes lab-pulse {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, #34c759 45%, transparent);
  }
  70% {
    box-shadow: 0 0 0 8px transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}

@keyframes lab-wiggle {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.01) rotate(-0.35deg);
  }
  70% {
    transform: scale(1.005) rotate(0.35deg);
  }
  100% {
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .lab__live-dot,
  .lab--pulse .lab__canvas,
  .lab__kit,
  .lab__chip,
  .lab__preset,
  .lab__surprise,
  .lab__person {
    animation: none;
    transition: none;
  }
}
</style>
