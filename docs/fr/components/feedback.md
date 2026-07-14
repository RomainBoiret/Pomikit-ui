# EmptyState · ErrorState

Surfaces de feedback pour « rien ici » et « quelque chose a échoué ». [Collection](/components/collection) les utilise à partir de l'intention pending / empty / error ; utilisez-les seuls lorsque vous composez votre propre layout.

## EmptyState

```vue
<script setup lang="ts">
import { EmptyState, Button } from 'pomikit-ui'
</script>

<template>
  <EmptyState
    title="No messages"
    description="When someone writes to you, it will show up here."
  >
    <Button href="/compose">Compose</Button>
  </EmptyState>
</template>
```

`title` est requis. Le slot par défaut sert aux actions ou au contenu supplémentaire.

## ErrorState

```vue
<script setup lang="ts">
import { ErrorState } from 'pomikit-ui'

function reload() {
  /* refetch */
}
</script>

<template>
  <ErrorState
    title="Could not load inbox"
    :error="loadError"
    retry-label="Try again"
    @retry="reload"
  />
</template>
```

| Prop | Notes |
| --- | --- |
| `title` | Défaut : `'Something went wrong'` |
| `description` | Texte explicite optionnel |
| `error` | `string` \| `Error` \| `unknown` lorsque `description` est omis |
| `retryLabel` | Libellé du bouton de nouvel essai |

Émet `retry` lorsque l'utilisateur demande un nouvel essai. Préférez Collection pour les données en forme de liste afin de ne pas réimplémenter la matrice d'intention.
