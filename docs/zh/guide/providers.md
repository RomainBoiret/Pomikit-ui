# Root 与服务

Dialog 和 toast 需要服务宿主。优先使用 **Pomikit 插件** 或 **`<PomikitRoot>`**。独立的 `DialogProvider` / `ToastProvider` 已弃用。

## Pomikit 插件（推荐）

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

默认情况下插件会：

1. 应用主题 tokens（`applyTheme` / `applyThemeOptions`）
2. 挂载 dialog + toast 叠加层，使 `useDialog()` 与 `useToast()` 在全应用可用

当你自行挂载叠加层时，可禁用它们：

```ts
app.use(Pomikit, {
  theme: { design: 'glass' },
  overlays: false,
})
```

## PomikitRoot

适合希望叠加层位于 Vue 树中时（Nuxt 布局、作用域根、SSR 友好放置）：

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

Props：`toastDuration`、`toastLabel`。可与使用 `overlays: false` 的插件配对，或在此处挂载叠加层时依赖共享 stores。

## Composables

```ts
import { useDialog, useToast } from 'pomikit-ui'

const dialog = useDialog()
const toast = useToast()

await dialog.confirm({ title: 'Delete project?' })
toast.success('Deleted')
```

## 旧版 providers

`DialogProvider` 与 `ToastProvider` 仍会导出，但已**弃用**。优先使用 `<PomikitRoot>` 或 Pomikit 插件，以保持主题与服务一致。
