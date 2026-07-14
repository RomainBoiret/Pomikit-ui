# Diseño por intención

Pomikit prefiere props que describen **qué significa la UI**, no cómo debe verse. Los componentes infieren loading, confirmación, vacío y validación a partir de esa intención.

## Button

Los clicks async impulsan feedback de busy (y de success/error opcional) automáticamente:

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

- Devolver un thenable en `@click` → fase busy
- `confirm` → commit con segundo click
- `href` → botón de navegación (se renderiza como enlace)

## Field + Input

`required` y `rules` expresan intención de validación. Field gestiona el layout de label / helper / error:

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

`options` y `pending` cubren el estado de datos sin props de spinner aparte:

```vue
<Select
  v-model="role"
  :options="roles"
  :pending="loadingRoles"
  placeholder="Pick a role"
/>
```

## Collection

`pending`, items vacíos y `error` eligen surfaces de skeleton / empty / error:

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

Los helpers de outcome codifican el tone desde la intención:

```ts
const toast = useToast()
toast.success('Saved')
toast.error('Could not save', 'Check your connection')
```

## Qué no liderar

Evita enseñar `variant`, `tone`, `size` o radius como la API primaria. Esos siguen siendo escape hatches para excepciones raras; el Design Kit posee la estética.
