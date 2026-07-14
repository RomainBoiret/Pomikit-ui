# Dropdown

Menú construido con **componentes compuestos**. Compón trigger, content, items, separators y submenús opcionales.

## Anatomía

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
| `DropdownTrigger` | Abre el menú |
| `DropdownContent` | Panel posicionado |
| `DropdownItem` | Fila de acción (evento `select`) |
| `DropdownSeparator` | Divisor visual |
| `DropdownSub` | Root de menú anidado |
| `DropdownSubTrigger` | Abre el submenú |
| `DropdownSubContent` | Panel anidado |

## Props de Item

| Prop | Notes |
| --- | --- |
| `icon` | Nombre de icono built-in, o slot `#icon` |
| `shortcut` | Texto de atajo de teclado |
| `active` | Marca la selección actual |
| `tone` | `'neutral'` \| `'danger'` |
| `disabled` | No interactivo |

Mantén el estilo en tokens del kit; evita enseñar estética por ítem como API primaria.
