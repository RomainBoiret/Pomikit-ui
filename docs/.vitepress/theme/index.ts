import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { Pomikit, createTheme, DESIGNS } from 'pomikit-ui'
import Layout from './Layout.vue'
import Playground from './Playground.vue'
import './custom.css'
import './site/styles/site.css'
import '../../../src/styles/index.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(Pomikit, {
      theme: createTheme({
        design: 'linear',
        accent: DESIGNS.linear.accent,
        mode: 'system',
      }),
    })
    app.component('Playground', Playground)
  },
} satisfies Theme
