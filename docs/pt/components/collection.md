# Collection

Lista ou grid que troca surfaces conforme a **intenção**: carga pending, dados vazios ou error. Você fornece items e estado; Collection escolhe UI de skeleton / empty / error.

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

## Matriz de intenção

| State | Behavior |
| --- | --- |
| `pending` + sem items | Placeholders Skeleton (`skeletonCount`) |
| `pending` + items existentes | Manter lista; intenção de refresh |
| `items` vazios | EmptyState (`emptyTitle` / `emptyDescription`) |
| `error` definido | ErrorState + emit `retry` |

## Layout

- `layout`: `'stack'` \| `'grid'`
- `columns`: número de colunas do grid (default `3`)

Prefira essas intenções de dados a conectar Skeleton / EmptyState / ErrorState à mão, salvo quando precisar de uma composição custom fora de listas.
