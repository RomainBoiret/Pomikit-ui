# Input

선택적 검증 규칙이 있는 텍스트 입력. label, helper, error 레이아웃을 위해 [Field](/components/field)와 짝짓는 것이 좋습니다.

## Field와 함께

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Input, rules } from 'pomikit-ui'

const email = ref('')
</script>

<template>
  <Field label="Email" required>
    <Input
      v-model="email"
      type="email"
      autocomplete="email"
      :rules="[rules.required(), rules.email()]"
    />
  </Field>
</template>
```

규칙은 blur(및 관련 commit 경로)에서 실행됩니다. [Rules](/reference/rules)를 보세요.

## 단독

Field 없이도 `label` / `hint` / `error`는 동작하지만, Field 조합을 권장합니다.

```vue
<Input v-model="q" type="search" placeholder="Search…" clearable :commit-delay="200" />
```

## 타입

`type`: `text` \| `email` \| `password` \| `search` \| `tel` \| `url` \| `number`

## 의도 props

| Prop | 참고 |
| --- | --- |
| `rules` | `InputRule[]` 검증 |
| `required` | 필수 의도 |
| `clearable` | 지우기 여지 |
| `commitDelay` | `update:committed` 디바운스 ms (검색에 유용) |
| `disabled` / `readonly` | 인터랙션 상태 |

`size`는 고급 탈출구입니다. Design Kit 밀도를 우선하세요.
