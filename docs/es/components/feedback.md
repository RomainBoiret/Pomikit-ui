# EmptyState · ErrorState

Surfaces de feedback para “nada aquí” y “algo falló”. [Collection](/components/collection) las usa desde la intención pending / empty / error; úsalas standalone cuando compongas tu propio layout.

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

`title` es requerido. El slot default es para acciones o contenido extra.

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
| `error` | `string` \| `Error` \| `unknown` cuando se omite `description` |
| `retryLabel` | Label del botón retry |

Emite `retry` cuando el usuario pide intentarlo de nuevo. Prefiere Collection para datos en forma de lista para no reimplementar la matriz de intención.
