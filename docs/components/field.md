# Field

Layout wrapper for form controls: label, helper, and a reserved error row (no layout jump when validation appears). Provides context to [Input](/components/input), [Select](/components/select), Checkbox, and Switch.

## Basic

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Input } from 'pomikit-ui'

const name = ref('')
</script>

<template>
  <Field label="Name" helper="As shown on invoices" required>
    <Input v-model="name" />
  </Field>
</template>
```

## Controlled error

A Field `error` wins over child intent validation:

```vue
<Field label="Username" :error="serverError">
  <Input v-model="username" />
</Field>
```

## Props

| Prop | Notes |
| --- | --- |
| `label` | Visible label (Input may float it) |
| `helper` | Hint when there is no error |
| `error` | Controlled message |
| `required` | Marks the control as required |
| `id` | Optional control id (otherwise generated) |

See [useFieldContext](/composables/use-field) for custom controls that participate in Field.
