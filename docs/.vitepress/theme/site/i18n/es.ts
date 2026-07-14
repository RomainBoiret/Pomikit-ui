import type { SiteMessages } from './types'

export const es: SiteMessages = {
  hero: {
    name: 'Pomikit',
    text: 'Menos decisiones. Mejores interfaces.',
    tagline:
      'Componentes Vue 3 orientados a la intención. Importa uno y obtén una UI premium. Tema toda la app una vez con Design Kits.',
    logoTagline: 'Biblioteca UI/UX para Vue.js',
    getStarted: 'Empezar',
    playground: 'Playground',
    createdBy: 'Creado por',
  },
  features: {
    items: [
      {
        title: '💡 Bonito por defecto',
        body: 'Importa un componente y la hoja de estilos. Sin tokens que montar antes de que algo se vea bien.',
      },
      {
        title: '🎯 La intención primero',
        body: 'Promises, confirm y listas pending se infieren. Prioriza el comportamiento frente a las props de estilo.',
      },
      {
        title: '🎨 Tema una vez',
        body: 'Los Design Kits definen acento, radio, motion y superficies para toda la app.',
      },
      {
        title: '🧠 Menos decisiones',
        body: 'Menos props en el call site. Más energía para el trabajo de producto que importa.',
      },
      {
        title: '⚡ Cero configuración',
        body: 'Funciona al instante. Tematización opcional cuando quieras una personalidad distinta.',
      },
      {
        title: '📦 Nativo en Vue 3',
        body: 'Componentes y composables tree-shakeables para la Composition API de Vue 3.',
      },
    ],
  },
  playground: {
    eyebrow: 'Design Lab',
    title: 'Gira, ajusta, juega.',
    lede: 'Elige un kit, mueve los ejes y mira cómo cada componente captura el vibe. Misma UI, cinco personalidades. Dale a Surprise para un poco de caos.',
  },
  kits: {
    items: [
      {
        id: 'linear',
        label: 'Linear',
        personality: 'UI de producto minimalista',
        useCase: 'Dashboards, tooling, SaaS',
      },
      {
        id: 'glass',
        label: 'Glass',
        personality: 'Superficies translúcidas suaves',
        useCase: 'Overlays, apps creativas',
      },
      {
        id: 'editorial',
        label: 'Editorial',
        personality: 'Contenido primero, tipografía calmada',
        useCase: 'Docs, publicación, blogs',
      },
      {
        id: 'soft',
        label: 'Soft',
        personality: 'Amable y cercano',
        useCase: 'Onboarding, apps de consumo',
      },
      {
        id: 'playful',
        label: 'Playful',
        personality: 'Más brillante y expresivo',
        useCase: 'Marketing, productos sociales',
      },
    ],
  },
  paths: {
    gettingStarted: '/guide/getting-started',
    playground: '/playground',
  },
}
