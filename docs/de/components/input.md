# Input

Texteingabe mit optionalen Validation Rules. Bevorzuge die Kombination mit [Field](/components/field) für Label-, Helper- und Error-Layout.

## Mit Field

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

Rules laufen on blur (und verwandten Commit-Pfaden). Siehe [Rules](/reference/rules).

## Standalone

`label` / `hint` / `error` funktionieren auch ohne Field, aber Field ist die empfohlene Composition.

```vue
<Input v-model="q" type="search" placeholder="Search…" clearable :commit-delay="200" />
```

## Types

`type`: `text` | `email` | `password` | `search` | `tel` | `url` | `number`

## Intent Props

| Prop | Notes |
| --- | --- |
| `rules` | `InputRule[]` Validation |
| `required` | Required-Intent |
| `clearable` | Clear-Affordance |
| `commitDelay` | Debounce ms für `update:committed` (search-freundlich) |
| `disabled` / `readonly` | Interaction State |

`size` ist ein advanced Escape Hatch; bevorzuge Design-Kit-Density.
