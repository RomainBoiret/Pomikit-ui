# Root e serviços

Dialog e toast precisam de um host de serviços. Prefira o **plugin Pomikit** ou **`<PomikitRoot>`**. `DialogProvider` / `ToastProvider` standalone estão deprecados.

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

Por padrão o plugin:

1. Aplica tokens de tema (`applyTheme` / `applyThemeOptions`)
2. Monta overlays de dialog + toast para que `useDialog()` e `useToast()` funcionem em toda a app

Desative os overlays quando você os montar por conta própria:

```ts
app.use(Pomikit, {
  theme: { design: 'glass' },
  overlays: false,
})
```

## PomikitRoot

Use quando quiser os overlays na árvore Vue (layouts Nuxt, roots com escopo, colocação SSR-friendly):

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

Props: `toastDuration`, `toastLabel`. Combine com o plugin usando `overlays: false`, ou confie em stores compartilhados quando os overlays forem montados aqui.

## Composables

```ts
import { useDialog, useToast } from 'pomikit-ui'

const dialog = useDialog()
const toast = useToast()

await dialog.confirm({ title: 'Delete project?' })
toast.success('Deleted')
```

## Providers legados

`DialogProvider` e `ToastProvider` continuam exportados, mas estão **deprecados**. Prefira `<PomikitRoot>` ou o plugin Pomikit para manter tema + serviços consistentes.
