import type { SiteMessages } from './types'

export const fr: SiteMessages = {
  hero: {
    name: 'Pomikit',
    text: 'Moins de décisions. De meilleures interfaces.',
    tagline:
      'Composants Vue 3 orientés intention. Importez-en un, obtenez une UI premium. Un Design Kit pour toute l\'app.',
    logoTagline: 'Bibliothèque UI/UX pour Vue.js',
    getStarted: 'Commencer',
    playground: 'Playground',
    createdBy: 'Créé par',
  },
  features: {
    items: [
      {
        title: '💡 Beau par défaut',
        body: 'Importez un composant et la feuille de styles. Pas de tokens à assembler avant que quelque chose soit joli.',
      },
      {
        title: '🎯 Intention d\'abord',
        body: 'Promises, confirm et listes pending sont déduits. Préférez le comportement aux props de style.',
      },
      {
        title: '🎨 Thème une seule fois',
        body: 'Les Design Kits décident accent, radius, motion et surfaces pour toute l\'app.',
      },
      {
        title: '🧠 Moins de décisions',
        body: 'Moins de props au call site. Plus d\'énergie pour le produit qui compte.',
      },
      {
        title: '⚡ Zéro config',
        body: 'Fonctionne tout de suite. Thème optionnel quand vous voulez une personnalité distincte.',
      },
      {
        title: '📦 Natif Vue 3',
        body: 'Composants et composables tree-shakeables pour l\'API de composition Vue 3.',
      },
    ],
  },
  playground: {
    eyebrow: 'Labo design',
    title: 'Tourne, règle, joue.',
    lede: 'Choisissez un kit, jouez avec les axes, et regardez chaque composant adopter l\'ambiance. Même UI, cinq personnalités. Lancez Surprise pour un peu de chaos.',
  },
  kits: {
    items: [
      {
        id: 'linear',
        label: 'Linear',
        personality: 'UI produit minimale',
        useCase: 'Tableaux de bord, outils, SaaS',
      },
      {
        id: 'glass',
        label: 'Glass',
        personality: 'Surfaces translucides douces',
        useCase: 'Overlays, apps créatives',
      },
      {
        id: 'editorial',
        label: 'Editorial',
        personality: 'Contenu d\'abord, typo calme',
        useCase: 'Docs, édition, blogs',
      },
      {
        id: 'soft',
        label: 'Soft',
        personality: 'Amical et accueillant',
        useCase: 'Onboarding, apps grand public',
      },
      {
        id: 'playful',
        label: 'Playful',
        personality: 'Plus vif et expressif',
        useCase: 'Marketing, produits sociaux',
      },
    ],
  },
  paths: {
    gettingStarted: '/guide/getting-started',
    playground: '/playground',
  },
}
