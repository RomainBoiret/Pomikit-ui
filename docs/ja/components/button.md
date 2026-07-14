# Button

主要なアクション制御。意図から始めます：非同期クリック、確認、ナビゲーション。見た目は Design Kit が担います。

## 基本

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## 非同期クリック

クリックハンドラが thenable を返すと、Button はそれが解決するまで忙しいフェーズに入ります。`feedback`（デフォルト `true`）ありでは、短い成功またはエラーのフラッシュが続きます。

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'

async function onSave() {
  await api.save()
}
</script>

<template>
  <Button @click="onSave" busy-text="Saving…" success-text="Saved">Save</Button>
</template>
```

## 確認

確定前に 2 回目のクリックを求めます。`true` はデフォルトの待機ラベル；文字列でカスタムできます。

```vue
<template>
  <Button :confirm="true" @click="remove">Delete</Button>
  <Button confirm="Really delete?" @click="remove">Delete</Button>
</template>
```

## リンク意図

ナビ用アクションには `href`（および任意の `target` / `rel`）を渡します。

```vue
<template>
  <Button href="/settings">Settings</Button>
  <Button href="https://example.com" target="_blank" rel="noopener noreferrer">
    External
  </Button>
</template>
```

## よく使う props

| Prop | 意図 |
| --- | --- |
| `confirm` | 2 回クリックで確定 |
| `href` | リンクとして描画 |
| `loading` | 制御された忙しい状態（非同期意図と合流） |
| `disabled` | 非インタラクティブ |
| `busyText` / `successText` / `errorText` | 段階的なラベル開示 |
| `feedback` | 解決後フラッシュの切り替え（デフォルト `true`） |
| `block` | 全幅レイアウト |

## 高度な逃げ道

`variant`、`tone`、`size` はまれな例外用です。ブランドと密度は Design Kit を優先。これらを主要な Button API として扱わないでください。
