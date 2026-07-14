# EmptyState · ErrorState

Feedback surfaces for “nothing here” and “something failed”. [Collection](/components/collection) uses them from pending / empty / error intent; use standalone when you compose your own layout.

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

`title` is required. Default slot is for actions or extra content.

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
| `description` | Optional explicit copy |
| `error` | `string` \| `Error` \| `unknown` when `description` is omitted |
| `retryLabel` | Retry button label |

Emit `retry` when the user asks to try again. Prefer Collection for list-shaped data so you do not re-implement the intent matrix.
