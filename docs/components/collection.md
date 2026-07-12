# Collection

Listes avec intent loading / empty / error — sans machine à états manuelle.

## Import

```ts
import { Collection, Button } from 'pomikit-ui'
```

## Exemple

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Collection } from 'pomikit-ui'

const items = ref([{ id: 1, name: 'Ada' }])
const pending = ref(false)
const error = ref<unknown>(null)

async function reload() {
  pending.value = true
  error.value = null
  try {
    items.value = await api.list()
  } catch (e) {
    error.value = e
    items.value = []
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <Collection
    :items="items"
    :pending="pending"
    :error="error"
    layout="stack"
    empty-title="No people"
    @retry="reload"
  >
    <template #item="{ item }">
      <div>{{ item.name }}</div>
    </template>
  </Collection>
</template>
```

## Props

| Prop | Type | Défaut |
| --- | --- | --- |
| `items` | `T[] \| null` | `[]` |
| `pending` | `boolean` | `false` |
| `error` | `unknown` | — |
| `layout` | `'stack' \| 'grid'` | `'stack'` |
| `columns` | `number` | `3` |
| `emptyTitle` | `string` | `'Nothing here yet'` |
| `emptyDescription` | `string` | — |
| `errorTitle` | `string` | `` `Couldn't load this list` `` |
| `skeletonCount` | `number` | grid: `columns * 2`, stack: `4` |

## Emits

`retry`

## Slots

| Slot | Scope |
| --- | --- |
| `skeleton` | — |
| `error` | `{ error, retry }` |
| `empty` | — |
| `empty-action` | — |
| `item` | `{ item, index }` |

## Intent

| État | Affichage |
| --- | --- |
| `pending` + pas d’items | Skeleton (premier load) |
| `pending` + items | Liste + barre de refresh |
| `error` + pas d’items + pas pending | ErrorState |
| vide | EmptyState |

Par défaut en stack : lignes skeleton (avatar + 2 lignes). En grid : rects.
