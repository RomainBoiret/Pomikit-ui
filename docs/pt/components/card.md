# Card

Surface para conteúdo relacionado. Use slots para a estrutura; use `href` ou `selectable` quando o card for interativo.

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

`titleAs` controla o elemento do título (`h2` | `h3` | `h4` | `div`, default `h3`).

## Navegacional

```vue
<template>
  <Card href="/projects/42">
    <template #title>Aurora</template>
    <template #description>Last edited today</template>
  </Card>
</template>
```

## Selecionável

Para grids de picker. Vincule `selected` e escute atualizações.

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

## Dicas

- Prefira surfaces do kit em vez de estilo por card.
- `variant` e `size` são escape hatches avançados, não material de Getting Started.
