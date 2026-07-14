# Collection

Lista o grid que cambia de surfaces según la **intención**: carga pending, datos vacíos o error. Tú suministras items y estado; Collection elige UI de skeleton / empty / error.

## Básico

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

## Matriz de intención

| State | Behavior |
| --- | --- |
| `pending` + sin items | Placeholders Skeleton (`skeletonCount`) |
| `pending` + items existentes | Mantener lista; intención de refresh |
| `items` vacíos | EmptyState (`emptyTitle` / `emptyDescription`) |
| `error` definido | ErrorState + emit `retry` |

## Layout

- `layout`: `'stack'` \| `'grid'`
- `columns`: número de columnas del grid (default `3`)

Prefiere estas intenciones de datos antes de cablear Skeleton / EmptyState / ErrorState a mano, salvo que necesites una composición custom fuera de listas.
