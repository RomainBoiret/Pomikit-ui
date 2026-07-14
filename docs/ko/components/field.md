# Field

폼 컨트롤용 레이아웃 래퍼: label, helper, 예약된 error 행(검증이 나타나도 레이아웃이 뛰지 않음). [Input](/components/input), [Select](/components/select), Checkbox, Switch에 컨텍스트를 제공합니다.

## 기본

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Input } from 'pomikit-ui'

const name = ref('')
</script>

<template>
  <Field label="Name" helper="As shown on invoices" required>
    <Input v-model="name" />
  </Field>
</template>
```

## 제어된 error

Field `error`가 자식 의도 검증보다 우선합니다:

```vue
<Field label="Username" :error="serverError">
  <Input v-model="username" />
</Field>
```

## Props

| Prop | 참고 |
| --- | --- |
| `label` | 보이는 라벨 (Input이 띄울 수 있음) |
| `helper` | 오류가 없을 때의 힌트 |
| `error` | 제어된 메시지 |
| `required` | 컨트롤을 필수로 표시 |
| `id` | 선택적 컨트롤 id (없으면 생성) |

Field에 참여하는 커스텀 컨트롤은 [useFieldContext](/composables/use-field)를 보세요.
