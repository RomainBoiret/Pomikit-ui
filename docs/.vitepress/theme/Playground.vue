<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import {
  Button,
  Card,
  Checkbox,
  Collection,
  DESIGNS,
  Field,
  Input,
  PomikitRoot,
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

const rootEl = ref<HTMLElement | null>(null)

const dna = reactive({
  accent: DESIGNS.linear.accent,
  design: 'linear' as ThemeDesign,
  radius: DESIGNS.linear.radius as ThemeRadius,
  density: DESIGNS.linear.density as ThemeDensity,
  motion: DESIGNS.linear.motion as ThemeMotion,
  elevation: DESIGNS.linear.elevation as ThemeElevation,
  mode: 'light' as ThemeMode,
})

const designs: { id: ThemeDesign; label: string }[] = [
  { id: 'linear', label: 'Linear' },
  { id: 'glass', label: 'Glass' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'soft', label: 'Soft' },
  { id: 'playful', label: 'Playful' },
]

const radii: ThemeRadius[] = ['sharp', 'soft', 'round']
const densities: ThemeDensity[] = ['compact', 'comfortable', 'spacious']
const motions: ThemeMotion[] = ['none', 'normal', 'expressive']
const elevations: ThemeElevation[] = ['flat', 'soft', 'floating']
const modes: ThemeMode[] = ['light', 'dark']

function selectDesign(id: ThemeDesign) {
  const pack = DESIGNS[id]
  dna.design = id
  dna.accent = pack.accent
  dna.radius = pack.radius
  dna.density = pack.density
  dna.motion = pack.motion
  dna.elevation = pack.elevation
}

function syncTheme() {
  const theme = createTheme({
    accent: dna.accent,
    design: dna.design,
    radius: dna.radius,
    density: dna.density,
    motion: dna.motion,
    elevation: dna.elevation,
    mode: dna.mode,
  })
  if (rootEl.value) applyTheme(theme, rootEl.value)
  if (typeof document !== 'undefined') applyTheme(theme, document.documentElement)
}

watch(dna, syncTheme, { deep: true })
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
  accent: '${dna.accent}',
  design: '${dna.design}',
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
</script>

<template>
  <div ref="rootEl" class="pomi-pg">
    <div class="pomi-pg__intro">
      <p class="pomi-pg__eyebrow">Less decisions</p>
      <h2 class="pomi-pg__title">Change le kit. Pas chaque composant.</h2>
      <p class="pomi-pg__lede">
        Un Design Kit à gauche — toute la scène se transforme. Aucun CSS, aucune prop de style.
      </p>
    </div>

    <div class="pomi-pg__layout">
      <aside class="pomi-pg__controls" aria-label="Design DNA controls">
        <label class="pomi-pg__field">
          <span>Accent</span>
          <div class="pomi-pg__accent">
            <input v-model="dna.accent" type="color" />
            <code>{{ dna.accent }}</code>
          </div>
        </label>

        <div class="pomi-pg__field">
          <span>Design Kit</span>
          <div class="pomi-pg__chips">
            <button
              v-for="d in designs"
              :key="d.id"
              type="button"
              class="pomi-pg__chip"
              :class="{ 'pomi-pg__chip--active': dna.design === d.id }"
              @click="selectDesign(d.id)"
            >
              {{ d.label }}
            </button>
          </div>
        </div>

        <label class="pomi-pg__field">
          <span>Radius</span>
          <select v-model="dna.radius">
            <option v-for="r in radii" :key="r" :value="r">{{ r }}</option>
          </select>
        </label>

        <label class="pomi-pg__field">
          <span>Density</span>
          <select v-model="dna.density">
            <option v-for="d in densities" :key="d" :value="d">{{ d }}</option>
          </select>
        </label>

        <label class="pomi-pg__field">
          <span>Motion</span>
          <select v-model="dna.motion">
            <option v-for="m in motions" :key="m" :value="m">{{ m }}</option>
          </select>
        </label>

        <label class="pomi-pg__field">
          <span>Elevation</span>
          <select v-model="dna.elevation">
            <option v-for="e in elevations" :key="e" :value="e">{{ e }}</option>
          </select>
        </label>

        <label class="pomi-pg__field">
          <span>Mode</span>
          <select v-model="dna.mode">
            <option v-for="m in modes" :key="m" :value="m">{{ m }}</option>
          </select>
        </label>

        <pre class="pomi-pg__code"><code>{{ themeSnippet }}</code></pre>
      </aside>

      <div class="pomi-pg__stage">
        <PomikitRoot>
          <div class="pomi-pg__stage-inner">
            <section class="pomi-pg__block">
              <h3>Actions</h3>
              <PlaygroundActions />
            </section>

            <div class="pomi-pg__grid">
              <Card>
                <template #title>Form</template>
                <template #description>Field chrome + intent validation</template>
                <form class="pomi-pg__stack" @submit.prevent="onSubmit">
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
                  <Button type="submit" busy-text="Saving…" success-text="Saved">Submit</Button>
                </form>
              </Card>

              <Card>
                <template #title>Collection</template>
                <template #description>Skeleton on first load, refresh bar after</template>
                <div class="pomi-pg__row" style="margin-bottom: 0.75rem">
                  <Button @click="pending = !pending">
                    {{ pending ? 'Stop loading' : 'Toggle pending' }}
                  </Button>
                </div>
                <Collection
                  :items="people"
                  :pending="pending"
                  layout="stack"
                  empty-title="No people"
                >
                  <template #item="{ item }">
                    <div class="pomi-pg__person">{{ item.name }}</div>
                  </template>
                </Collection>
              </Card>
            </div>

            <section class="pomi-pg__block">
              <h3>Skeleton</h3>
              <div class="pomi-pg__skeleton">
                <Skeleton variant="circle" width="2.75rem" height="2.75rem" />
                <Skeleton :lines="3" />
              </div>
            </section>
          </div>
        </PomikitRoot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pomi-pg {
  --pomi-pg-panel: color-mix(in srgb, var(--pomi-surface, #fff) 92%, transparent);
  margin: 2.5rem 0 1rem;
  padding: 1.5rem;
  border: 1px solid var(--pomi-border, #e6e4de);
  border-radius: 1.25rem;
  background:
    radial-gradient(
      circle at 12% 0%,
      color-mix(in srgb, var(--pomi-accent, #34c759) 18%, transparent),
      transparent 42%
    ),
    var(--pomi-bg, #f6f5f2);
  color: var(--pomi-fg, #12141a);
  font-family: var(--pomi-font, ui-sans-serif, system-ui, sans-serif);
  overflow: hidden;
}

.pomi-pg__intro {
  margin-bottom: 1.5rem;
  max-width: 40rem;
}

.pomi-pg__eyebrow {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--pomi-accent, #34c759);
}

.pomi-pg__title {
  margin: 0.4rem 0 0.55rem;
  font-family: var(--pomi-font-display, Georgia, serif);
  font-size: clamp(1.6rem, 3vw, 2.15rem);
  letter-spacing: -0.035em;
  line-height: 1.15;
  font-weight: 600;
}

.pomi-pg__lede {
  margin: 0;
  color: var(--pomi-muted, #5c5f6a);
  line-height: 1.5;
  font-size: 1rem;
}

.pomi-pg__layout {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
}

@media (min-width: 960px) {
  .pomi-pg__layout {
    grid-template-columns: minmax(15rem, 17.5rem) minmax(0, 1fr);
    align-items: start;
  }
}

.pomi-pg__controls {
  display: grid;
  gap: 0.85rem;
  padding: 1rem;
  border: 1px solid var(--pomi-border, #e6e4de);
  border-radius: var(--pomi-radius, 12px);
  background: var(--pomi-pg-panel);
  box-shadow: var(--pomi-shadow, none);
  position: sticky;
  top: 5.5rem;
}

.pomi-pg__field {
  display: grid;
  gap: 0.35rem;
  font-size: 0.75rem;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--pomi-muted, #5c5f6a);
}

.pomi-pg__field select,
.pomi-pg__accent input[type='color'] {
  font: inherit;
  text-transform: none;
  letter-spacing: normal;
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--pomi-fg, #12141a);
}

.pomi-pg__field select {
  width: 100%;
  min-height: 2.25rem;
  padding: 0 0.65rem;
  border: 1px solid var(--pomi-border, #e6e4de);
  border-radius: var(--pomi-radius-sm, 8px);
  background: var(--pomi-surface, #fff);
}

.pomi-pg__accent {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.pomi-pg__accent input[type='color'] {
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  border: 1px solid var(--pomi-border, #e6e4de);
  border-radius: 0.55rem;
  background: transparent;
  cursor: pointer;
}

.pomi-pg__accent code {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--pomi-fg, #12141a);
}

.pomi-pg__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.pomi-pg__chip {
  border: 1px solid var(--pomi-border, #e6e4de);
  border-radius: 999px;
  background: var(--pomi-surface, #fff);
  color: var(--pomi-fg, #12141a);
  font: inherit;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: none;
  padding: 0.35rem 0.65rem;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.pomi-pg__chip--active {
  background: var(--pomi-accent, #34c759);
  border-color: var(--pomi-accent, #34c759);
  color: var(--pomi-accent-fg, #fff);
}

.pomi-pg__code {
  margin: 0.25rem 0 0;
  padding: 0.75rem;
  border-radius: var(--pomi-radius-sm, 8px);
  background: color-mix(in srgb, var(--pomi-fg, #12141a) 92%, transparent);
  color: #f4f4f5;
  font-size: 0.7rem;
  line-height: 1.45;
  overflow: auto;
}

.pomi-pg__stage {
  min-width: 0;
}

.pomi-pg__stage-inner {
  display: grid;
  gap: 1.25rem;
  padding: 1.1rem;
  border: 1px solid var(--pomi-border, #e6e4de);
  border-radius: var(--pomi-radius, 12px);
  background: var(--pomi-pg-panel);
  box-shadow: var(--pomi-shadow, none);
}

.pomi-pg__block h3 {
  margin: 0 0 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--pomi-muted, #5c5f6a);
}

.pomi-pg__row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: center;
}

.pomi-pg__stack {
  display: grid;
  gap: 0.85rem;
}

.pomi-pg__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 720px) {
  .pomi-pg__grid {
    grid-template-columns: 1.05fr 0.95fr;
  }
}

.pomi-pg__person {
  padding: 0.7rem 0.85rem;
  border: 1px solid var(--pomi-border, #e6e4de);
  border-radius: var(--pomi-radius, 12px);
  background: var(--pomi-surface, #fff);
  font-size: 0.9rem;
}

.pomi-pg__skeleton {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.pomi-pg__skeleton :deep(.pomi-skeleton-stack) {
  flex: 1;
  min-width: 0;
}
</style>
