# Button

Controle de ação primária. Lidere com intenção: clicks async, confirmação e navegação. O Design Kit possui look and feel.

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

Se o handler do click retornar um thenable, Button entra em fase busy até resolver. Com `feedback` (default `true`), segue um flash breve de success ou error.

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

Exige um segundo click antes de confirmar. `true` usa o label armado padrão; uma string define um personalizado.

```vue
<template>
  <Button :confirm="true" @click="remove">Delete</Button>
  <Button confirm="Really delete?" @click="remove">Delete</Button>
</template>
```

## Intenção de link

Passe `href` (e opcionalmente `target` / `rel`) para ações de navegação.

```vue
<template>
  <Button href="/settings">Settings</Button>
  <Button href="https://example.com" target="_blank" rel="noopener noreferrer">
    External
  </Button>
</template>
```

## Props comuns

| Prop | Intent |
| --- | --- |
| `confirm` | Commit no segundo click |
| `href` | Renderizar como link |
| `loading` | Busy controlado (combina com intenção async) |
| `disabled` | Não interativo |
| `busyText` / `successText` / `errorText` | Revelação progressiva do label |
| `feedback` | Alternar flash pós-settle (default `true`) |
| `block` | Layout em largura total |

## Escape hatches avançados

`variant`, `tone` e `size` existem para exceções raras. Prefira o Design Kit para marca e density. Não trate estes como a API primária de Button.
