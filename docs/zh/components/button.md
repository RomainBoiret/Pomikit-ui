# Button

主要操作控件。以意图开篇：异步点击、确认与导航。外观由 Design Kit 负责。

## 基础

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## 异步点击

若点击处理函数返回 thenable，Button 会进入忙碌阶段直至其结束。启用 `feedback`（默认 `true`）时，随后会短暂闪现成功或错误。

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

## 确认

在提交前要求第二次点击。`true` 使用默认待命标签；字符串可自定义。

```vue
<template>
  <Button :confirm="true" @click="remove">Delete</Button>
  <Button confirm="Really delete?" @click="remove">Delete</Button>
</template>
```

## 链接意图

传入 `href`（以及可选的 `target` / `rel`）用于导航操作。

```vue
<template>
  <Button href="/settings">Settings</Button>
  <Button href="https://example.com" target="_blank" rel="noopener noreferrer">
    External
  </Button>
</template>
```

## 常用 props

| Prop | 意图 |
| --- | --- |
| `confirm` | 二次点击提交 |
| `href` | 渲染为链接 |
| `loading` | 受控忙碌（与异步意图合并） |
| `disabled` | 不可交互 |
| `busyText` / `successText` / `errorText` | 渐进式标签披露 |
| `feedback` | 切换结算后闪现（默认 `true`） |
| `block` | 全宽布局 |

## 高级逃生舱

`variant`、`tone` 与 `size` 仅用于罕见例外。品牌与密度优先交给 Design Kit。不要把它们当作主要 Button API。
