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

## Bootstrap

```ts
// main.ts
import { createApp } from 'vue'
import {
  Pomikit,
  createTheme,
  DialogProvider,
  ToastProvider,
} from 'pomikit-ui'
import 'pomikit-ui/styles.css'
import App from './App.vue'

createApp(App)
  .use(Pomikit, {
    theme: createTheme({
      accent: '#5B5FFF',
      personality: 'minimal', // optionnel
    }),
  })
  .mount('#app')
```

Enveloppe le root pour activer Dialog et Toast :

```vue
<!-- App.vue -->
<script setup lang="ts">
import { DialogProvider, ToastProvider } from 'pomikit-ui'
</script>

<template>
  <ToastProvider>
    <DialogProvider>
      <RouterView />
    </DialogProvider>
  </ToastProvider>
</template>
```

## Utiliser un composant

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Field, Input } from 'pomikit-ui'

const name = ref('')
</script>

<template>
  <Field label="Nom" required>
    <Input v-model="name" />
  </Field>
  <Button @click="() => Promise.resolve()">Enregistrer</Button>
</template>
```

## Ce qu’il faut retenir

| Étape | Pourquoi |
| --- | --- |
| `import 'pomikit-ui/styles.css'` | Tokens + styles des composants |
| `.use(Pomikit, { theme })` | Applique le Design DNA sur `:root` |
| `ToastProvider` + `DialogProvider` | Active `useToast` / `useDialog` |

Sans providers, les composants UI “statiques” (Button, Input, Card…) fonctionnent déjà. Dialog confirm et toasts nécessitent les providers.
