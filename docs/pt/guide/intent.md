# Design por intenção

O Pomikit prefere props que descrevem **o que a UI significa**, não como ela deve parecer. Os componentes inferem loading, confirmação, vazio e validação a partir dessa intenção.

## Button

Clicks async disparam feedback de busy (e success/error opcional) automaticamente:

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

- Retornar um thenable em `@click` → fase busy
- `confirm` → commit no segundo click
- `href` → botão de navegação (renderiza como link)

## Field + Input

`required` e `rules` expressam intenção de validação. Field cuida do layout de label / helper / error:

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

`options` e `pending` cobrem o estado dos dados sem props separadas de spinner:

```vue
<Select
  v-model="role"
  :options="roles"
  :pending="loadingRoles"
  placeholder="Pick a role"
/>
```

## Collection

`pending`, items vazios e `error` escolhem surfaces de skeleton / empty / error:

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

Helpers de outcome codificam o tone a partir da intenção:

```ts
const toast = useToast()
toast.success('Saved')
toast.error('Could not save', 'Check your connection')
```

## O que não liderar

Evite ensinar `variant`, `tone`, `size` ou radius como a API primária. Eles permanecem escape hatches para exceções raras; o Design Kit possui a estética.
