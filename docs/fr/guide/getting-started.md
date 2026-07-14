# Premiers pas

Pomikit est une bibliothèque de composants Vue 3 conçue autour de valeurs par défaut zero-config et d'API orientées intention. Installez-la, importez les styles, et commencez à composer.

## Installation

```bash
npm install pomikit-ui
# or
pnpm add pomikit-ui
# or
yarn add pomikit-ui
```

Dépendance peer : Vue 3.

## Styles

Importez la feuille de style une seule fois dans le point d'entrée de votre application :

```ts
import 'pomikit-ui/styles.css'
```

## Usage zero-config

Les composants fonctionnent sans configuration de thème. Les valeurs par défaut utilisent le Design Kit `linear`.

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## Plugin et thème optionnels

Pour les services toast/dialog et un Design Kit de marque, enregistrez le plugin Pomikit :

```ts
import { createApp } from 'vue'
import { Pomikit, createTheme } from 'pomikit-ui'
import 'pomikit-ui/styles.css'
import App from './App.vue'

const app = createApp(App)

app.use(Pomikit, {
  theme: createTheme({
    design: 'linear',
    accent: '#5B5FFF',
  }),
})

app.mount('#app')
```

Le plugin applique les tokens de thème et monte les overlays dialog/toast. Voir [Root et services](/guide/providers) si vous préférez `<PomikitRoot>`.

## Étapes suivantes

- [Philosophie](/guide/philosophy) : comment Pomikit choisit ses API
- [Design Kits](/guide/theming) : thématiser toute l'application en une fois
- [Conception par intention](/guide/intent) : laisser les composants déduire le comportement
