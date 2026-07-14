# Dropdown

Menu construído com **componentes compostos**. Compose trigger, content, items, separators e submenus opcionais.

## Anatomia

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

## Partes

| Component | Role |
| --- | --- |
| `Dropdown` | Root (`v-model:open`, `modal`) |
| `DropdownTrigger` | Abre o menu |
| `DropdownContent` | Painel posicionado |
| `DropdownItem` | Linha de ação (evento `select`) |
| `DropdownSeparator` | Divisor visual |
| `DropdownSub` | Root de menu aninhado |
| `DropdownSubTrigger` | Abre o submenu |
| `DropdownSubContent` | Painel aninhado |

## Props de Item

| Prop | Notes |
| --- | --- |
| `icon` | Nome de ícone built-in, ou slot `#icon` |
| `shortcut` | Texto de atalho de teclado |
| `active` | Marca a seleção atual |
| `tone` | `'neutral'` \| `'danger'` |
| `disabled` | Não interativo |

Mantenha o estilo nos tokens do kit; evite ensinar estética por item como API primária.
