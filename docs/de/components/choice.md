# Checkbox · Switch

Binäre Choices. Mit [Field](/components/field) wrappen, wenn gemeinsames Label, Helper oder Error-Row nötig sind. Radio ist nicht Teil der öffentlichen API.

## Checkbox

Unterstützt `boolean` oder `'indeterminate'` via `v-model`.

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
| `label` | Inline-Label ohne Field |
| `disabled` / `required` | Standard-Form-Intent |
| `value` | Submitted value wenn checked (Default `'on'`) |

## Switch

Boolean-Toggle für Settings-Intent.

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

`size` ist ein advanced Density Escape Hatch; bevorzuge das Design Kit.
