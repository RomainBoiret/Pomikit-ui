# Dropdown

**複合コンポーネント**で作るメニュー。trigger、content、items、区切り、任意のサブメニューを組み立てます。

## 解剖

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

## 部品

| Component | 役割 |
| --- | --- |
| `Dropdown` | ルート（`v-model:open`、`modal`） |
| `DropdownTrigger` | メニューを開く |
| `DropdownContent` | 配置されたパネル |
| `DropdownItem` | アクション行（`select` イベント） |
| `DropdownSeparator` | 視覚的な区切り |
| `DropdownSub` | ネストメニューのルート |
| `DropdownSubTrigger` | サブメニューを開く |
| `DropdownSubContent` | ネストパネル |

## Item props

| Prop | メモ |
| --- | --- |
| `icon` | 組み込みアイコン名、または `#icon` スロット |
| `shortcut` | キーボードヒント文字列 |
| `active` | 現在の選択を示す |
| `tone` | `'neutral'` \| `'danger'` |
| `disabled` | 非インタラクティブ |

スタイルはキットトークンに留め、項目ごとの美学を主要 API として教えないでください。
