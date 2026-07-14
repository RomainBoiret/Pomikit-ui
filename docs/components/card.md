# Card

Surface for related content. Use slots for structure; use `href` or `selectable` when the card is interactive.

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

`titleAs` controls the title element (`h2` | `h3` | `h4` | `div`, default `h3`).

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

For picker grids. Bind `selected` and listen for updates.

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

## Tips

- Prefer kit surfaces over per-card styling.
- `variant` and `size` are advanced escape hatches, not Getting Started material.
