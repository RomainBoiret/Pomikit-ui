import { createApp, defineComponent, h } from 'vue'
import App from './App.vue'
import { DialogProvider, Pomikit, ToastProvider, createTheme } from 'pomikit-ui'
import 'pomikit-ui'

const Root = defineComponent({
  name: 'PlaygroundRoot',
  setup() {
    return () =>
      h(ToastProvider, null, {
        default: () => h(DialogProvider, null, { default: () => h(App) }),
      })
  },
})

createApp(Root)
  .use(Pomikit, {
    theme: createTheme({
      accent: '#5B5FFF',
      radius: 'soft',
      density: 'comfortable',
      motion: 'expressive',
    }),
  })
  .mount('#app')
