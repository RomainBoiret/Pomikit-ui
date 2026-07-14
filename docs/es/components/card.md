# Card

Surface para contenido relacionado. Usa slots para la estructura; usa `href` o `selectable` cuando la card es interactiva.

## Básico

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

`titleAs` controla el elemento del título (`h2` | `h3` | `h4` | `div`, default `h3`).

## Navegacional

```vue
<template>
  <Card href="/projects/42">
    <template #title>Aurora</template>
    <template #description>Last edited today</template>
  </Card>
</template>
```

## Seleccionable

Para grids de picker. Enlaza `selected` y escucha actualizaciones.

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

## Consejos

- Prefiere surfaces del kit frente a estilos por card.
- `variant` y `size` son escape hatches avanzados, no material de Getting Started.
