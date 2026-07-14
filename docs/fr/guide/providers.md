# Root et services

Dialog et toast ont besoin d'un hôte de service. Préférez le **plugin Pomikit** ou **`<PomikitRoot>`**. Les `DialogProvider` / `ToastProvider` autonomes sont dépréciés.

## Plugin Pomikit (recommandé)

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

Par défaut, le plugin :

1. Applique les tokens de thème (`applyTheme` / `applyThemeOptions`)
2. Monte les overlays dialog + toast pour que `useDialog()` et `useToast()` fonctionnent dans toute l'application

Désactivez les overlays lorsque vous les montez vous-même :

```ts
app.use(Pomikit, {
  theme: { design: 'glass' },
  overlays: false,
})
```

## PomikitRoot

À utiliser lorsque vous voulez les overlays dans l'arbre Vue (layouts Nuxt, roots scopés, placement favorable au SSR) :

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

Props : `toastDuration`, `toastLabel`. Associez-le au plugin avec `overlays: false`, ou comptez sur les stores partagés lorsque les overlays sont montés ici.

## Composables

```ts
import { useDialog, useToast } from 'pomikit-ui'

const dialog = useDialog()
const toast = useToast()

await dialog.confirm({ title: 'Delete project?' })
toast.success('Deleted')
```

## Providers hérités

`DialogProvider` et `ToastProvider` restent exportés mais sont **dépréciés**. Préférez `<PomikitRoot>` ou le plugin Pomikit pour garder thème et services cohérents.
