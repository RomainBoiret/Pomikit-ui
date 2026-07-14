# Dropdown

Menü aus **Compound Components**. Trigger, Content, Items, Separators und optionale Submenus komponieren.

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

## Teile

| Component | Role |
| --- | --- |
| `Dropdown` | Root (`v-model:open`, `modal`) |
| `DropdownTrigger` | Öffnet das Menü |
| `DropdownContent` | Positioniertes Panel |
| `DropdownItem` | Action Row (`select` Event) |
| `DropdownSeparator` | Visueller Divider |
| `DropdownSub` | Nested-Menü-Root |
| `DropdownSubTrigger` | Öffnet Submenu |
| `DropdownSubContent` | Nested Panel |

## Item Props

| Prop | Notes |
| --- | --- |
| `icon` | Built-in Icon-Name, oder `#icon` Slot |
| `shortcut` | Keyboard-Hint-Text |
| `active` | Markiert aktuelle Selection |
| `tone` | `'neutral'` \| `'danger'` |
| `disabled` | Nicht interaktiv |

Styling an Kit-Tokens halten; per-Item-Ästhetik nicht als Primär-API lehren.
