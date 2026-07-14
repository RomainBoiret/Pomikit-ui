# Card

관련 콘텐츠를 담는 서피스. 구조는 슬롯으로 잡고, 카드가 인터랙티브할 때는 `href` 또는 `selectable`을 쓰세요.

## 기본

```vue
<script setup lang="ts">
import { Card } from 'pomikit-ui'
</script>

<template>
  <Card>
    <template #title>Billing</template>
    <template #description>Manage plan and invoices.</template>
    Body content goes in the default slot.
  </Card>
</template>
```

`titleAs`는 제목 요소를 제어합니다 (`h2` \| `h3` \| `h4` \| `div`, 기본 `h3`).

## 탐색

```vue
<template>
  <Card href="/projects/42">
    <template #title>Aurora</template>
    <template #description>Last edited today</template>
  </Card>
</template>
```

## 선택 가능

피커 그리드용. `selected`를 바인딩하고 업데이트를 수신하세요.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Card } from 'pomikit-ui'

const selected = ref(false)
</script>

<template>
  <Card
    selectable
    v-model:selected="selected"
    @select="selected = $event"
  >
    <template #title>Starter</template>
    <template #description>$12 / month</template>
  </Card>
</template>
```

## 팁

- 카드별 스타일보다 키트 서피스를 우선하세요.
- `variant`와 `size`는 고급 탈출구이며 시작하기 자료가 아닙니다.
