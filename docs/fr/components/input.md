# Input

Saisie de texte avec règles de validation optionnelles. Préférez l'associer à [Field](/components/field) pour le layout label, helper et erreur.

## Avec Field

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Input, rules } from 'pomikit-ui'

const email = ref('')
</script>

<template>
  <Field label="Email" required>
    <Input
      v-model="email"
      type="email"
      autocomplete="email"
      :rules="[rules.required(), rules.email()]"
    />
  </Field>
</template>
```

Les règles s'exécutent au blur (et chemins de commit associés). Voir [Rules](/reference/rules).

## Autonome

`label` / `hint` / `error` fonctionnent encore sans Field, mais Field est la composition recommandée.

```vue
<Input v-model="q" type="search" placeholder="Search…" clearable :commit-delay="200" />
```

## Types

`type` : `text` | `email` | `password` | `search` | `tel` | `url` | `number`

## Props d'intention

| Prop | Notes |
| --- | --- |
| `rules` | Validation `InputRule[]` |
| `required` | Intention required |
| `clearable` | Affordance d'effacement |
| `commitDelay` | Debounce ms pour `update:committed` (adapté à la recherche) |
| `disabled` / `readonly` | État d'interaction |

`size` est une échappatoire avancée ; préférez la densité du Design Kit.
