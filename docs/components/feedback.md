# EmptyState · ErrorState

Primitives de feedback utilisées par Collection (et utilisables seules).

## Import

```ts
import { EmptyState, ErrorState, Button } from 'pomikit-ui'
```

## EmptyState

```vue
<EmptyState title="No people" description="Invite your first teammate.">
  <template #action>
    <Button size="sm">Invite</Button>
  </template>
</EmptyState>
```

| Prop | Type | Défaut |
| --- | --- | --- |
| `title` | `string` | **requis** |
| `description` | `string` | — |

Slots : `icon`, `description`, `action` — `role="status"`

## ErrorState

```vue
<ErrorState
  title="Couldn't load"
  :error="err"
  @retry="reload"
/>
```

| Prop | Type | Défaut |
| --- | --- | --- |
| `title` | `string` | `'Something went wrong'` |
| `description` | `string` | — |
| `error` | `unknown` | — |
| `retryLabel` | `string` | `'Retry'` |

Emit : `retry`

Slots : `icon`, `description`, `action` — `role="alert"`

Description auto depuis `error` (`string` / `Error.message` / fallback).
Bouton Retry si listener `@retry` ou slot `action`.
