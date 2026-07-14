# EmptyState · ErrorState

「ここには何もない」「何か失敗した」ためのフィードバック面。[Collection](/components/collection) は pending / empty / error 意図からこれらを使います；独自レイアウトでは単独でも使えます。

## EmptyState

```vue
<script setup lang="ts">
import { EmptyState, Button } from 'pomikit-ui'
</script>

<template>
  <EmptyState
    title="No messages"
    description="When someone writes to you, it will show up here."
  >
    <Button href="/compose">Compose</Button>
  </EmptyState>
</template>
```

`title` は必須。デフォルトスロットはアクションや追加コンテンツ用です。

## ErrorState

```vue
<script setup lang="ts">
import { ErrorState } from 'pomikit-ui'

function reload() {
  /* refetch */
}
</script>

<template>
  <ErrorState
    title="Could not load inbox"
    :error="loadError"
    retry-label="Try again"
    @retry="reload"
  />
</template>
```

| Prop | メモ |
| --- | --- |
| `title` | デフォルト：`'Something went wrong'` |
| `description` | 任意の明示コピー |
| `error` | `description` 省略時の `string` \| `Error` \| `unknown` |
| `retryLabel` | 再試行ボタンのラベル |

ユーザーが再試行を求めたら `retry` を emit します。リスト形データでは意図マトリクスを再実装しないよう Collection を優先してください。
