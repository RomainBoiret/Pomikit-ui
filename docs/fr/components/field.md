# Field

Enveloppe de layout pour les contrôles de formulaire : label, helper et une ligne d'erreur réservée (pas de saut de layout quand la validation apparaît). Fournit le contexte à [Input](/components/input), [Select](/components/select), Checkbox et Switch.

## Basique

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Input } from 'pomikit-ui'

const name = ref('')
</script>

<template>
  <Field label="Name" helper="As shown on invoices" required>
    <Input v-model="name" />
  </Field>
</template>
```

## Erreur contrôlée

Un `error` de Field prime sur la validation d'intention de l'enfant :

```vue
<Field label="Username" :error="serverError">
  <Input v-model="username" />
</Field>
```

## Props

| Prop | Notes |
| --- | --- |
| `label` | Label visible (Input peut le faire flotter) |
| `helper` | Indication quand il n'y a pas d'erreur |
| `error` | Message contrôlé |
| `required` | Marque le contrôle comme requis |
| `id` | Id de contrôle optionnel (sinon généré) |

Voir [useFieldContext](/composables/use-field) pour des contrôles personnalisés qui participent à Field.
