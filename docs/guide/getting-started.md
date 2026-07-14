# Getting Started

Pomikit is a Vue 3 component library built around zero-config defaults and intent-driven APIs. Install it, import styles, and start composing.

## Install

```bash
npm install pomikit-ui
```

Peer dependency: Vue 3.

## Styles

Import the stylesheet once in your app entry:

```ts
import 'pomikit-ui/styles.css'
```

## Zero-config usage

Components work with no theme setup. Defaults use the `linear` Design Kit.

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## Optional plugin + theme

For toast/dialog services and a branded Design Kit, register the Pomikit plugin:

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

The plugin applies theme tokens and mounts dialog/toast overlays. See [Root & services](/guide/providers) if you prefer `<PomikitRoot>` instead.

## Next steps

- [Philosophy](/guide/philosophy): how Pomikit chooses APIs
- [Design Kits](/guide/theming): theme the whole app once
- [Intent design](/guide/intent): let components infer behavior
