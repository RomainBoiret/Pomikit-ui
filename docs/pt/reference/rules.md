# Rules (validação)

Helpers para as `rules` de [Input](/components/input). Cada factory retorna um `InputRule`.

## API

```ts
import { rules, runRules } from 'pomikit-ui'
import type { InputRule } from 'pomikit-ui'

type InputRule = (value: string) => true | string | null | undefined | void
```

| Helper | Behavior |
| --- | --- |
| `rules.required(message?)` | Não vazio após trim |
| `rules.email(message?)` | Vazio ou email válido |
| `rules.min(length, message?)` | Comprimento mínimo |
| `rules.max(length, message?)` | Comprimento máximo |
| `runRules(value, list)` | Primeira mensagem que falha, ou `undefined` |

## Exemplo

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

Rules custom são funções simples que retornam `true` (ou nullish) em sucesso, ou uma mensagem string em falha.
