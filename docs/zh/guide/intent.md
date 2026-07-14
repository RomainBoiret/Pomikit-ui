# 意图设计

Pomikit 偏好描述 **UI 含义** 的 props，而不是外观。组件由此意图推断加载、确认、空态和校验。

## Button

异步点击会自动驱动忙碌（以及可选的成功/错误）反馈：

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'

async function save() {
  await api.save()
}
</script>

<template>
  <Button :confirm="true" @click="save">Delete</Button>
  <Button href="/docs">Open docs</Button>
</template>
```

- 在 `@click` 上返回 thenable → 忙碌阶段
- `confirm` → 二次点击提交
- `href` → 导航按钮（渲染为链接）

## Field + Input

`required` 与 `rules` 表达校验意图。Field 负责 label / helper / error 布局：

```vue
<script setup lang="ts">
import { Field, Input, rules } from 'pomikit-ui'
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <Field label="Email" required helper="Work address preferred">
    <Input v-model="email" type="email" :rules="[rules.required(), rules.email()]" />
  </Field>
</template>
```

## Select

`options` 与 `pending` 覆盖数据状态，无需单独的 spinner props：

```vue
<Select
  v-model="role"
  :options="roles"
  :pending="loadingRoles"
  placeholder="Pick a role"
/>
```

## Collection

`pending`、空 items 与 `error` 选择骨架 / 空态 / 错误表面：

```vue
<Collection
  :items="rows"
  :pending="loading"
  :error="loadError"
  @retry="reload"
>
  <template #item="{ item }">
    {{ item.name }}
  </template>
</Collection>
```

## Toast

结果辅助方法从意图编码 tone：

```ts
const toast = useToast()
toast.success('Saved')
toast.error('Could not save', 'Check your connection')
```

## 不要用它们开篇

避免把 `variant`、`tone`、`size` 或 radius 作为主要 API 来教。它们仍可作为罕见例外的逃生舱；美学由 Design Kit 负责。
