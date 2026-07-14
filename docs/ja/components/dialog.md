# Dialog

集中した作業向けのモーダル面。宣言的コンポーネント、または `useDialog().confirm` による命令的確認を使えます（plugin / PomikitRoot が必要）。

## 宣言的

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

スロット：デフォルト本文、任意の `title`、`description`、`footer`。Props でも `title` / `description` 文字列を受け取れます。

## 命令的確認

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

`onConfirm` が Promise を返すと、確認ボタンはその解決まで忙しいままになります。

## 挙動 props

| Prop | Default | メモ |
| --- | --- | --- |
| `closeOnInteractOutside` | `true` | 外側クリック |
| `closeOnEscape` | `true` | Escape キー |
| `closeLabel` | `'Close'` | アクセシブルな閉じるラベル |

[Root とサービス](/guide/providers) 経由でサービスがマウントされていることを確認してください。新規アプリで非推奨の `DialogProvider` に依存しないでください。
