# Select

Einzelwert-Select aus einer `options`-Liste. `pending` nutzen, während Options laden.

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

## Option Shape

```ts
type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}
```

`size` ist ein advanced Escape Hatch. Bevorzuge Wrapping mit Field für Labels und Errors.
