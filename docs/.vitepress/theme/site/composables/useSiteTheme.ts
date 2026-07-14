import { computed, ref } from 'vue'
import {
  applyTheme,
  createTheme,
  DESIGNS,
  type ThemeDesign,
  type ThemeMode,
} from 'pomikit-ui'

const design = ref<ThemeDesign>('linear')
const mode = ref<ThemeMode>('light')

const kit = computed(() => DESIGNS[design.value])

function reapply() {
  if (typeof document === 'undefined') return
  const pack = DESIGNS[design.value]
  applyTheme(
    createTheme({
      design: design.value,
      accent: pack.accent,
      mode: mode.value === 'system' ? 'system' : mode.value,
    }),
  )
}

function setDesign(next: ThemeDesign) {
  if (design.value === next) return
  design.value = next
  reapply()
}

function setMode(next: ThemeMode) {
  mode.value = next
  reapply()
}

export function useSiteTheme() {
  return {
    design,
    mode,
    kit,
    setDesign,
    setMode,
    reapply,
    designs: [
      {
        id: 'linear' as const,
        label: 'Linear',
        personality: 'Minimal product UI',
        useCase: 'Dashboards, tooling, SaaS',
      },
      {
        id: 'glass' as const,
        label: 'Glass',
        personality: 'Soft translucent surfaces',
        useCase: 'Overlays, creative apps',
      },
      {
        id: 'editorial' as const,
        label: 'Editorial',
        personality: 'Content-first, calm type',
        useCase: 'Docs, publishing, blogs',
      },
      {
        id: 'soft' as const,
        label: 'Soft',
        personality: 'Friendly and approachable',
        useCase: 'Onboarding, consumer apps',
      },
      {
        id: 'playful' as const,
        label: 'Playful',
        personality: 'Brighter and expressive',
        useCase: 'Marketing, social products',
      },
    ],
  }
}
