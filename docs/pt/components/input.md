# Input

Entrada de texto com rules de validação opcionais. Prefira combinar com [Field](/components/field) para o layout de label, helper e error.

## Com Field

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Input, rules } from 'pomikit-ui'

const email = ref('')
</script>

<template>
  <Field label="Email" required>
    <Input
      v-model="email"
      type="email"
      autocomplete="email"
      :rules="[rules.required(), rules.email()]"
    />
  </Field>
</template>
```

As rules rodam no blur (e caminhos de commit relacionados). Veja [Rules](/reference/rules).

## Standalone

`label` / `hint` / `error` ainda funcionam sem Field, mas Field é a composição recomendada.

```vue
<Input v-model="q" type="search" placeholder="Search…" clearable :commit-delay="200" />
```

## Types

`type`: `text` | `email` | `password` | `search` | `tel` | `url` | `number`

## Props de intenção

| Prop | Notes |
| --- | --- |
| `rules` | Validação `InputRule[]` |
| `required` | Intenção required |
| `clearable` | Affordance de limpar |
| `commitDelay` | Debounce em ms para `update:committed` (amigável a search) |
| `disabled` / `readonly` | Estado de interação |

`size` é um escape hatch avançado; prefira a density do Design Kit.
