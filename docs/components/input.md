# Input

Text entry with optional validation rules. Prefer pairing with [Field](/components/field) for label, helper, and error layout.

## With Field

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

Rules run on blur (and related commit paths). See [Rules](/reference/rules).

## Standalone

`label` / `hint` / `error` still work without Field, but Field is the recommended composition.

```vue
<Input v-model="q" type="search" placeholder="Search…" clearable :commit-delay="200" />
```

## Types

`type`: `text` | `email` | `password` | `search` | `tel` | `url` | `number`

## Intent props

| Prop | Notes |
| --- | --- |
| `rules` | `InputRule[]` validation |
| `required` | Required intent |
| `clearable` | Clear affordance |
| `commitDelay` | Debounce ms for `update:committed` (search-friendly) |
| `disabled` / `readonly` | Interaction state |

`size` is an advanced escape hatch; prefer Design Kit density.
