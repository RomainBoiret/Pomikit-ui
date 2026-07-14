# Select

Sélection à valeur unique depuis une liste `options`. Utilisez `pending` pendant le chargement des options.

## Basique

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Select } from 'pomikit-ui'

const role = ref('editor')

const options = [
  { label: 'Viewer', value: 'viewer' },
  { label: 'Editor', value: 'editor' },
  { label: 'Admin', value: 'admin', disabled: true },
]
</script>

<template>
  <Field label="Role" required>
    <Select v-model="role" :options="options" placeholder="Pick a role" />
  </Field>
</template>
```

## Pending

```vue
<Select
  v-model="country"
  :options="countries"
  :pending="loading"
  placeholder="Country"
  empty-text="No countries"
/>
```

## Forme d'option

```ts
type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}
```

`size` est une échappatoire avancée. Préférez envelopper avec Field pour les labels et erreurs.
