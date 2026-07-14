# Erste Schritte

Pomikit ist eine Vue-3-Komponentenbibliothek mit Zero-Config-Defaults und intent-basierten APIs. Installieren, Styles importieren, dann komponieren.

## Installation

```bash
npm install pomikit-ui
```

Peer dependency: Vue 3.

## Styles

Importiere das Stylesheet einmal im App-Entry:

```ts
import 'pomikit-ui/styles.css'
```

## Zero-Config-Nutzung

Komponenten funktionieren ohne Theme-Setup. Defaults nutzen das Design Kit `linear`.

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## Optionales Plugin + Theme

Für Toast/Dialog-Services und ein gebrandetes Design Kit registriere das Pomikit-Plugin:

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

Das Plugin wendet Theme-Tokens an und mountet Dialog/Toast-Overlays. Siehe [Root & Services](/guide/providers), wenn du `<PomikitRoot>` bevorzugst.

## Nächste Schritte

- [Philosophie](/guide/philosophy): wie Pomikit APIs wählt
- [Design Kits](/guide/theming): die ganze App einmal themen
- [Intent-Design](/guide/intent): Verhalten aus Intent ableiten lassen
