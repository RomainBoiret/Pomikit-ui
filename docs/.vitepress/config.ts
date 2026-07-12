import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Pomikit',
  description: 'Beautiful by default. Components that understand your intent.',
  lang: 'fr-FR',
  cleanUrls: true,
  themeConfig: {
    logo: undefined,
    siteTitle: 'Pomikit',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Composants', link: '/components/button' },
      { text: 'Référence', link: '/reference/types' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation', link: '/guide/getting-started' },
          { text: 'Thème (Design DNA)', link: '/guide/theming' },
          { text: 'Intent design', link: '/guide/intent' },
          { text: 'Providers', link: '/guide/providers' },
          { text: 'Storybook & playground', link: '/guide/storybook' },
        ],
      },
      {
        text: 'Composants',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Card', link: '/components/card' },
          { text: 'Checkbox · Switch · Radio', link: '/components/choice' },
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
      message: 'Intelligent Design System for Vue 3',
      copyright: 'Pomikit — Beautiful by default.',
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
  head: [['meta', { name: 'theme-color', content: '#5B5FFF' }]],
})
