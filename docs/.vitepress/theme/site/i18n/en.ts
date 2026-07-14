import type { SiteMessages } from './types'

export const en: SiteMessages = {
  hero: {
    name: 'Pomikit',
    text: 'Less decisions. Better interfaces.',
    tagline:
      'Intent-first Vue 3 components. Import one, get a premium UI. Theme the whole app once with Design Kits.',
    logoTagline: 'UI/UX library for Vue.js',
    getStarted: 'Get Started',
    playground: 'Playground',
    createdBy: 'Created by',
  },
  features: {
    items: [
      {
        title: '💡 Beautiful by default',
        body: 'Import a component and the stylesheet. No tokens to assemble before something looks right.',
      },
      {
        title: '🎯 Intent first',
        body: 'Promises, confirm, and pending lists are inferred. Prefer behavior over style props.',
      },
      {
        title: '🎨 Theme once',
        body: 'Design Kits decide accent, radius, motion, and surfaces for the whole app.',
      },
      {
        title: '🧠 Less decisions',
        body: 'Fewer props at the call site. More energy for product work that actually matters.',
      },
      {
        title: '⚡ Zero config',
        body: 'Works out of the box. Optional theming when you want a distinct personality.',
      },
      {
        title: '📦 Vue 3 native',
        body: 'Tree-shakeable components and composables built for the Vue 3 composition API.',
      },
    ],
  },
  playground: {
    eyebrow: 'Design Lab',
    title: 'Twist, tweak, play.',
    lede: 'Pick a kit, flip the dials, and watch every component catch the vibe. Same UI, five personalities. Hit Surprise when you want chaos.',
  },
  kits: {
    items: [
      {
        id: 'linear',
        label: 'Linear',
        personality: 'Minimal product UI',
        useCase: 'Dashboards, tooling, SaaS',
      },
      {
        id: 'glass',
        label: 'Glass',
        personality: 'Soft translucent surfaces',
        useCase: 'Overlays, creative apps',
      },
      {
        id: 'editorial',
        label: 'Editorial',
        personality: 'Content-first, calm type',
        useCase: 'Docs, publishing, blogs',
      },
      {
        id: 'soft',
        label: 'Soft',
        personality: 'Friendly and approachable',
        useCase: 'Onboarding, consumer apps',
      },
      {
        id: 'playful',
        label: 'Playful',
        personality: 'Brighter and expressive',
        useCase: 'Marketing, social products',
      },
    ],
  },
  paths: {
    gettingStarted: '/guide/getting-started',
    playground: '/playground',
  },
}
