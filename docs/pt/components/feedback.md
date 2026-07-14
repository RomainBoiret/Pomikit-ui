# EmptyState · ErrorState

Surfaces de feedback para “nada aqui” e “algo falhou”. [Collection](/components/collection) as usa a partir da intenção pending / empty / error; use standalone quando compor seu próprio layout.

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

`title` é obrigatório. O slot default é para ações ou conteúdo extra.

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
| `title` | Default: `'Something went wrong'` |
| `description` | Texto explícito opcional |
| `error` | `string` \| `Error` \| `unknown` quando `description` é omitido |
| `retryLabel` | Label do botão retry |

Emite `retry` quando o usuário pede para tentar de novo. Prefira Collection para dados em forma de lista para não reimplementar a matriz de intenção.
