# Field

Layout-Wrapper für Form Controls: Label, Helper und eine reservierte Error-Row (kein Layout-Sprung bei Validation). Stellt Context für [Input](/components/input), [Select](/components/select), Checkbox und Switch bereit.

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

## Controlled Error

Ein Field-`error` gewinnt gegenüber Child-Intent-Validation:

```vue
<Field label="Username" :error="serverError">
  <Input v-model="username" />
</Field>
```

## Props

| Prop | Notes |
| --- | --- |
| `label` | Sichtbares Label (Input kann es floaten) |
| `helper` | Hinweis ohne Error |
| `error` | Controlled Message |
| `required` | Markiert das Control als required |
| `id` | Optionale Control-Id (sonst generiert) |

Siehe [useFieldContext](/composables/use-field) für Custom Controls, die an Field teilnehmen.
