import { createApp } from 'vue'
import App from './App.vue'
import { Pomikit, createTheme } from 'pomikit-ui'
import 'pomikit-ui'

createApp(App)
  .use(Pomikit, {
    theme: createTheme({
      accent: '#34C759',
      design: 'linear',
    }),
  })
  .mount('#app')
