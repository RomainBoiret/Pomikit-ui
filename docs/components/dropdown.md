# Dropdown

Menu built from **compound components**. Compose trigger, content, items, separators, and optional submenus.

## Anatomy

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

## Parts

| Component | Role |
| --- | --- |
| `Dropdown` | Root (`v-model:open`, `modal`) |
| `DropdownTrigger` | Opens the menu |
| `DropdownContent` | Positioned panel |
| `DropdownItem` | Action row (`select` event) |
| `DropdownSeparator` | Visual divider |
| `DropdownSub` | Nested menu root |
| `DropdownSubTrigger` | Opens submenu |
| `DropdownSubContent` | Nested panel |

## Item props

| Prop | Notes |
| --- | --- |
| `icon` | Built-in icon name, or `#icon` slot |
| `shortcut` | Keyboard hint text |
| `active` | Marks current selection |
| `tone` | `'neutral'` \| `'danger'` |
| `disabled` | Non-interactive |

Keep styling to kit tokens; avoid teaching per-item aesthetics as the primary API.
