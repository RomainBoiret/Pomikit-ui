# Button

Contrôle d'action principal. Menez avec l'intention : clics async, confirmation et navigation. Le Design Kit possède le look and feel.

## Basique

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## Clic async

Si le gestionnaire de clic retourne un thenable, Button entre en phase busy jusqu'à la résolution. Avec `feedback` (défaut `true`), un court flash de succès ou d'erreur suit.

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

Exige un second clic avant de confirmer. `true` utilise le libellé armé par défaut ; une chaîne en définit un personnalisé.

```vue
<template>
  <Button :confirm="true" @click="remove">Delete</Button>
  <Button confirm="Really delete?" @click="remove">Delete</Button>
</template>
```

## Intention lien

Passez `href` (et optionnellement `target` / `rel`) pour les actions de navigation.

```vue
<template>
  <Button href="/settings">Settings</Button>
  <Button href="https://example.com" target="_blank" rel="noopener noreferrer">
    External
  </Button>
</template>
```

## Props courantes

| Prop | Intention |
| --- | --- |
| `confirm` | Validation au second clic |
| `href` | Rendu comme lien |
| `loading` | Busy contrôlé (se fusionne avec l'intention async) |
| `disabled` | Non interactif |
| `busyText` / `successText` / `errorText` | Divulgation progressive du libellé |
| `feedback` | Active/désactive le flash post-résolution (défaut `true`) |
| `block` | Layout pleine largeur |

## Échappatoires avancées

`variant`, `tone` et `size` existent pour de rares exceptions. Préférez le Design Kit pour la marque et la densité. Ne traitez pas ces props comme l'API principale de Button.
