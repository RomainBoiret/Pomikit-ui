# useFieldContext

Injeção opcional para controles custom dentro de [Field](/components/field). Os built-ins (Input, Select, Checkbox, Switch) já consomem este contexto.

## Uso

```ts
import { useFieldContext } from 'pomikit-ui'

const field = useFieldContext()
// null when not wrapped in Field

if (field) {
  field.setIntentError(message)
  // field.controlId, labelId, describedBy, required, label, resolvedError
  // claimFloatingLabel / releaseFloatingLabel for floating labels
}
```

## Formato do contexto

```ts
type FieldContext = {
  controlId: ComputedRef<string>
  labelId: ComputedRef<string>
  describedBy: ComputedRef<string | undefined>
  required: ComputedRef<boolean>
  label: ComputedRef<string | undefined>
  resolvedError: ComputedRef<string | undefined>
  setIntentError: (message: string | undefined) => void
  claimFloatingLabel: () => void
  releaseFloatingLabel: () => void
  floatingLabelClaimed: Ref<boolean>
}
```

O `error` controlado de Field prevalece sobre `setIntentError`. Use erros de intenção para a validação que o controle descobre por si (por exemplo, `rules` de Input).
