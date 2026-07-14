# Select

`options` 목록에서 단일 값을 선택합니다. 옵션을 불러오는 동안 `pending`을 쓰세요.

## 기본

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Select } from 'pomikit-ui'

const role = ref('editor')

const options = [
  { label: 'Viewer', value: 'viewer' },
  { label: 'Editor', value: 'editor' },
  { label: 'Admin', value: 'admin', disabled: true },
]
</script>

<template>
  <Field label="Role" required>
    <Select v-model="role" :options="options" placeholder="Pick a role" />
  </Field>
</template>
```

## Pending

```vue
<Select
  v-model="country"
  :options="countries"
  :pending="loading"
  placeholder="Country"
  empty-text="No countries"
/>
```

## Option 형태

```ts
type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}
```

`size`는 고급 탈출구입니다. 라벨과 오류는 Field로 감싸는 쪽을 우선하세요.
