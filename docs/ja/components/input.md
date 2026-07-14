# Input

任意のバリデーション規則付きテキスト入力。[Field](/components/field) と組み合わせて label、helper、error レイアウトを取るのが望ましいです。

## Field と一緒に

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

規則は blur（および関連する commit 経路）で走ります。[Rules](/reference/rules) を参照。

## 単独

Field なしでも `label` / `hint` / `error` は使えますが、Field による組み合わせを推奨します。

```vue
<Input v-model="q" type="search" placeholder="Search…" clearable :commit-delay="200" />
```

## タイプ

`type`：`text` \| `email` \| `password` \| `search` \| `tel` \| `url` \| `number`

## 意図 props

| Prop | メモ |
| --- | --- |
| `rules` | `InputRule[]` バリデーション |
| `required` | 必須意図 |
| `clearable` | クリア手段 |
| `commitDelay` | `update:committed` のデバウンス ms（検索向け） |
| `disabled` / `readonly` | 操作状態 |

`size` は高度な逃げ道です；Design Kit の密度を優先してください。
