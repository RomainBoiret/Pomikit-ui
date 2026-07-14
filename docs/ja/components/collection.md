# Collection

**意図**から、読み込み中・空データ・エラーの表面に切り替わるリストまたはグリッド。items と状態を渡し、Collection がスケルトン / 空 / エラー UI を選びます。

## 基本

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

## 意図マトリクス

| 状態 | 挙動 |
| --- | --- |
| `pending` + items なし | スケルトンプレースホルダ（`skeletonCount`） |
| `pending` + 既存 items | リストを維持；更新意図 |
| 空の `items` | EmptyState（`emptyTitle` / `emptyDescription`） |
| `error` 設定時 | ErrorState + `retry` emit |

## レイアウト

- `layout`：`'stack'` \| `'grid'`
- `columns`：グリッド列数（デフォルト `3`）

リスト以外の独自構成が必要な場合を除き、Skeleton / EmptyState / ErrorState を手配線するより、これらのデータ意図を優先してください。
