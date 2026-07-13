# Installation

## Prérequis

- Vue `^3.4`
- Node `>= 20`

## Installer

::: code-group

```bash [npm]
npm install pomikit-ui
```

```bash [pnpm]
pnpm add pomikit-ui
```

```bash [yarn]
yarn add pomikit-ui
```

:::

## Zero-config

Les composants sont **beaux par défaut**. Aucune prop de style. Aucune décision de design.

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
import 'pomikit-ui/styles.css'
</script>

<template>
  <Button>Save</Button>
</template>
```

> L’import nommé depuis `pomikit-ui` charge aussi les styles (side-effect). `pomikit-ui/styles.css` reste recommandé pour être explicite.

## Identité de l’app (optionnel)

Une seule décision visuelle — pas une par composant :

```ts
// main.ts
import { createApp } from 'vue'
import { Pomikit, createTheme } from 'pomikit-ui'
import 'pomikit-ui/styles.css'
import App from './App.vue'

createApp(App)
  .use(Pomikit, {
    theme: createTheme({
      design: 'linear',
      accent: '#5B5FFF',
      mode: 'system',
    }),
  })
  .mount('#app')
```

Le plugin :
1. applique le Design Kit
2. enregistre Dialog + Toast (plus besoin de providers visibles)

## Premiers composants

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Field, Input, useToast } from 'pomikit-ui'

const email = ref('')
const toast = useToast()

async function save() {
  await fetch('/api/profile', { method: 'POST' })
  toast.success('Saved')
}
</script>

<template>
  <Field label="Email" required>
    <Input v-model="email" type="email" placeholder="you@company.com" />
  </Field>
  <Button @click="save">Save</Button>
</template>
```

Intent : Promise → busy → success. Toast sémantique. Aucun `variant` / `tone` / `size`.

## Alternative sans plugin : `<PomikitRoot>`

```vue
<script setup lang="ts">
import { PomikitRoot, applyTheme, createTheme } from 'pomikit-ui'

applyTheme(createTheme({ design: 'editorial' }))
</script>

<template>
  <PomikitRoot>
    <RouterView />
  </PomikitRoot>
</template>
```

## Suite

- [Philosophie](/guide/philosophy) — pourquoi moins de props
- [Intent](/guide/intent) — comportements déduits
- [Thème](/guide/theming) — Design Kits
