# Rules（バリデーション）

[Input](/components/input) `rules` 用のヘルパー。各ファクトリは `InputRule` を返します。

## API

```ts
import { rules, runRules } from 'pomikit-ui'
import type { InputRule } from 'pomikit-ui'

type InputRule = (value: string) => true | string | null | undefined | void
```

| Helper | 挙動 |
| --- | --- |
| `rules.required(message?)` | trim 後に非空 |
| `rules.email(message?)` | 空または有効なメール |
| `rules.min(length, message?)` | 最小長さ |
| `rules.max(length, message?)` | 最大長さ |
| `runRules(value, list)` | 最初の失敗メッセージ、または `undefined` |

## 例

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

カスタム規則は通常の関数です。成功時は `true`（または nullish）、失敗時は文字列メッセージを返します。
