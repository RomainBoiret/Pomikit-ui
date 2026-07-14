# Root とサービス

Dialog と toast にはサービスホストが必要です。**Pomikit プラグイン** または **`<PomikitRoot>`** を優先してください。単体の `DialogProvider` / `ToastProvider` は非推奨です。

## Pomikit プラグイン（推奨）

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

デフォルトでプラグインは：

1. テーマトークンを適用（`applyTheme` / `applyThemeOptions`）
2. dialog + toast オーバーレイをマウントし、`useDialog()` と `useToast()` をアプリ全体で使えるようにする

自分でオーバーレイをマウントする場合は無効化できます：

```ts
app.use(Pomikit, {
  theme: { design: 'glass' },
  overlays: false,
})
```

## PomikitRoot

オーバーレイを Vue ツリー内に置きたいとき（Nuxt レイアウト、スコープ付きルート、SSR 向きの配置）に使います：

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

Props：`toastDuration`、`toastLabel`。`overlays: false` のプラグインと組み合わせるか、ここでオーバーレイをマウントして共有 stores に依存します。

## Composables

```ts
import { useDialog, useToast } from 'pomikit-ui'

const dialog = useDialog()
const toast = useToast()

await dialog.confirm({ title: 'Delete project?' })
toast.success('Deleted')
```

## レガシー providers

`DialogProvider` と `ToastProvider` はエクスポートされたままですが **非推奨** です。テーマとサービスを一貫させるため、`<PomikitRoot>` または Pomikit プラグインを優先してください。
