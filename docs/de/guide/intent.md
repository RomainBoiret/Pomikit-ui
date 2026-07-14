# Intent-Design

Pomikit bevorzugt Props, die beschreiben **was die UI bedeutet**, nicht wie sie aussehen soll. Komponenten leiten Loading, Bestätigung, Leere und Validation aus diesem Intent ab.

## Button

Async Clicks steuern busy (und optional success/error) Feedback automatisch:

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

- Thenable auf `@click` zurückgeben → busy-Phase
- `confirm` → Commit per zweitem Klick
- `href` → Navigationsbutton (rendert als Link)

## Field + Input

`required` und `rules` drücken Validierungs-Intent aus. Field besitzt Label- / Helper- / Error-Layout:

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

`options` und `pending` decken den Datenstatus ohne separate Spinner-Props ab:

```vue
<Select
  v-model="role"
  :options="roles"
  :pending="loadingRoles"
  placeholder="Pick a role"
/>
```

## Collection

`pending`, leere Items und `error` wählen Skeleton- / Empty- / Error-Surfaces:

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

Outcome-Helper kodieren Tone aus dem Intent:

```ts
const toast = useToast()
toast.success('Saved')
toast.error('Could not save', 'Check your connection')
```

## Womit nicht führen

Vermeide, `variant`, `tone`, `size` oder Radius als Primär-API zu lehren. Das bleiben Escape Hatches für seltene Ausnahmen; das Design Kit besitzt die Ästhetik.
