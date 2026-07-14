# Field

Wrapper de layout para controles de formulário: label, helper e uma linha de erro reservada (sem salto de layout quando a validação aparece). Fornece contexto a [Input](/components/input), [Select](/components/select), Checkbox e Switch.

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

Um `error` de Field prevalece sobre a validação por intenção do filho:

```vue
<Field label="Username" :error="serverError">
  <Input v-model="username" />
</Field>
```

## Props

| Prop | Notes |
| --- | --- |
| `label` | Label visível (Input pode fazê-lo flutuar) |
| `helper` | Dica quando não há erro |
| `error` | Mensagem controlada |
| `required` | Marca o controle como required |
| `id` | Id opcional do controle (senão, é gerado) |

Veja [useFieldContext](/composables/use-field) para controles personalizados que participem do Field.
