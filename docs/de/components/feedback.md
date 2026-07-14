# EmptyState · ErrorState

Feedback-Surfaces für „nichts hier“ und „etwas ist fehlgeschlagen“. [Collection](/components/collection) nutzt sie aus pending- / empty- / error-Intent; standalone nutzen, wenn du eigenes Layout komponierst.

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

`title` ist erforderlich. Der Default-Slot ist für Actions oder Extra-Content.

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
| `description` | Optionale explizite Copy |
| `error` | `string` \| `Error` \| `unknown` wenn `description` fehlt |
| `retryLabel` | Retry-Button-Label |

`retry` emitieren, wenn der User erneut versuchen will. Collection für listenförmige Daten bevorzugen, damit du die Intent-Matrix nicht neu implementierst.
