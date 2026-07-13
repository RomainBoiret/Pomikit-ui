# Collection

Listes avec intent loading / empty / error.

## Import

```ts
import { Collection } from 'pomikit-ui'
```

## Chemin recommandé

```vue
<Collection
  :items="users"
  :pending="loading"
  :error="error"
  @retry="reload"
>
  <template #item="{ item }">
    <div>{{ item.name }}</div>
  </template>
</Collection>
```

## Props d’intention

| Prop | Type | Défaut |
| --- | --- | --- |
| `items` | `T[] \| null` | `[]` |
| `pending` | `boolean` | `false` |
| `error` | `unknown` | — |
| `emptyTitle` / `emptyDescription` | `string` | — |
| `errorTitle` | `string` | — |
| `skeletonCount` | `number` | auto |

## Escape hatches

| Prop | Notes |
| --- | --- |
| `layout` | `stack` \| `grid` |
| `columns` | colonnes grid |

## Intent

| État | Affichage |
| --- | --- |
| `pending` + pas d’items | Skeleton |
| `pending` + items | Liste + refresh |
| `error` + vide | ErrorState |
| vide | EmptyState |
