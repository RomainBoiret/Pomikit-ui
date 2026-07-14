# useFieldContext

[Field](/components/field) 안 커스텀 컨트롤을 위한 선택적 injection. 내장(Input, Select, Checkbox, Switch)은 이미 이 컨텍스트를 소비합니다.

## 사용법

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

## Context 형태

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

제어된 Field `error`가 `setIntentError`보다 우선합니다. 의도 오류는 컨트롤이 스스로 발견한 검증(예: Input `rules`)에 쓰세요.
