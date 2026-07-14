import type { SiteMessages } from './types'

export const pt: SiteMessages = {
  hero: {
    name: 'Pomikit',
    text: 'Menos decisões. Melhores interfaces.',
    tagline:
      'Componentes Vue 3 orientados à intenção. Importe um e obtenha uma UI premium. Tematize o app inteiro uma vez com Design Kits.',
    logoTagline: 'Biblioteca UI/UX para Vue.js',
    getStarted: 'Começar',
    playground: 'Playground',
    createdBy: 'Criado por',
  },
  features: {
    items: [
      {
        title: '💡 Bonito por padrão',
        body: 'Importe um componente e a folha de estilos. Sem tokens para montar antes de algo ficar certo.',
      },
      {
        title: '🎯 Intenção primeiro',
        body: 'Promises, confirm e listas pending são inferidos. Prefira comportamento a props de estilo.',
      },
      {
        title: '🎨 Tema uma vez',
        body: 'Os Design Kits definem acento, radius, motion e superfícies para todo o app.',
      },
      {
        title: '🧠 Menos decisões',
        body: 'Menos props no call site. Mais energia para o trabalho de produto que importa.',
      },
      {
        title: '⚡ Zero config',
        body: 'Funciona na hora. Tematização opcional quando quiser uma personalidade distinta.',
      },
      {
        title: '📦 Nativo Vue 3',
        body: 'Componentes e composables tree-shakeables para a Composition API do Vue 3.',
      },
    ],
  },
  playground: {
    eyebrow: 'Design Lab',
    title: 'Gire, ajuste, brinque.',
    lede: 'Escolha um kit, mexa nos eixos e veja cada componente pegar o clima. Mesma UI, cinco personalidades. Clique em Surprise para um pouco de caos.',
  },
  kits: {
    items: [
      {
        id: 'linear',
        label: 'Linear',
        personality: 'UI de produto minimalista',
        useCase: 'Dashboards, tooling, SaaS',
      },
      {
        id: 'glass',
        label: 'Glass',
        personality: 'Superfícies translúcidas suaves',
        useCase: 'Overlays, apps criativos',
      },
      {
        id: 'editorial',
        label: 'Editorial',
        personality: 'Conteúdo primeiro, tipografia calma',
        useCase: 'Docs, publicação, blogs',
      },
      {
        id: 'soft',
        label: 'Soft',
        personality: 'Amigável e acolhedor',
        useCase: 'Onboarding, apps de consumo',
      },
      {
        id: 'playful',
        label: 'Playful',
        personality: 'Mais vivo e expressivo',
        useCase: 'Marketing, produtos sociais',
      },
    ],
  },
  paths: {
    gettingStarted: '/guide/getting-started',
    playground: '/playground',
  },
}
