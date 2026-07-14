# Rules (validación)

Helpers para las `rules` de [Input](/components/input). Cada factory devuelve un `InputRule`.

## API

```ts
import { rules, runRules } from 'pomikit-ui'
import type { InputRule } from 'pomikit-ui'

type InputRule = (value: string) => true | string | null | undefined | void
```

| Helper | Behavior |
| --- | --- |
| `rules.required(message?)` | No vacío tras trim |
| `rules.email(message?)` | Vacío o email válido |
| `rules.min(length, message?)` | Longitud mínima |
| `rules.max(length, message?)` | Longitud máxima |
| `runRules(value, list)` | Primer mensaje que falla, o `undefined` |

## Ejemplo

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Input, rules } from 'pomikit-ui'

const password = ref('')
</script>

<template>
  <Field label="Password" required>
    <Input
      v-model="password"
      type="password"
      :rules="[
        rules.required(),
        rules.min(8, 'Use at least 8 characters'),
      ]"
    />
  </Field>
</template>
```

Las rules custom son funciones planas que devuelven `true` (o nullish) en éxito, o un mensaje string en fallo.
