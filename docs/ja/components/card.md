# Card

関連コンテンツのためのサーフェス。構造にはスロットを使い、カードがインタラクティブなときは `href` または `selectable` を使います。

## 基本

```vue
<script setup lang="ts">
import { Card } from 'pomikit-ui'
</script>

<template>
  <Card>
    <template #title>Billing</template>
    <template #description>Manage plan and invoices.</template>
    Body content goes in the default slot.
  </Card>
</template>
```

`titleAs` はタイトル要素を制御します（`h2` \| `h3` \| `h4` \| `div`、デフォルト `h3`）。

## ナビ

```vue
<template>
  <Card href="/projects/42">
    <template #title>Aurora</template>
    <template #description>Last edited today</template>
  </Card>
</template>
```

## 選択可能

ピッカーグリッド向け。`selected` をバインドし、更新を待受けます。

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Card } from 'pomikit-ui'

const selected = ref(false)
</script>

<template>
  <Card
    selectable
    v-model:selected="selected"
    @select="selected = $event"
  >
    <template #title>Starter</template>
    <template #description>$12 / month</template>
  </Card>
</template>
```

## ヒント

- カードごとのスタイルよりキットのサーフェスを優先。
- `variant` と `size` は高度な逃げ道であり、はじめにの題材ではありません。
