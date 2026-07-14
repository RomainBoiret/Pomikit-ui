# Input

带可选校验规则的文本输入。建议与 [Field](/components/field) 配对以获得 label、helper 与 error 布局。

## 搭配 Field

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Input, rules } from 'pomikit-ui'

const email = ref('')
</script>

<template>
  <Field label="Email" required>
    <Input
      v-model="email"
      type="email"
      autocomplete="email"
      :rules="[rules.required(), rules.email()]"
    />
  </Field>
</template>
```

规则在 blur（及相关提交路径）时运行。参见 [Rules](/reference/rules)。

## 独立使用

没有 Field 时 `label` / `hint` / `error` 仍可用，但推荐用 Field 组合。

```vue
<Input v-model="q" type="search" placeholder="Search…" clearable :commit-delay="200" />
```

## 类型

`type`：`text` \| `email` \| `password` \| `search` \| `tel` \| `url` \| `number`

## 意图 props

| Prop | 说明 |
| --- | --- |
| `rules` | `InputRule[]` 校验 |
| `required` | 必填意图 |
| `clearable` | 清除能力 |
| `commitDelay` | `update:committed` 的防抖毫秒（利于搜索） |
| `disabled` / `readonly` | 交互状态 |

`size` 是高级逃生舱；优先使用 Design Kit 密度。
