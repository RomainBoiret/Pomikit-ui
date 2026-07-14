# Select

`options` リストから単一値を選びます。オプション読み込み中は `pending` を使います。

## 基本

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

## Option の形

```ts
type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}
```

`size` は高度な逃げ道です。ラベルとエラーは Field で包むのを優先してください。
