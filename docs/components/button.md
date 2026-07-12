# Button

Action primaire Pomikit — avec intent async et confirm.

## Import

```ts
import { Button } from 'pomikit-ui'
```

## Exemples

### Basique

```vue
<Button>Save</Button>
<Button variant="outline" tone="neutral">Cancel</Button>
<Button variant="soft">Toast</Button>
<Button variant="ghost" tone="danger">Delete</Button>
```

### Async intent

```vue
<script setup lang="ts">
async function save() {
  await fetch('/api/profile', { method: 'POST' })
}
</script>

<template>
  <Button @click="save">Save</Button>
  <Button :busy-text="'Saving…'" success-text="Saved" @click="save">
    Save with labels
  </Button>
</template>
```

Si `onClick` retourne un thenable → phase busy, puis flash success/error (`feedback` défaut `true`).

### Confirm

```vue
<Button tone="danger" confirm @click="remove">Delete</Button>
<Button confirm="Really?" @click="remove">Delete</Button>
```

Premier clic arme (label Confirm? / string, tone danger). Second clic exécute. Escape / blur désarme.

### Lien

```vue
<Button href="/docs" target="_blank">Documentation</Button>
```

## Props

| Prop | Type | Défaut |
| --- | --- | --- |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` |
| `size` | `PomiSize \| 'icon'` | `'md'` |
| `variant` | `PomiVariant` | `'solid'` |
| `tone` | `PomiTone` | `'primary'` |
| `disabled` | `boolean` | `false` |
| `loading` | `boolean` | `false` |
| `block` | `boolean` | `false` |
| `href` | `string` | — |
| `target` | `string` | — |
| `rel` | `string` | — |
| `confirm` | `boolean \| string` | — |
| `feedback` | `boolean` | `true` |
| `busyText` | `string` | — |
| `successText` | `string` | — |
| `errorText` | `string` | — |

## Slots

`default`, `leading`, `trailing`

## Notes

- `size="icon"` : fournir un `aria-label` si le contenu n’a pas de texte.
- `loading` est un escape hatch contrôlé ; l’intent async couvre le cas courant.
