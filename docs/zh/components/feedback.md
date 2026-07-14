# EmptyState · ErrorState

对应「这里什么都没有」与「出了问题」的反馈表面。[Collection](/components/collection) 会根据 pending / empty / error 意图使用它们；自行组合布局时也可单独使用。

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

`title` 必填。默认插槽用于操作或额外内容。

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

| Prop | 说明 |
| --- | --- |
| `title` | 默认：`'Something went wrong'` |
| `description` | 可选的显式文案 |
| `error` | 省略 `description` 时的 `string` \| `Error` \| `unknown` |
| `retryLabel` | 重试按钮标签 |

用户请求重试时发出 `retry`。列表形数据优先用 Collection，以免自己重做意图矩阵。
