# Skeleton

콘텐츠가 로드되는 동안의 자리 표시 서피스. Collection은 첫 pending 로드에서 자동으로 사용합니다. 커스텀 레이아웃에서는 Skeleton을 직접 쓰세요.

## 변형

```vue
<script setup lang="ts">
import { Skeleton } from 'pomikit-ui'
</script>

<template>
  <Skeleton variant="text" :lines="3" />
  <Skeleton variant="rect" width="100%" height="120px" />
  <Skeleton variant="circle" width="40px" height="40px" />
</template>
```

| Prop | 참고 |
| --- | --- |
| `variant` | `text` \| `rect` \| `circle` |
| `lines` | 텍스트 줄 수 (기본 `1`) |
| `width` / `height` | CSS 길이 |
| `animated` | 부드러운 셔머 (기본 `true`) |

모션은 Design Kit motion 토큰을 따릅니다.
