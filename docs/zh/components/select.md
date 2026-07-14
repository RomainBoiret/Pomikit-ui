# Select

从 `options` 列表中选择单值。选项加载时使用 `pending`。

## 基础

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

## Option 形状

```ts
type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}
```

`size` 是高级逃生舱。标签与错误优先用 Field 包裹。
