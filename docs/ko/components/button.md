# Button

기본 액션 컨트롤. 의도로 시작하세요: 비동기 클릭, 확인, 탐색. 룩앤필은 Design Kit이 소유합니다.

## 기본

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## 비동기 클릭

클릭 핸들러가 thenable을 반환하면 Button은 그것이 settle될 때까지 busy 단계에 들어갑니다. `feedback`(기본 `true`)가 켜져 있으면 짧은 성공 또는 오류 플래시가 이어집니다.

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

## 확인

확정 전에 두 번째 클릭을 요구합니다. `true`는 기본 armed 라벨을 쓰고, 문자열로 커스텀할 수 있습니다.

```vue
<template>
  <Button :confirm="true" @click="remove">Delete</Button>
  <Button confirm="Really delete?" @click="remove">Delete</Button>
</template>
```

## 링크 의도

탐색 액션에는 `href`(및 선택적 `target` / `rel`)를 전달하세요.

```vue
<template>
  <Button href="/settings">Settings</Button>
  <Button href="https://example.com" target="_blank" rel="noopener noreferrer">
    External
  </Button>
</template>
```

## 자주 쓰는 props

| Prop | 의도 |
| --- | --- |
| `confirm` | 두 번째 클릭으로 확정 |
| `href` | 링크로 렌더 |
| `loading` | 제어된 busy (비동기 의도와 병합) |
| `disabled` | 비인터랙티브 |
| `busyText` / `successText` / `errorText` | 점진적 라벨 공개 |
| `feedback` | settle 후 플래시 토글 (기본 `true`) |
| `block` | 전체 너비 레이아웃 |

## 고급 탈출구

`variant`, `tone`, `size`는 드문 예외용입니다. 브랜드와 밀도는 Design Kit을 우선하세요. 이를 주 Button API로 취급하지 마세요.
