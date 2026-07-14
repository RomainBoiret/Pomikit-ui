# Root & Services

Dialog und Toast brauchen einen Service-Host. Bevorzuge das **Pomikit-Plugin** oder **`<PomikitRoot>`**. Eigenständige `DialogProvider` / `ToastProvider` sind deprecated.

## Pomikit-Plugin (empfohlen)

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

Standardmäßig macht das Plugin:

1. Theme-Tokens anwenden (`applyTheme` / `applyThemeOptions`)
2. Dialog- + Toast-Overlays mounten, damit `useDialog()` und `useToast()` app-weit funktionieren

Overlays deaktivieren, wenn du sie selbst mountest:

```ts
app.use(Pomikit, {
  theme: { design: 'glass' },
  overlays: false,
})
```

## PomikitRoot

Nutzen, wenn Overlays im Vue-Tree liegen sollen (Nuxt-Layouts, scoped Roots, SSR-freundliche Platzierung):

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

Props: `toastDuration`, `toastLabel`. Mit dem Plugin und `overlays: false` kombinieren, oder auf shared Stores setzen, wenn Overlays hier gemountet werden.

## Composables

```ts
import { useDialog, useToast } from 'pomikit-ui'

const dialog = useDialog()
const toast = useToast()

await dialog.confirm({ title: 'Delete project?' })
toast.success('Deleted')
```

## Legacy Providers

`DialogProvider` und `ToastProvider` bleiben exportiert, sind aber **deprecated**. Bevorzuge `<PomikitRoot>` oder das Pomikit-Plugin, damit Theme + Services konsistent bleiben.
