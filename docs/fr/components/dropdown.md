# Dropdown

Menu construit à partir de **composants composés**. Composez trigger, content, items, séparateurs et sous-menus optionnels.

## Anatomie

```vue
<script setup lang="ts">
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  Button,
} from 'pomikit-ui'
</script>

<template>
  <Dropdown>
    <DropdownTrigger>
      <Button>Actions</Button>
    </DropdownTrigger>
    <DropdownContent>
      <DropdownItem icon="pencil" shortcut="F2">Rename</DropdownItem>
      <DropdownItem icon="copy">Duplicate</DropdownItem>
      <DropdownSeparator />
      <DropdownSub>
        <DropdownSubTrigger>More</DropdownSubTrigger>
        <DropdownSubContent>
          <DropdownItem>Archive</DropdownItem>
          <DropdownItem>Export</DropdownItem>
        </DropdownSubContent>
      </DropdownSub>
      <DropdownSeparator />
      <DropdownItem tone="danger" icon="trash">Delete</DropdownItem>
    </DropdownContent>
  </Dropdown>
</template>
```

## Parties

| Composant | Rôle |
| --- | --- |
| `Dropdown` | Racine (`v-model:open`, `modal`) |
| `DropdownTrigger` | Ouvre le menu |
| `DropdownContent` | Panneau positionné |
| `DropdownItem` | Ligne d'action (événement `select`) |
| `DropdownSeparator` | Séparateur visuel |
| `DropdownSub` | Racine de menu imbriqué |
| `DropdownSubTrigger` | Ouvre le sous-menu |
| `DropdownSubContent` | Panneau imbriqué |

## Props d'item

| Prop | Notes |
| --- | --- |
| `icon` | Nom d'icône intégrée, ou slot `#icon` |
| `shortcut` | Texte d'indication clavier |
| `active` | Marque la sélection courante |
| `tone` | `'neutral'` \| `'danger'` |
| `disabled` | Non interactif |

Gardez le style sur les tokens du kit ; évitez d'enseigner l'esthétique par item comme API principale.
