import type { SiteMessages } from './types'

export const zh: SiteMessages = {
  hero: {
    name: 'Pomikit',
    text: '更少决策。更好界面。',
    tagline:
      '意图优先的 Vue 3 组件。导入一个，即可获得高品质界面。用 Design Kits 只需为整个应用主题化一次。',
    logoTagline: '面向 Vue.js 的 UI/UX 组件库',
    getStarted: '快速开始',
    playground: 'Playground',
    createdBy: '作者',
  },
  features: {
    items: [
      {
        title: '💡 默认美观',
        body: '导入组件和样式表即可。无需先拼装 token，界面就已经好看。',
      },
      {
        title: '🎯 意图优先',
        body: 'Promise、confirm 与 pending 列表会自动推断。优先表达行为，而不是样式 props。',
      },
      {
        title: '🎨 主题一次',
        body: 'Design Kits 统一决定强调色、圆角、动效与表面，整站生效。',
      },
      {
        title: '🧠 更少决策',
        body: '调用点上的 props 更少。把精力留给真正重要的产品工作。',
      },
      {
        title: '⚡ 零配置',
        body: '开箱即用。想要独特气质时，可选主题化。',
      },
      {
        title: '📦 Vue 3 原生',
        body: '面向 Vue 3 组合式 API 的可树摇组件与 composables。',
      },
    ],
  },
  playground: {
    eyebrow: 'Design Lab',
    title: '拧一拧，调一调，玩一玩。',
    lede: '选一个套件，拨动参数，看每个组件跟上氛围。同一套 UI，五种个性。点 Surprise 来点小小的混乱。',
  },
  kits: {
    items: [
      {
        id: 'linear',
        label: 'Linear',
        personality: '极简产品界面',
        useCase: '仪表盘、工具、SaaS',
      },
      {
        id: 'glass',
        label: 'Glass',
        personality: '柔软半透明表面',
        useCase: '浮层、创意应用',
      },
      {
        id: 'editorial',
        label: 'Editorial',
        personality: '内容优先，沉静排版',
        useCase: '文档、出版、博客',
      },
      {
        id: 'soft',
        label: 'Soft',
        personality: '友好且亲近',
        useCase: '引导流程、消费级应用',
      },
      {
        id: 'playful',
        label: 'Playful',
        personality: '更明亮、更具表现力',
        useCase: '营销、社交产品',
      },
    ],
  },
  paths: {
    gettingStarted: '/guide/getting-started',
    playground: '/playground',
  },
}
