# Card

Surface pour du contenu lié. Utilisez les slots pour la structure ; utilisez `href` ou `selectable` lorsque la carte est interactive.

## Basique

```vue
<script setup lang="ts">
import { Card } from 'pomikit-ui'
</script>

<template>
  <Card>
    <template #title>Billing</template>
    <template #description>Manage plan and invoices.</template>
    Body content goes in the default slot.
  </Card>
</template>
```

`titleAs` contrôle l'élément du titre (`h2` | `h3` | `h4` | `div`, défaut `h3`).

## Navigation

```vue
<template>
  <Card href="/projects/42">
    <template #title>Aurora</template>
    <template #description>Last edited today</template>
  </Card>
</template>
```

## Sélectionnable

Pour les grilles de sélection. Liez `selected` et écoutez les mises à jour.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Card } from 'pomikit-ui'

const selected = ref(false)
</script>

<template>
  <Card
    selectable
    v-model:selected="selected"
    @select="selected = $event"
  >
    <template #title>Starter</template>
    <template #description>$12 / month</template>
  </Card>
</template>
```

## Conseils

- Préférez les surfaces du kit au style par carte.
- `variant` et `size` sont des échappatoires avancées, pas du matériel Premiers pas.
