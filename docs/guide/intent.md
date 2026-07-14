# Intent design

Pomikit prefers props that describe **what the UI means**, not how it should look. Components infer loading, confirmation, emptiness, and validation from that intent.

## Button

Async clicks drive busy (and optional success/error) feedback automatically:

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

- Returning a thenable on `@click` → busy phase
- `confirm` → second-click commit
- `href` → navigational button (renders as a link)

## Field + Input

`required` and `rules` express validation intent. Field owns label / helper / error layout:

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

`options` and `pending` cover data state without separate spinner props:

```vue
<Select
  v-model="role"
  :options="roles"
  :pending="loadingRoles"
  placeholder="Pick a role"
/>
```

## Collection

`pending`, empty items, and `error` select skeleton / empty / error surfaces:

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

Outcome helpers encode tone from intent:

```ts
const toast = useToast()
toast.success('Saved')
toast.error('Could not save', 'Check your connection')
```

## What not to lead with

Avoid teaching `variant`, `tone`, `size`, or radius as the primary API. Those remain escape hatches for rare exceptions; the Design Kit owns aesthetics.
