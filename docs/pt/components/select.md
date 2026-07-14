# Select

Select de valor único a partir de uma lista `options`. Use `pending` enquanto as options carregam.

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

## Formato de option

```ts
type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}
```

`size` é um escape hatch avançado. Prefira envolver com Field para labels e errors.
