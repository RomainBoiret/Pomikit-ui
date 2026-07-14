# Primeros pasos

Pomikit es una biblioteca de componentes Vue 3 pensada para defaults zero-config y APIs orientadas a la intención. Instálala, importa los estilos y empieza a componer.

## Instalación

```bash
npm install pomikit-ui
```

Peer dependency: Vue 3.

## Estilos

Importa la hoja de estilos una sola vez en el entry de tu app:

```ts
import 'pomikit-ui/styles.css'
```

## Uso zero-config

Los componentes funcionan sin configurar un tema. Los defaults usan el Design Kit `linear`.

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## Plugin + tema opcionales

Para los servicios toast/dialog y un Design Kit de marca, registra el plugin Pomikit:

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

El plugin aplica los tokens del tema y monta los overlays de dialog/toast. Consulta [Root y servicios](/guide/providers) si prefieres `<PomikitRoot>`.

## Siguientes pasos

- [Filosofía](/guide/philosophy): cómo Pomikit elige sus APIs
- [Design Kits](/guide/theming): tematiza toda la app de una vez
- [Diseño por intención](/guide/intent): deja que los componentes infieran el comportamiento
