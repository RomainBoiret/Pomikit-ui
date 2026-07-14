# Checkbox · Switch

이진 선택. 공유 label, helper, error 행이 필요하면 [Field](/components/field)로 감싸세요. Radio는 공개 API에 포함되지 않습니다.

## Checkbox

`v-model`로 `boolean` 또는 `'indeterminate'`를 지원합니다.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, Field } from 'pomikit-ui'

const accepted = ref(false)
</script>

<template>
  <Field label="Terms" required>
    <Checkbox v-model="accepted" label="I agree to the terms" />
  </Field>
</template>
```

| Prop | 참고 |
| --- | --- |
| `label` | Field를 쓰지 않을 때의 인라인 라벨 |
| `disabled` / `required` | 표준 폼 의도 |
| `value` | 체크 시 제출 값 (기본 `'on'`) |

## Switch

설정 스타일 의도를 위한 불리언 토글입니다.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'pomikit-ui'

const notifications = ref(true)
</script>

<template>
  <Switch v-model="notifications" label="Email notifications" />
</template>
```

`size`는 고급 밀도 탈출구입니다. Design Kit을 우선하세요.
