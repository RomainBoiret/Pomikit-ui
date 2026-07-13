import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import Playground from './Playground.vue'
import './custom.css'
import '../../../src/styles/index.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Playground', Playground)
  },
} satisfies Theme
