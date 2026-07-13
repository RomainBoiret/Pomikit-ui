# Select

Liste d’options — API courte.

## Import

```ts
import { Select, Field } from 'pomikit-ui'
```

## Chemin recommandé

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Select } from 'pomikit-ui'

const country = ref('fr')
const countries = [
  { label: 'France', value: 'fr' },
  { label: 'Canada', value: 'ca' },
]
</script>

<template>
  <Select v-model="country" :options="countries" />

  <Field label="Country">
    <Select v-model="country" :options="countries" placeholder="Choose…" />
  </Field>

  <Select pending placeholder="Loading…" />
</template>
```

Pas de variantes visuelles — le Design Kit porte le look.

## Props d’intention

| Prop | Type | Défaut |
| --- | --- | --- |
| `options` | `SelectOption[]` | `[]` |
| `pending` | `boolean` | `false` |
| `placeholder` | `string` | `'Select…'` |
| `disabled` / `required` | `boolean` | `false` |
| `emptyText` | `string` | `'No options'` |

## Escape hatches

| Prop | Notes |
| --- | --- |
| `size` | Densité rare — préférer le kit |

## Model

`v-model: string`

## Slots

`default` — items custom (remplace `options`)
