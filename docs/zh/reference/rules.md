# Rules（校验）

用于 [Input](/components/input) `rules` 的辅助方法。每个工厂返回一个 `InputRule`。

## API

```ts
import { rules, runRules } from 'pomikit-ui'
import type { InputRule } from 'pomikit-ui'

type InputRule = (value: string) => true | string | null | undefined | void
```

| Helper | 行为 |
| --- | --- |
| `rules.required(message?)` | trim 后非空 |
| `rules.email(message?)` | 空或有效邮箱 |
| `rules.min(length, message?)` | 最小长度 |
| `rules.max(length, message?)` | 最大长度 |
| `runRules(value, list)` | 第一条失败消息，或 `undefined` |

## 示例

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Input, rules } from 'pomikit-ui'

const password = ref('')
</script>

<template>
  <Field label="Password" required>
    <Input
      v-model="password"
      type="password"
      :rules="[
        rules.required(),
        rules.min(8, 'Use at least 8 characters'),
      ]"
    />
  </Field>
</template>
```

自定义规则是普通函数：成功时返回 `true`（或空值），失败时返回字符串消息。
