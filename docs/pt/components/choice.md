# Checkbox · Switch

Escolhas binárias. Envolva com [Field](/components/field) quando precisar de label, helper ou linha de erro compartilhados. Radio não faz parte da API pública.

## Checkbox

Suporta `boolean` ou `'indeterminate'` via `v-model`.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, Field } from 'pomikit-ui'

const accepted = ref(false)
</script>

<template>
  <Field label="Terms" required>
    <Checkbox v-model="accepted" label="I agree to the terms" />
  </Field>
</template>
```

| Prop | Notes |
| --- | --- |
| `label` | Label em linha quando não usa Field |
| `disabled` / `required` | Intenção de formulário padrão |
| `value` | Valor enviado ao marcar (default `'on'`) |

## Switch

Toggle booleano para intenção no estilo settings.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'pomikit-ui'

const notifications = ref(true)
</script>

<template>
  <Switch v-model="notifications" label="Email notifications" />
</template>
```

`size` é um escape hatch avançado de density; prefira o Design Kit.
