# Checkbox · Switch

Opciones binarias. Envuelve con [Field](/components/field) cuando necesites label, helper o fila de error compartidos. Radio no forma parte de la API pública.

## Checkbox

Soporta `boolean` o `'indeterminate'` vía `v-model`.

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
| `label` | Label en línea cuando no usas Field |
| `disabled` / `required` | Intención de formulario estándar |
| `value` | Valor enviado al marcar (default `'on'`) |

## Switch

Toggle booleano para intención tipo settings.

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

`size` es un escape hatch avanzado de density; prefiere el Design Kit.
