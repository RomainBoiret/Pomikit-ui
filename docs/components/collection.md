# Collection

List or grid that switches surfaces from **intent**: pending load, empty data, or error. You supply items and state; Collection picks skeleton / empty / error UI.

## Basic

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

## Intent matrix

| State | Behavior |
| --- | --- |
| `pending` + no items | Skeleton placeholders (`skeletonCount`) |
| `pending` + existing items | Keep list; refresh intent |
| empty `items` | EmptyState (`emptyTitle` / `emptyDescription`) |
| `error` set | ErrorState + `retry` emit |

## Layout

- `layout`: `'stack'` \| `'grid'`
- `columns`: grid column count (default `3`)

Prefer these data intents over wiring Skeleton / EmptyState / ErrorState by hand, unless you need a custom composition outside lists.
