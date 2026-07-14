# 의도 설계

Pomikit는 모습이 아니라 **UI가 의미하는 것**을 설명하는 props를 선호합니다. 컴포넌트는 그 의도에서 로딩, 확인, 빈 상태, 검증을 추론합니다.

## Button

비동기 클릭은 busy(및 선택적 성공/오류) 피드백을 자동으로 구동합니다:

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'

async function save() {
  await api.save()
}
</script>

<template>
  <Button :confirm="true" @click="save">Delete</Button>
  <Button href="/docs">Open docs</Button>
</template>
```

- `@click`에서 thenable 반환 → busy 단계
- `confirm` → 두 번째 클릭으로 확정
- `href` → 탐색 버튼(링크로 렌더)

## Field + Input

`required`와 `rules`가 검증 의도를 표현합니다. Field가 label / helper / error 레이아웃을 담당합니다:

```vue
<script setup lang="ts">
import { Field, Input, rules } from 'pomikit-ui'
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <Field label="Email" required helper="Work address preferred">
    <Input v-model="email" type="email" :rules="[rules.required(), rules.email()]" />
  </Field>
</template>
```

## Select

`options`와 `pending`이 데이터 상태를 다루므로 별도의 spinner props가 필요 없습니다:

```vue
<Select
  v-model="role"
  :options="roles"
  :pending="loadingRoles"
  placeholder="Pick a role"
/>
```

## Collection

`pending`, 빈 items, `error`가 스켈레톤 / 빈 상태 / 오류 서피스를 선택합니다:

```vue
<Collection
  :items="rows"
  :pending="loading"
  :error="loadError"
  @retry="reload"
>
  <template #item="{ item }">
    {{ item.name }}
  </template>
</Collection>
```

## Toast

결과 헬퍼는 의도에서 tone을 인코딩합니다:

```ts
const toast = useToast()
toast.success('Saved')
toast.error('Could not save', 'Check your connection')
```

## 먼저 가르치지 말 것

`variant`, `tone`, `size`, radius를 주 API로 가르치지 마세요. 드문 예외를 위한 탈출구로 남습니다. 미학은 Design Kit이 소유합니다.
