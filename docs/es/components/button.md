# Button

Control de acción primaria. Lidera con intención: clicks async, confirmación y navegación. El Design Kit posee look and feel.

## Básico

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## Click async

Si el handler del click devuelve un thenable, Button entra en fase busy hasta que se resuelve. Con `feedback` (default `true`), sigue un flash breve de success o error.

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'

async function onSave() {
  await api.save()
}
</script>

<template>
  <Button @click="onSave" busy-text="Saving…" success-text="Saved">Save</Button>
</template>
```

## Confirm

Exige un segundo click antes de confirmar. `true` usa el label armado por defecto; un string define uno personalizado.

```vue
<template>
  <Button :confirm="true" @click="remove">Delete</Button>
  <Button confirm="Really delete?" @click="remove">Delete</Button>
</template>
```

## Intención de enlace

Pasa `href` (y opcionalmente `target` / `rel`) para acciones de navegación.

```vue
<template>
  <Button href="/settings">Settings</Button>
  <Button href="https://example.com" target="_blank" rel="noopener noreferrer">
    External
  </Button>
</template>
```

## Props comunes

| Prop | Intent |
| --- | --- |
| `confirm` | Commit con segundo click |
| `href` | Renderizar como enlace |
| `loading` | Busy controlado (se combina con intención async) |
| `disabled` | No interactivo |
| `busyText` / `successText` / `errorText` | Revelación progresiva del label |
| `feedback` | Alternar flash post-settle (default `true`) |
| `block` | Layout a ancho completo |

## Escape hatches avanzados

`variant`, `tone` y `size` existen para excepciones raras. Prefiere el Design Kit para marca y density. No trates estos como la API primaria de Button.
