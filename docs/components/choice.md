# Checkbox · Switch

```ts
import { Checkbox, Switch } from 'pomikit-ui'
```

## Exemples

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, Switch } from 'pomikit-ui'

const accept = ref(false)
const dark = ref(true)
</script>

<template>
  <Checkbox v-model="accept" label="Accept terms" />
  <Switch v-model="dark" label="Dark mode" />
</template>
```

Field-aware : place-les dans un `Field` pour partager label / erreur / IDs.

## Checkbox

| Prop | Type | Défaut |
| --- | --- | --- |
| `modelValue` | `boolean \| 'indeterminate'` | — |
| `label` | `string` | — |
| `disabled` | `boolean` | `false` |

## Switch

| Prop | Type | Défaut |
| --- | --- | --- |
| `modelValue` | `boolean` | — |
| `label` | `string` | — |
| `disabled` | `boolean` | `false` |
