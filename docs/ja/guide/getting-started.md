# はじめに

Pomikit は、ゼロコンフィグのデフォルトと意図駆動 API を中心に設計された Vue 3 コンポーネントライブラリです。インストールし、スタイルをインポートして、組み立てを始めましょう。

## インストール

```bash
npm install pomikit-ui
# or
pnpm add pomikit-ui
# or
yarn add pomikit-ui
```

Peer dependency：Vue 3。

## スタイル

アプリのエントリでスタイルシートを一度だけインポートします：

```ts
import 'pomikit-ui/styles.css'
```

## ゼロコンフィグ利用

コンポーネントはテーマ設定なしで動作します。デフォルトは `linear` Design Kit です。

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## オプションのプラグイン + テーマ

toast/dialog サービスとブランド化された Design Kit が必要な場合は、Pomikit プラグインを登録します：

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

プラグインはテーマトークンを適用し、dialog/toast オーバーレイをマウントします。`<PomikitRoot>` を使う場合は [Root とサービス](/guide/providers) を参照してください。

## 次のステップ

- [理念](/guide/philosophy)：Pomikit が API をどう選ぶか
- [Design Kits](/guide/theming)：アプリ全体を一度でテーマ化
- [意図デザイン](/guide/intent)：コンポーネントに挙動を推論させる
