# Collection

Liste oder Grid, das Surfaces aus **Intent** wechselt: pending Load, leere Daten oder Error. Du lieferst Items und State; Collection wählt Skeleton- / Empty- / Error-UI.

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

## Intent-Matrix

| State | Behavior |
| --- | --- |
| `pending` + keine Items | Skeleton Placeholders (`skeletonCount`) |
| `pending` + vorhandene Items | Liste behalten; Refresh-Intent |
| leere `items` | EmptyState (`emptyTitle` / `emptyDescription`) |
| `error` gesetzt | ErrorState + `retry` Emit |

## Layout

- `layout`: `'stack'` \| `'grid'`
- `columns`: Grid-Spaltenanzahl (Default `3`)

Bevorzuge diese Daten-Intents statt Skeleton / EmptyState / ErrorState von Hand zu verdrahten, außer du brauchst eine Custom Composition außerhalb von Listen.
