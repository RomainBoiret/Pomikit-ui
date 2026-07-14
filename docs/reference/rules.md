# Rules (validation)

Helpers for [Input](/components/input) `rules`. Each factory returns an `InputRule`.

## API

```ts
import { rules, runRules } from 'pomikit-ui'
import type { InputRule } from 'pomikit-ui'

type InputRule = (value: string) => true | string | null | undefined | void
```

| Helper | Behavior |
| --- | --- |
| `rules.required(message?)` | Non-empty after trim |
| `rules.email(message?)` | Empty or valid email |
| `rules.min(length, message?)` | Minimum length |
| `rules.max(length, message?)` | Maximum length |
| `runRules(value, list)` | First failing message, or `undefined` |

## Example

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

Custom rules are plain functions returning `true` (or nullish) on success, or a string message on failure.
