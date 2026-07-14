# useFieldContext

Injection optionnelle pour les contrôles personnalisés à l'intérieur de [Field](/components/field). Les intégrés (Input, Select, Checkbox, Switch) consomment déjà ce contexte.

## Usage

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

## Forme du contexte

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

Le `error` contrôlé de Field prime sur `setIntentError`. Utilisez les erreurs d'intention pour la validation que le contrôle découvre lui-même (par exemple les `rules` d'Input).
