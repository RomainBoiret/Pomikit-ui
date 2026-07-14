# Root y servicios

Dialog y toast necesitan un host de servicios. Prefiere el **plugin Pomikit** o **`<PomikitRoot>`**. `DialogProvider` / `ToastProvider` standalone están deprecados.

## Plugin Pomikit (recomendado)

```ts
import { createApp } from 'vue'
import { Pomikit, createTheme } from 'pomikit-ui'
import App from './App.vue'

createApp(App)
  .use(Pomikit, {
    theme: createTheme({ design: 'linear', accent: '#34C759' }),
    toastDuration: 4200,
  })
  .mount('#app')
```

Por defecto el plugin:

1. Aplica tokens de tema (`applyTheme` / `applyThemeOptions`)
2. Monta overlays de dialog + toast para que `useDialog()` y `useToast()` funcionen en toda la app

Desactiva los overlays cuando los montas tú mismo:

```ts
app.use(Pomikit, {
  theme: { design: 'glass' },
  overlays: false,
})
```

## PomikitRoot

Úsalo cuando quieras los overlays en el árbol de Vue (layouts de Nuxt, roots con alcance, colocación SSR-friendly):

```vue
<script setup lang="ts">
import { PomikitRoot } from 'pomikit-ui'
</script>

<template>
  <PomikitRoot>
    <RouterView />
  </PomikitRoot>
</template>
```

Props: `toastDuration`, `toastLabel`. Combínalo con el plugin usando `overlays: false`, o apoyate en stores compartidos cuando los overlays se montan aquí.

## Composables

```ts
import { useDialog, useToast } from 'pomikit-ui'

const dialog = useDialog()
const toast = useToast()

await dialog.confirm({ title: 'Delete project?' })
toast.success('Deleted')
```

## Providers legacy

`DialogProvider` y `ToastProvider` siguen exportados pero están **deprecados**. Prefiere `<PomikitRoot>` o el plugin Pomikit para que tema + servicios se mantengan coherentes.
