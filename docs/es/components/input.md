# Input

Entrada de texto con rules de validación opcionales. Prefiere emparejarlo con [Field](/components/field) para el layout de label, helper y error.

## Con Field

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

Las rules se ejecutan en blur (y rutas de commit relacionadas). Consulta [Rules](/reference/rules).

## Independiente

`label` / `hint` / `error` siguen funcionando sin Field, pero Field es la composición recomendada.

```vue
<Input v-model="q" type="search" placeholder="Search…" clearable :commit-delay="200" />
```

## Types

`type`: `text` | `email` | `password` | `search` | `tel` | `url` | `number`

## Props de intención

| Prop | Notes |
| --- | --- |
| `rules` | Validación `InputRule[]` |
| `required` | Intención required |
| `clearable` | Affordance de limpiar |
| `commitDelay` | Debounce en ms para `update:committed` (amigable a search) |
| `disabled` / `readonly` | Estado de interacción |

`size` es un escape hatch avanzado; prefiere la density del Design Kit.
