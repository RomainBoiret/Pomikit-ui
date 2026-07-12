# useFieldContext

Lit le contexte fourni par [`Field`](/components/field) depuis un contrôle custom.

## Usage

```ts
import { useFieldContext } from 'pomikit-ui'

const field = useFieldContext()
// field peut être undefined hors Field

field?.controlId
field?.required
field?.describedBy
field?.resolvedError
field?.setIntentError(message)
```

Utile si tu crées un contrôle maison compatible Field (comme Input / Select / Checkbox).

Les composants Pomikit (Input, Select, Checkbox, Switch) l’utilisent déjà en interne.
