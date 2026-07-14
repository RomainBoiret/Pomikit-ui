# Checkbox · Switch

Binary choices. Wrap with [Field](/components/field) when you need a shared label, helper, or error row. Radio is not part of the public API.

## Checkbox

Supports `boolean` or `'indeterminate'` via `v-model`.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, Field } from 'pomikit-ui'

const accepted = ref(false)
</script>

<template>
  <Field label="Terms" required>
    <Checkbox v-model="accepted" label="I agree to the terms" />
  </Field>
</template>
```

| Prop | Notes |
| --- | --- |
| `label` | Inline label when not using Field |
| `disabled` / `required` | Standard form intent |
| `value` | Submitted value when checked (default `'on'`) |

## Switch

Boolean toggle for settings-style intent.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'pomikit-ui'

const notifications = ref(true)
</script>

<template>
  <Switch v-model="notifications" label="Email notifications" />
</template>
```

`size` is an advanced density escape hatch; prefer the Design Kit.
