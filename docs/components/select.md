# Select

Single-value select from an `options` list. Use `pending` while options load.

## Basic

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

## Option shape

```ts
type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}
```

`size` is an advanced escape hatch. Prefer wrapping with Field for labels and errors.
