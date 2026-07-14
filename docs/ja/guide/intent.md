# 意図デザイン

Pomikit は、見た目ではなく **UI の意味** を表す props を優先します。コンポーネントはその意図からローディング、確認、空状態、バリデーションを推論します。

## Button

非同期クリックは、忙しい状態（および任意の成功/エラー）フィードバックを自動で駆動します：

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

- `@click` で thenable を返す → 忙しいフェーズ
- `confirm` → 2 回クリックで確定
- `href` → ナビ用ボタン（リンクとして描画）

## Field + Input

`required` と `rules` がバリデーション意図を表します。Field が label / helper / error レイアウトを担います：

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

`options` と `pending` がデータ状態をカバーし、別の spinner props は不要です：

```vue
<Select
  v-model="role"
  :options="roles"
  :pending="loadingRoles"
  placeholder="Pick a role"
/>
```

## Collection

`pending`、空の items、`error` でスケルトン / 空 / エラー表面を選びます：

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

結果ヘルパーは意図から tone を符号化します：

```ts
const toast = useToast()
toast.success('Saved')
toast.error('Could not save', 'Check your connection')
```

## 先頭で教えないこと

`variant`、`tone`、`size`、radius を主要な API として教えないでください。まれな例外のための逃げ道として残ります；美学は Design Kit が担います。
