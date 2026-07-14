# Dropdown

**복합 컴포넌트**로 만드는 메뉴. trigger, content, items, 구분선, 선택적 서브메뉴를 조립합니다.

## 구조

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

## 파트

| Component | 역할 |
| --- | --- |
| `Dropdown` | 루트 (`v-model:open`, `modal`) |
| `DropdownTrigger` | 메뉴를 엽니다 |
| `DropdownContent` | 위치 지정 패널 |
| `DropdownItem` | 액션 행 (`select` 이벤트) |
| `DropdownSeparator` | 시각적 구분선 |
| `DropdownSub` | 중첩 메뉴 루트 |
| `DropdownSubTrigger` | 서브메뉴를 엽니다 |
| `DropdownSubContent` | 중첩 패널 |

## Item props

| Prop | 참고 |
| --- | --- |
| `icon` | 내장 아이콘 이름, 또는 `#icon` 슬롯 |
| `shortcut` | 키보드 힌트 텍스트 |
| `active` | 현재 선택을 표시 |
| `tone` | `'neutral'` \| `'danger'` |
| `disabled` | 비인터랙티브 |

스타일은 키트 토큰에 두고, 항목별 미학을 주 API로 가르치지 마세요.
