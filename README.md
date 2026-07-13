# Pomikit

**Less decisions. Better interfaces.**

Importer un composant → interface premium.  
Tu ne stylises pas bouton par bouton : tu choisis un **Design Kit** une fois.

```bash
pnpm add pomikit-ui
```

## Zero-config

```vue
<script setup>
import { Button } from 'pomikit-ui'
import 'pomikit-ui/styles.css'
</script>

<template>
  <Button>Save</Button>
</template>
```

Aucune prop de style. Déjà beau.

## Identité de l’app (une fois)

```ts
import { createApp } from 'vue'
import { Pomikit, createTheme } from 'pomikit-ui'
import 'pomikit-ui/styles.css'

createApp(App)
  .use(Pomikit, {
    theme: createTheme({
      design: 'linear', // glass | editorial | soft | playful
      accent: '#5B5FFF',
      mode: 'system',
    }),
  })
  .mount('#app')
```

## Intent, pas décoration

```vue
<Button @click="save">Save</Button>
<Button confirm="Delete project?" @click="remove">Delete</Button>
<Input v-model="email" placeholder="Email" required />
<Select v-model="country" :options="countries" />
```

```ts
toast.success('Profile saved')
await dialog.confirm({ title: 'Delete?', confirmLabel: 'Delete' })
```

Avant chaque nouvelle prop : *est-ce une décision de plus pour le développeur ?*  
Si oui → Design Kit, tokens, ou intent — pas une prop esthétique.

## Documentation

```bash
pnpm docs:dev
```

| Ressource | Commande |
| --- | --- |
| Docs + playground | `pnpm docs:dev` |
| Playground app | `pnpm dev` |
| Storybook | `pnpm storybook` |

## Catalog (v1)

Button · Field · Input · Select · Checkbox · Switch · Dropdown · Dialog · Toast · Collection · Card · Skeleton

## Develop

```bash
pnpm install
pnpm docs:dev
pnpm test
pnpm build
```

See [ROADMAP.md](./ROADMAP.md) and [CONTRIBUTING.md](./CONTRIBUTING.md).
