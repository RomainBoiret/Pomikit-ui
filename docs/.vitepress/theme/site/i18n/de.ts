import type { SiteMessages } from './types'

export const de: SiteMessages = {
  hero: {
    name: 'Pomikit',
    text: 'Weniger Entscheidungen. Bessere Interfaces.',
    tagline:
      'Intent-first Vue-3-Komponenten. Eine importieren, premium UI bekommen. Die ganze App einmal mit Design Kits themen.',
    logoTagline: 'UI/UX-Bibliothek für Vue.js',
    getStarted: 'Loslegen',
    playground: 'Playground',
    createdBy: 'Erstellt von',
  },
  features: {
    items: [
      {
        title: '💡 Schön von Haus aus',
        body: 'Komponente und Stylesheet importieren. Keine Tokens zusammensetzen, bevor etwas gut aussieht.',
      },
      {
        title: '🎯 Intent zuerst',
        body: 'Promises, confirm und pending-Listen werden abgeleitet. Verhalten vor Style-Props.',
      },
      {
        title: '🎨 Einmal themen',
        body: 'Design Kits legen Accent, Radius, Motion und Surfaces für die ganze App fest.',
      },
      {
        title: '🧠 Weniger Entscheidungen',
        body: 'Weniger Props am Call Site. Mehr Energie für Produktarbeit, die zählt.',
      },
      {
        title: '⚡ Null Konfiguration',
        body: 'Funktioniert sofort. Optionales Theming, wenn Sie eine eigene Persönlichkeit wollen.',
      },
      {
        title: '📦 Vue 3 native',
        body: 'Tree-shakeable Komponenten und Composables für die Vue-3-Composition-API.',
      },
    ],
  },
  playground: {
    eyebrow: 'Design Lab',
    title: 'Drehen, feilen, spielen.',
    lede: 'Wähle ein Kit, drehe an den Achsen und sieh, wie jede Komponente den Vibe übernimmt. Dieselbe UI, fünf Persönlichkeiten. Tippe auf Surprise, wenn du Chaos willst.',
  },
  kits: {
    items: [
      {
        id: 'linear',
        label: 'Linear',
        personality: 'Minimale Produkt-UI',
        useCase: 'Dashboards, Tooling, SaaS',
      },
      {
        id: 'glass',
        label: 'Glass',
        personality: 'Weiche transluzente Surfaces',
        useCase: 'Overlays, kreative Apps',
      },
      {
        id: 'editorial',
        label: 'Editorial',
        personality: 'Content first, ruhige Typo',
        useCase: 'Docs, Publishing, Blogs',
      },
      {
        id: 'soft',
        label: 'Soft',
        personality: 'Freundlich und nahbar',
        useCase: 'Onboarding, Consumer-Apps',
      },
      {
        id: 'playful',
        label: 'Playful',
        personality: 'Heller und ausdrucksstärker',
        useCase: 'Marketing, Social Products',
      },
    ],
  },
  paths: {
    gettingStarted: '/guide/getting-started',
    playground: '/playground',
  },
}
