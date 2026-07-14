# Rules (Validation)

Helper für [Input](/components/input)-`rules`. Jede Factory gibt ein `InputRule` zurück.

## API

```ts
import { rules, runRules } from 'pomikit-ui'
import type { InputRule } from 'pomikit-ui'

type InputRule = (value: string) => true | string | null | undefined | void
```

| Helper | Behavior |
| --- | --- |
| `rules.required(message?)` | Nicht leer nach Trim |
| `rules.email(message?)` | Leer oder gültige E-Mail |
| `rules.min(length, message?)` | Mindestlänge |
| `rules.max(length, message?)` | Maximallänge |
| `runRules(value, list)` | Erste fehlschlagende Message, oder `undefined` |

## Beispiel

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

Custom Rules sind einfache Funktionen, die bei Erfolg `true` (oder nullish) zurückgeben, oder bei Fehlschlag eine String-Message.
