# Skeleton

内容加载时的占位表面。Collection 在首次 pending 加载时会自动使用它们；自定义布局时可直接用 Skeleton。

## 变体

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

| Prop | 说明 |
| --- | --- |
| `variant` | `text` \| `rect` \| `circle` |
| `lines` | 文本行数（默认 `1`） |
| `width` / `height` | CSS 长度 |
| `animated` | 柔和微光（默认 `true`） |

动效遵循 Design Kit 的 motion tokens。
