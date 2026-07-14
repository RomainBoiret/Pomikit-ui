# Checkbox · Switch

二択。共有の label、helper、error 行が必要なときは [Field](/components/field) で包みます。Radio は公開 API に含まれません。

## Checkbox

`v-model` で `boolean` または `'indeterminate'` をサポートします。

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, Field } from 'pomikit-ui'

const accepted = ref(false)
</script>

<template>
  <Field label="Terms" required>
    <Checkbox v-model="accepted" label="I agree to the terms" />
  </Field>
</template>
```

| Prop | メモ |
| --- | --- |
| `label` | Field を使わないときのインラインラベル |
| `disabled` / `required` | 標準のフォーム意図 |
| `value` | チェック時の送信値（デフォルト `'on'`） |

## Switch

設定風の意図向けの真偽トグルです。

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'pomikit-ui'

const notifications = ref(true)
</script>

<template>
  <Switch v-model="notifications" label="Email notifications" />
</template>
```

`size` は高度な密度逃げ道です；Design Kit を優先してください。
