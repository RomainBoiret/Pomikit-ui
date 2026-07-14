# Collection

Liste ou grille qui bascule de surface selon l'**intention** : chargement pending, données vides ou erreur. Vous fournissez les items et l'état ; Collection choisit l'UI skeleton / empty / error.

## Basique

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

## Matrice d'intention

| État | Comportement |
| --- | --- |
| `pending` + aucun item | Placeholders Skeleton (`skeletonCount`) |
| `pending` + items existants | Conserve la liste ; intention de rafraîchissement |
| `items` vides | EmptyState (`emptyTitle` / `emptyDescription`) |
| `error` défini | ErrorState + émission `retry` |

## Layout

- `layout` : `'stack'` \| `'grid'`
- `columns` : nombre de colonnes de grille (défaut `3`)

Préférez ces intentions de données à brancher Skeleton / EmptyState / ErrorState à la main, sauf composition personnalisée hors listes.
