# Root & services

Dialog and toast need a service host. Prefer the **Pomikit plugin** or **`<PomikitRoot>`**. Standalone `DialogProvider` / `ToastProvider` are deprecated.

## Pomikit plugin (recommended)

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

By default the plugin:

1. Applies theme tokens (`applyTheme` / `applyThemeOptions`)
2. Mounts dialog + toast overlays so `useDialog()` and `useToast()` work app-wide

Disable overlays when you mount them yourself:

```ts
app.use(Pomikit, {
  theme: { design: 'glass' },
  overlays: false,
})
```

## PomikitRoot

Use when you want overlays in the Vue tree (Nuxt layouts, scoped roots, SSR-friendly placement):

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

Props: `toastDuration`, `toastLabel`. Pair with the plugin using `overlays: false`, or rely on shared stores when overlays are mounted here.

## Composables

```ts
import { useDialog, useToast } from 'pomikit-ui'

const dialog = useDialog()
const toast = useToast()

await dialog.confirm({ title: 'Delete project?' })
toast.success('Deleted')
```

## Legacy providers

`DialogProvider` and `ToastProvider` remain exported but are **deprecated**. Prefer `<PomikitRoot>` or the Pomikit plugin so theme + services stay consistent.
