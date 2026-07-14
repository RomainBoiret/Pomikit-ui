# Rules (validation)

Helpers pour les `rules` d'[Input](/components/input). Chaque factory retourne une `InputRule`.

## API

```ts
import { rules, runRules } from 'pomikit-ui'
import type { InputRule } from 'pomikit-ui'

type InputRule = (value: string) => true | string | null | undefined | void
```

| Helper | Comportement |
| --- | --- |
| `rules.required(message?)` | Non vide après trim |
| `rules.email(message?)` | Vide ou e-mail valide |
| `rules.min(length, message?)` | Longueur minimale |
| `rules.max(length, message?)` | Longueur maximale |
| `runRules(value, list)` | Premier message en échec, ou `undefined` |

## Exemple

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

Les règles personnalisées sont de simples fonctions qui retournent `true` (ou nullish) en cas de succès, ou un message en chaîne en cas d'échec.
