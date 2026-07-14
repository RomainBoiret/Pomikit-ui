# useFieldContext

Optionale Injection für Custom Controls innerhalb von [Field](/components/field). Built-ins (Input, Select, Checkbox, Switch) konsumieren diesen Context bereits.

## Nutzung

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

## Context Shape

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

Controlled Field-`error` gewinnt gegenüber `setIntentError`. Intent Errors für Validation nutzen, die das Control selbst entdeckt (z. B. Input-`rules`).
