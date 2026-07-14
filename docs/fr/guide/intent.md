# Conception par intention

Pomikit privilégie les props qui décrivent **ce que l'UI signifie**, pas son apparence. Les composants déduisent le chargement, la confirmation, le vide et la validation à partir de cette intention.

## Button

Les clics async déclenchent automatiquement un retour busy (et éventuellement succès/erreur) :

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'

async function save() {
  await api.save()
}
</script>

<template>
  <Button :confirm="true" @click="save">Delete</Button>
  <Button href="/docs">Open docs</Button>
</template>
```

- Retourner un thenable sur `@click` → phase busy
- `confirm` → validation au second clic
- `href` → bouton de navigation (rendu comme lien)

## Field + Input

`required` et `rules` expriment l'intention de validation. Field possède le layout label / helper / erreur :

```vue
<script setup lang="ts">
import { Field, Input, rules } from 'pomikit-ui'
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <Field label="Email" required helper="Work address preferred">
    <Input v-model="email" type="email" :rules="[rules.required(), rules.email()]" />
  </Field>
</template>
```

## Select

`options` et `pending` couvrent l'état des données sans props spinner séparées :

```vue
<Select
  v-model="role"
  :options="roles"
  :pending="loadingRoles"
  placeholder="Pick a role"
/>
```

## Collection

`pending`, items vides et `error` sélectionnent les surfaces skeleton / empty / error :

```vue
<Collection
  :items="rows"
  :pending="loading"
  :error="loadError"
  @retry="reload"
>
  <template #item="{ item }">
    {{ item.name }}
  </template>
</Collection>
```

## Toast

Les helpers de résultat encodent le tone à partir de l'intention :

```ts
const toast = useToast()
toast.success('Saved')
toast.error('Could not save', 'Check your connection')
```

## Ce qu'il ne faut pas mettre en avant

Évitez d'enseigner `variant`, `tone`, `size` ou radius comme API principale. Ce sont des échappatoires pour des exceptions rares ; le Design Kit possède l'esthétique.
