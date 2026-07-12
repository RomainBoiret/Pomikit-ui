# Rules (validation)

Helpers pour la prop `rules` de [`Input`](/components/input).

## Type

```ts
type InputRule = (value: string) => true | string | null | undefined | void
// true / null / undefined / void = OK
// string = message d'erreur
```

## Helpers

```ts
import { rules, runRules } from 'pomikit-ui'

rules.required(message?)
rules.email(message?)
rules.min(length, message?)
rules.max(length, message?)
```

| Helper | Message défaut |
| --- | --- |
| `required` | `This field is required` |
| `email` | `Enter a valid email` |
| `min(n)` | `Must be at least n characters` |
| `max(n)` | `Must be at most n characters` |

`email` laisse passer les valeurs vides — combine avec `required` pour un email obligatoire.

## Exemple

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
      :rules="[rules.email()]"
    />
  </Field>
</template>
```

## `runRules`

```ts
const message = runRules(value, [rules.required(), rules.min(8)])
// string | undefined
```

Exécute les règles dans l’ordre ; retourne le premier message d’erreur.
