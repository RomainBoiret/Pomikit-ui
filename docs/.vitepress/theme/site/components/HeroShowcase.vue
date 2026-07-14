<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import {
  Button,
  Card,
  DESIGNS,
  Field,
  Input,
  Select,
  Switch,
  applyTheme,
  createTheme,
  useToast,
  type ThemeDesign,
} from 'pomikit-ui'

const toast = useToast()
const { isDark } = useData()

const rootEl = ref<HTMLElement | null>(null)
const design = ref<ThemeDesign>('linear')
const name = ref('Alex')
const notify = ref(true)

const kitOptions = [
  { label: 'Linear', value: 'linear' },
  { label: 'Glass', value: 'glass' },
  { label: 'Editorial', value: 'editorial' },
  { label: 'Soft', value: 'soft' },
  { label: 'Playful', value: 'playful' },
]

const kitLabel = computed(
  () => kitOptions.find((k) => k.value === design.value)?.label ?? 'Linear',
)

const initials = computed(() =>
  name.value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join(''),
)

function syncLocalTheme() {
  if (!rootEl.value) return
  const pack = DESIGNS[design.value]
  applyTheme(
    createTheme({
      design: design.value,
      accent: pack.accent,
      radius: pack.radius,
      density: pack.density,
      motion: pack.motion,
      elevation: pack.elevation,
      mode: isDark.value ? 'dark' : 'light',
    }),
    rootEl.value,
  )
}

function onKitChange(value: string | number | null) {
  if (typeof value !== 'string') return
  design.value = value as ThemeDesign
}

async function save() {
  await new Promise((r) => setTimeout(r, 650))
  toast.success('Saved', 'Profile updated')
}

watch(design, syncLocalTheme)
watch(isDark, syncLocalTheme)
onMounted(syncLocalTheme)
</script>

<template>
  <div ref="rootEl" class="hero-showcase">
    <div class="hero-showcase__aura" aria-hidden="true" />

    <Card class="hero-showcase__card">
      <div class="hero-showcase__chrome">
        <div class="hero-showcase__dots" aria-hidden="true">
          <span /><span /><span />
        </div>
        <p class="hero-showcase__chrome-label">{{ kitLabel }} kit</p>
      </div>

      <div class="hero-showcase__body">
        <div class="hero-showcase__profile">
          <div class="hero-showcase__avatar" aria-hidden="true">{{ initials || 'A' }}</div>
          <div>
            <h2 class="hero-showcase__title">Workspace</h2>
            <p class="hero-showcase__subtitle">Live Design Kit preview</p>
          </div>
          <Switch v-model="notify" aria-label="Alerts" />
        </div>

        <div class="hero-showcase__stack">
          <Field label="Display name" required>
            <Input v-model="name" placeholder="Your name" />
          </Field>

          <Field label="Design Kit" helper="Applies only to this preview">
            <Select
              :model-value="design"
              :options="kitOptions"
              placeholder="Choose a kit"
              @update:model-value="onKitChange"
            />
          </Field>

          <div class="hero-showcase__actions">
            <Button @click="save">Save changes</Button>
            <Button variant="ghost" @click="toast.info('Hello from Pomikit')">Toast</Button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<style scoped>
.hero-showcase {
  position: relative;
  width: min(100%, 400px);
  padding: 1rem 0.25rem;
  color: var(--pomi-fg);
}

.hero-showcase__aura {
  position: absolute;
  inset: 8% 2% 4%;
  border-radius: 40%;
  background: radial-gradient(
    circle at 50% 40%,
    color-mix(in srgb, var(--pomi-accent) 30%, transparent),
    transparent 68%
  );
  filter: blur(22px);
  pointer-events: none;
  z-index: 0;
}

.hero-showcase__card {
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 0;
  border: 1px solid color-mix(in srgb, var(--pomi-border) 80%, transparent);
  background: var(--pomi-surface-elevated, var(--pomi-surface));
  box-shadow:
    0 1px 0 color-mix(in srgb, #fff 28%, transparent) inset,
    0 22px 48px color-mix(in srgb, var(--pomi-fg) 8%, transparent);
  animation: hero-card-in 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-showcase__chrome {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid color-mix(in srgb, var(--pomi-border) 85%, transparent);
  background: color-mix(in srgb, var(--pomi-bg) 55%, transparent);
}

.hero-showcase__dots {
  display: flex;
  gap: 0.35rem;
}

.hero-showcase__dots span {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: color-mix(in srgb, var(--pomi-muted) 35%, transparent);
}

.hero-showcase__dots span:nth-child(1) {
  background: #ff5f57;
}

.hero-showcase__dots span:nth-child(2) {
  background: #febc2e;
}

.hero-showcase__dots span:nth-child(3) {
  background: #28c840;
}

.hero-showcase__chrome-label {
  margin: 0;
  color: var(--pomi-muted);
  font-size: 0.75rem;
  font-weight: 650;
  letter-spacing: -0.01em;
}

.hero-showcase__body {
  padding: 1rem 1.05rem 1.15rem;
}

.hero-showcase__profile {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.hero-showcase__avatar {
  display: grid;
  place-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.85rem;
  background: linear-gradient(
    145deg,
    color-mix(in srgb, var(--pomi-accent) 70%, #fff),
    var(--pomi-accent)
  );
  color: #fff;
  font-size: 0.8rem;
  font-weight: 750;
  letter-spacing: -0.02em;
}

.hero-showcase__title {
  margin: 0;
  font-family: var(--pomi-font-display, var(--pomi-font));
  font-size: 1.02rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
}

.hero-showcase__subtitle {
  margin: 0.12rem 0 0;
  color: var(--pomi-muted);
  font-size: 0.78rem;
  line-height: 1.3;
}

.hero-showcase__stack {
  display: grid;
  gap: 0.85rem;
}

.hero-showcase__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

@keyframes hero-card-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-showcase__card {
    animation: none;
  }
}
</style>
