# Skeleton

コンテンツ読み込み中のプレースホルダサフェース。Collection は初回の pending 読み込みで自動利用します；独自レイアウトでは Skeleton を直接使います。

## バリエーション

```vue
<script setup lang="ts">
import { Skeleton } from 'pomikit-ui'
</script>

<template>
  <Skeleton variant="text" :lines="3" />
  <Skeleton variant="rect" width="100%" height="120px" />
  <Skeleton variant="circle" width="40px" height="40px" />
</template>
```

| Prop | メモ |
| --- | --- |
| `variant` | `text` \| `rect` \| `circle` |
| `lines` | テキスト行数（デフォルト `1`） |
| `width` / `height` | CSS 長さ |
| `animated` | やさしいシマー（デフォルト `true`） |

モーションは Design Kit の motion トークンに従います。
