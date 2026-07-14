# useFieldContext

[Field](/components/field) 内のカスタムコントロール向けの任意 injection。組み込み（Input、Select、Checkbox、Switch）はこのコンテキストをすでに消費しています。

## 使い方

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

## Context の形

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

制御された Field `error` は `setIntentError` より優先します。意図エラーは、コントロール自身が見つけたバリデーション（例：Input `rules`）に使います。
