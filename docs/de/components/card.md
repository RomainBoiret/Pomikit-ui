# Card

Surface für verwandten Inhalt. Slots für Struktur nutzen; `href` oder `selectable`, wenn die Card interaktiv ist.

## Basic

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

`titleAs` steuert das Title-Element (`h2` | `h3` | `h4` | `div`, Default `h3`).

## Navigational

```vue
<template>
  <Card href="/projects/42">
    <template #title>Aurora</template>
    <template #description>Last edited today</template>
  </Card>
</template>
```

## Selectable

Für Picker-Grids. `selected` binden und auf Updates hören.

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

## Tipps

- Kit-Surfaces gegenüber Styling pro Card bevorzugen.
- `variant` und `size` sind advanced Escape Hatches, kein Getting-Started-Stoff.
