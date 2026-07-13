# Button

Action Pomikit — déjà premium. Props = intention, pas décoration.

## Import

```ts
import { Button } from 'pomikit-ui'
```

## Chemin recommandé

```vue
<Button @click="save">Save</Button>
<Button confirm="Delete project?" @click="remove">Delete</Button>
<Button href="/docs">Documentation</Button>
```

Le Design Kit décide couleurs, radius, motion. Tu n’as pas à choisir `variant` / `tone` / `size`.

## Intent

### Async

```vue
<script setup lang="ts">
async function save() {
  await fetch('/api/profile', { method: 'POST' })
}
</script>

<template>
  <Button @click="save">Save</Button>
  <Button busy-text="Saving…" success-text="Saved" @click="save">
    Save with labels
  </Button>
</template>
```

Si `@click` retourne une Promise → busy → success / error (`feedback` défaut `true`).

### Confirm

```vue
<Button confirm @click="remove">Delete</Button>
<Button confirm="Really?" @click="remove">Delete</Button>
```

Premier clic arme. Second clic exécute. Escape / blur désarme.

### Lien

```vue
<Button href="/docs" target="_blank">Documentation</Button>
```

## Props d’intention

| Prop | Rôle |
| --- | --- |
| `confirm` | Second clic requis |
| `href` / `target` / `rel` | Rend un lien |
| `busyText` / `successText` / `errorText` | Labels pendant les phases |
| `feedback` | Flash success/error après Promise (`true` par défaut) |
| `type` | `button` \| `submit` \| `reset` |
| `disabled` / `loading` | États contrôlés |
| `block` | Pleine largeur |

## Escape hatches (avancé)

Réservé aux cas rares — **pas** le chemin Getting Started :

| Prop | Type | Défaut |
| --- | --- | --- |
| `variant` | `solid` \| `outline` \| `ghost` \| `soft` | `solid` |
| `tone` | `primary` \| `neutral` \| `danger` \| `success` | `primary` |
| `size` | `sm` \| `md` \| `lg` \| `icon` | `md` |

Préférer changer le [Design Kit](/guide/theming) plutôt que styliser bouton par bouton.

## Slots

`default`, `leading`, `trailing`

## Notes

- Largeur verrouillée pendant busy / feedback (pas de layout shift)
- `size="icon"` : fournir un `aria-label` si le contenu n’a pas de texte
