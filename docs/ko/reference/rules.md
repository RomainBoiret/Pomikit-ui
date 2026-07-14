# Rules (검증)

[Input](/components/input) `rules`용 헬퍼. 각 팩토리는 `InputRule`을 반환합니다.

## API

```ts
import { rules, runRules } from 'pomikit-ui'
import type { InputRule } from 'pomikit-ui'

type InputRule = (value: string) => true | string | null | undefined | void
```

| Helper | 동작 |
| --- | --- |
| `rules.required(message?)` | trim 후 비어 있지 않음 |
| `rules.email(message?)` | 비어 있거나 유효한 이메일 |
| `rules.min(length, message?)` | 최소 길이 |
| `rules.max(length, message?)` | 최대 길이 |
| `runRules(value, list)` | 첫 실패 메시지, 또는 `undefined` |

## 예제

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Input, rules } from 'pomikit-ui'

const password = ref('')
</script>

<template>
  <Field label="Password" required>
    <Input
      v-model="password"
      type="password"
      :rules="[
        rules.required(),
        rules.min(8, 'Use at least 8 characters'),
      ]"
    />
  </Field>
</template>
```

커스텀 규칙은 일반 함수입니다. 성공 시 `true`(또는 nullish), 실패 시 문자열 메시지를 반환합니다.
