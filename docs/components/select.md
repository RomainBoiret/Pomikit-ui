# Select

Liste d’options — API courte : `options` + `pending`.

## Import

```ts
import { Select, Field } from 'pomikit-ui'
```

## Exemple

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Select } from 'pomikit-ui'

const value = ref('grace')
const options = [
  { label: 'Ada', value: 'ada' },
  { label: 'Grace', value: 'grace' },
  { label: 'Lin', value: 'lin', disabled: true },
]
</script>

<template>
  <Field label="Engineer">
    <Select v-model="value" :options="options" placeholder="Choose…" />
  </Field>

  <Select pending placeholder="Loading…" />
</template>
```

## Props

| Prop | Type | Défaut |
| --- | --- | --- |
| `options` | `SelectOption[]` | `[]` |
| `pending` | `boolean` | `false` |
| `placeholder` | `string` | `'Select…'` |
| `size` | `PomiSize` | `'md'` |
| `disabled` | `boolean` | `false` |
| `required` | `boolean` | `false` |
| `id` | `string` | — |
| `name` | `string` | — |
| `emptyText` | `string` | `'No options'` |

```ts
type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}
```

## Model

`v-model: string`

## Slots

`default` — items custom (remplace `options`)

## Intent

- `pending` désactive le trigger, placeholder « Loading… », status dans le menu
- Field-aware (`id`, `required`, `aria-invalid`, `describedBy`)
