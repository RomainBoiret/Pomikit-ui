# Dropdown

由**复合组件**构成的菜单。组合 trigger、content、items、分隔符以及可选的子菜单。

## 结构

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

## 部件

| Component | 角色 |
| --- | --- |
| `Dropdown` | 根（`v-model:open`、`modal`） |
| `DropdownTrigger` | 打开菜单 |
| `DropdownContent` | 定位面板 |
| `DropdownItem` | 操作行（`select` 事件） |
| `DropdownSeparator` | 视觉分隔 |
| `DropdownSub` | 嵌套菜单根 |
| `DropdownSubTrigger` | 打开子菜单 |
| `DropdownSubContent` | 嵌套面板 |

## Item props

| Prop | 说明 |
| --- | --- |
| `icon` | 内置图标名，或 `#icon` 插槽 |
| `shortcut` | 键盘提示文本 |
| `active` | 标记当前选择 |
| `tone` | `'neutral'` \| `'danger'` |
| `disabled` | 不可交互 |

样式保持在套件 tokens 上；避免把按项美学当作主要 API 来教。
