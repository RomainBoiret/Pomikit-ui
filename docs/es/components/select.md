# Select

Select de un solo valor a partir de una lista `options`. Usa `pending` mientras cargan las options.

## Básico

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

## Forma de option

```ts
type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}
```

`size` es un escape hatch avanzado. Prefiere envolver con Field para labels y errors.
