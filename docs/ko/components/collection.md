# Collection

**의도**에 따라 pending 로드, 빈 데이터, 오류 서피스를 전환하는 리스트 또는 그리드. items와 상태를 넘기면 Collection이 스켈레톤 / 빈 상태 / 오류 UI를 고릅니다.

## 기본

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

## 의도 매트릭스

| 상태 | 동작 |
| --- | --- |
| `pending` + items 없음 | 스켈레톤 자리 표시 (`skeletonCount`) |
| `pending` + 기존 items | 목록 유지; 새로고침 의도 |
| 빈 `items` | EmptyState (`emptyTitle` / `emptyDescription`) |
| `error` 설정 | ErrorState + `retry` emit |

## 레이아웃

- `layout`: `'stack'` \| `'grid'`
- `columns`: 그리드 열 수 (기본 `3`)

리스트 밖 커스텀 구성이 필요한 경우가 아니면, Skeleton / EmptyState / ErrorState를 손으로 연결하기보다 이 데이터 의도를 우선하세요.
