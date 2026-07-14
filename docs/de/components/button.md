# Button

Primäre Aktionskontrolle. Führe mit Intent: async Clicks, Bestätigung und Navigation. Das Design Kit besitzt Look and Feel.

## Basic

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## Async Click

Wenn der Click-Handler ein Thenable zurückgibt, wechselt Button in eine busy-Phase bis zur Settlement. Mit `feedback` (Default `true`) folgt ein kurzer Success- oder Error-Flash.

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

Zweiter Klick vor dem Commit erforderlich. `true` nutzt das Default-Armed-Label; ein String setzt ein eigenes.

```vue
<template>
  <Button :confirm="true" @click="remove">Delete</Button>
  <Button confirm="Really delete?" @click="remove">Delete</Button>
</template>
```

## Link-Intent

Mit `href` (und optional `target` / `rel`) Navigationsaktionen umsetzen.

```vue
<template>
  <Button href="/settings">Settings</Button>
  <Button href="https://example.com" target="_blank" rel="noopener noreferrer">
    External
  </Button>
</template>
```

## Häufige Props

| Prop | Intent |
| --- | --- |
| `confirm` | Commit per zweitem Klick |
| `href` | Als Link rendern |
| `loading` | Controlled busy (merged mit async Intent) |
| `disabled` | Nicht interaktiv |
| `busyText` / `successText` / `errorText` | Progressive Label-Disclosure |
| `feedback` | Post-Settle-Flash umschalten (Default `true`) |
| `block` | Full-Width-Layout |

## Advanced Escape Hatches

`variant`, `tone` und `size` existieren für seltene Ausnahmen. Bevorzuge das Design Kit für Brand und Density. Behandle diese nicht als primäre Button-API.
