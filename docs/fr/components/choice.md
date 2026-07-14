# Checkbox · Switch

Choix binaires. Enveloppez avec [Field](/components/field) lorsque vous avez besoin d'un label, d'un helper ou d'une ligne d'erreur partagés. Radio ne fait pas partie de l'API publique.

## Checkbox

Prend en charge `boolean` ou `'indeterminate'` via `v-model`.

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
| `label` | Label inline lorsque Field n'est pas utilisé |
| `disabled` / `required` | Intention de formulaire standard |
| `value` | Valeur soumise une fois coché (défaut `'on'`) |

## Switch

Basculer booléen pour une intention de type réglages.

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

`size` est une échappatoire de densité avancée ; préférez le Design Kit.
