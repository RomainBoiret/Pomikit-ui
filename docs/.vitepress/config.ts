import { defineConfig } from 'vitepress'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../..', import.meta.url))

export default defineConfig({
  title: 'Pomikit',
  description: 'Less decisions. Better interfaces.',
  lang: 'fr-FR',
  cleanUrls: true,
  vite: {
    resolve: {
      alias: {
        'pomikit-ui': resolve(root, 'src/index.ts'),
      },
    },
  },
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Pomikit',
    nav: [
      { text: 'Guide', link: '/guide/philosophy' },
      { text: 'Composants', link: '/components/button' },
      { text: 'Playground', link: '/' },
      { text: 'Référence', link: '/reference/types' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Playground', link: '/' },
          { text: 'Philosophie', link: '/guide/philosophy' },
          { text: 'Installation', link: '/guide/getting-started' },
          { text: 'Thème (Design Kits)', link: '/guide/theming' },
          { text: 'Intent design', link: '/guide/intent' },
          { text: 'Racine & services', link: '/guide/providers' },
          { text: 'Outils de développement', link: '/guide/storybook' },
        ],
      },
      {
        text: 'Composants',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Card', link: '/components/card' },
          { text: 'Checkbox · Switch', link: '/components/choice' },
          { text: 'Field', link: '/components/field' },
          { text: 'Input', link: '/components/input' },
          { text: 'Select', link: '/components/select' },
          { text: 'Dropdown', link: '/components/dropdown' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Toast', link: '/components/toast' },
          { text: 'Collection', link: '/components/collection' },
          { text: 'Skeleton', link: '/components/skeleton' },
          { text: 'EmptyState · ErrorState', link: '/components/feedback' },
        ],
      },
      {
        text: 'Composables',
        items: [
          { text: 'useDialog', link: '/composables/use-dialog' },
          { text: 'useToast', link: '/composables/use-toast' },
          { text: 'useFieldContext', link: '/composables/use-field' },
        ],
      },
      {
        text: 'Référence',
        items: [
          { text: 'Types partagés', link: '/reference/types' },
          { text: 'Rules (validation)', link: '/reference/rules' },
          { text: 'Exports', link: '/reference/exports' },
        ],
      },
    ],
    socialLinks: [],
    footer: {
      message: 'Less decisions. Better interfaces.',
      copyright: 'Pomikit — Vue 3 design system',
    },
    search: {
      provider: 'local',
    },
    outline: {
      label: 'Sur cette page',
    },
    docFooter: {
      prev: 'Précédent',
      next: 'Suivant',
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#34C759' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
  ],
})
