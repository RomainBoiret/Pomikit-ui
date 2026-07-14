# Primeiros passos

Pomikit é uma biblioteca de componentes Vue 3 feita em torno de defaults zero-config e APIs orientadas à intenção. Instale, importe os estilos e comece a compor.

## Instalação

```bash
npm install pomikit-ui
# or
pnpm add pomikit-ui
# or
yarn add pomikit-ui
```

Peer dependency: Vue 3.

## Estilos

Importe a folha de estilos uma vez no entry da sua app:

```ts
import 'pomikit-ui/styles.css'
```

## Uso zero-config

Os componentes funcionam sem configuração de tema. Os defaults usam o Design Kit `linear`.

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## Plugin + tema opcionais

Para os serviços toast/dialog e um Design Kit de marca, registre o plugin Pomikit:

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

O plugin aplica os tokens do tema e monta os overlays de dialog/toast. Veja [Root e serviços](/guide/providers) se preferir `<PomikitRoot>`.

## Próximos passos

- [Filosofia](/guide/philosophy): como o Pomikit escolhe as APIs
- [Design Kits](/guide/theming): tematize a app inteira de uma vez
- [Design por intenção](/guide/intent): deixe os componentes inferirem o comportamento
