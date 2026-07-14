# Card

相关内容的表面。用插槽组织结构；当卡片可交互时使用 `href` 或 `selectable`。

## 基础

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

`titleAs` 控制标题元素（`h2` \| `h3` \| `h4` \| `div`，默认 `h3`）。

## 导航

```vue
<template>
  <Card href="/projects/42">
    <template #title>Aurora</template>
    <template #description>Last edited today</template>
  </Card>
</template>
```

## 可选中

用于选择器网格。绑定 `selected` 并监听更新。

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

## 提示

- 优先使用套件表面，而不是按卡片单独样式。
- `variant` 与 `size` 是高级逃生舱，不属于快速开始内容。
