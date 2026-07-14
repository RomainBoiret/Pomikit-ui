# Field

表单控件的布局包装：label、helper，以及预留的 error 行（校验出现时无布局跳动）。为 [Input](/components/input)、[Select](/components/select)、Checkbox 与 Switch 提供上下文。

## 基础

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Input } from 'pomikit-ui'

const name = ref('')
</script>

<template>
  <Field label="Name" helper="As shown on invoices" required>
    <Input v-model="name" />
  </Field>
</template>
```

## 受控 error

Field 的 `error` 优先于子级意图校验：

```vue
<Field label="Username" :error="serverError">
  <Input v-model="username" />
</Field>
```

## Props

| Prop | 说明 |
| --- | --- |
| `label` | 可见标签（Input 可能使其浮动） |
| `helper` | 无错误时的提示 |
| `error` | 受控消息 |
| `required` | 将控件标记为必填 |
| `id` | 可选控件 id（否则自动生成） |

自定义控件要参与 Field 时，参见 [useFieldContext](/composables/use-field)。
