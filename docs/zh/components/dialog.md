# Dialog

面向聚焦任务的模态表面。可用声明式组件，或用 `useDialog().confirm` 做命令式确认（需要 plugin / PomikitRoot）。

## 声明式

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, Button } from 'pomikit-ui'

const open = ref(false)
</script>

<template>
  <Button @click="open = true">Edit profile</Button>

  <Dialog v-model:open="open" title="Edit profile" description="Update your public details.">
    <!-- form fields -->
    <template #footer>
      <Button @click="open = false">Cancel</Button>
      <Button @click="save">Save</Button>
    </template>
  </Dialog>
</template>
```

插槽：默认主体，可选 `title`、`description`、`footer`。Props 也可接受 `title` / `description` 字符串。

## 命令式确认

```ts
import { useDialog, useToast } from 'pomikit-ui'

const dialog = useDialog()
const toast = useToast()

async function onDelete() {
  const ok = await dialog.confirm({
    title: 'Delete project?',
    description: 'This cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    tone: 'danger',
    onConfirm: () => api.deleteProject(),
  })
  if (ok) toast.success('Deleted')
}
```

若 `onConfirm` 返回 Promise，确认按钮会保持忙碌直至其结束。

## 行为 props

| Prop | Default | 说明 |
| --- | --- | --- |
| `closeOnInteractOutside` | `true` | 外部点击 |
| `closeOnEscape` | `true` | Escape 键 |
| `closeLabel` | `'Close'` | 可访问的关闭标签 |

通过 [Root 与服务](/guide/providers) 确保服务已挂载。新应用不要依赖已弃用的 `DialogProvider`。
