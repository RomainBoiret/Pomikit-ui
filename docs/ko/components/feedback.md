# EmptyState · ErrorState

「여기엔 아무것도 없음」과 「무언가 실패함」을 위한 피드백 서피스. [Collection](/components/collection)은 pending / empty / error 의도에서 이를 사용합니다. 직접 레이아웃을 조합할 때는 단독으로 쓰세요.

## EmptyState

```vue
<script setup lang="ts">
import { EmptyState, Button } from 'pomikit-ui'
</script>

<template>
  <EmptyState
    title="No messages"
    description="When someone writes to you, it will show up here."
  >
    <Button href="/compose">Compose</Button>
  </EmptyState>
</template>
```

`title`은 필수입니다. 기본 슬롯은 액션이나 추가 콘텐츠용입니다.

## ErrorState

```vue
<script setup lang="ts">
import { ErrorState } from 'pomikit-ui'

function reload() {
  /* refetch */
}
</script>

<template>
  <ErrorState
    title="Could not load inbox"
    :error="loadError"
    retry-label="Try again"
    @retry="reload"
  />
</template>
```

| Prop | 참고 |
| --- | --- |
| `title` | 기본: `'Something went wrong'` |
| `description` | 선택적 명시 카피 |
| `error` | `description`이 없을 때 `string` \| `Error` \| `unknown` |
| `retryLabel` | 재시도 버튼 라벨 |

사용자가 다시 시도하면 `retry`를 emit합니다. 리스트형 데이터는 의도 매트릭스를 다시 구현하지 않도록 Collection을 우선하세요.
