# Checkbox · Switch

二元选择。需要共享 label、helper 或 error 行时用 [Field](/components/field) 包裹。Radio 不属于公开 API。

## Checkbox

通过 `v-model` 支持 `boolean` 或 `'indeterminate'`。

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

| Prop | 说明 |
| --- | --- |
| `label` | 未使用 Field 时的内联标签 |
| `disabled` / `required` | 标准表单意图 |
| `value` | 勾选时提交的值（默认 `'on'`） |

## Switch

用于设置类意图的布尔切换。

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

`size` 是高级密度逃生舱；优先使用 Design Kit。
