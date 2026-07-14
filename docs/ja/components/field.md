# Field

フォームコントロール向けのレイアウトラッパー：label、helper、確保済みの error 行（バリデーション表示でもレイアウトが跳ねない）。[Input](/components/input)、[Select](/components/select)、Checkbox、Switch にコンテキストを提供します。

## 基本

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

## 制御された error

Field の `error` は子の意図バリデーションより優先されます：

```vue
<Field label="Username" :error="serverError">
  <Input v-model="username" />
</Field>
```

## Props

| Prop | メモ |
| --- | --- |
| `label` | 表示ラベル（Input がフロートさせる場合あり） |
| `helper` | エラーがないときのヒント |
| `error` | 制御されたメッセージ |
| `required` | コントロールを必須にする |
| `id` | 任意のコントロール id（なければ生成） |

Field に参加するカスタムコントロールは [useFieldContext](/composables/use-field) を参照してください。
