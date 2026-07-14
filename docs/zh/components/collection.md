# Collection

根据**意图**在加载中、空数据或错误之间切换表面的列表或网格。你提供 items 与状态；Collection 选择骨架 / 空态 / 错误 UI。

## 基础

```vue
<script setup lang="ts">
import { Collection } from 'pomikit-ui'

type Row = { id: string; name: string }

defineProps<{
  items: Row[]
  pending: boolean
  error: unknown
}>()
</script>

<template>
  <Collection
    :items="items"
    :pending="pending"
    :error="error"
    layout="stack"
    empty-title="No projects yet"
    empty-description="Create your first project to get started."
    @retry="$emit('retry')"
  >
    <template #item="{ item }">
      {{ item.name }}
    </template>
  </Collection>
</template>
```

## 意图矩阵

| 状态 | 行为 |
| --- | --- |
| `pending` + 无 items | 骨架占位（`skeletonCount`） |
| `pending` + 已有 items | 保留列表；刷新意图 |
| 空的 `items` | EmptyState（`emptyTitle` / `emptyDescription`） |
| 设置了 `error` | ErrorState + 发出 `retry` |

## 布局

- `layout`：`'stack'` \| `'grid'`
- `columns`：网格列数（默认 `3`）

优先使用这些数据意图，而不是手工接线 Skeleton / EmptyState / ErrorState，除非你需要列表之外的自定义组合。
