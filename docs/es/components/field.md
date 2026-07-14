# Field

Wrapper de layout para controles de formulario: label, helper y una fila de error reservada (sin salto de layout cuando aparece la validación). Proporciona contexto a [Input](/components/input), [Select](/components/select), Checkbox y Switch.

## Básico

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

## Error controlado

Un `error` de Field gana sobre la validación por intención del hijo:

```vue
<Field label="Username" :error="serverError">
  <Input v-model="username" />
</Field>
```

## Props

| Prop | Notes |
| --- | --- |
| `label` | Label visible (Input puede hacerlo flotar) |
| `helper` | Pista cuando no hay error |
| `error` | Mensaje controlado |
| `required` | Marca el control como required |
| `id` | Id opcional del control (si no, se genera) |

Consulta [useFieldContext](/composables/use-field) para controles personalizados que participen en Field.
