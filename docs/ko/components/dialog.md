# Dialog

집중된 작업을 위한 모달 서피스. 선언적 컴포넌트, 또는 `useDialog().confirm`로 명령형 확인을 쓰세요 (plugin / PomikitRoot 필요).

## 선언적

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

슬롯: 기본 본문, 선택적 `title`, `description`, `footer`. Props로도 `title` / `description` 문자열을 받을 수 있습니다.

## 명령형 확인

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

`onConfirm`이 Promise를 반환하면 확인 버튼은 settle될 때까지 busy를 유지합니다.

## 동작 props

| Prop | Default | 참고 |
| --- | --- | --- |
| `closeOnInteractOutside` | `true` | 바깥 클릭 |
| `closeOnEscape` | `true` | Escape 키 |
| `closeLabel` | `'Close'` | 접근 가능한 닫기 라벨 |

[Root와 서비스](/guide/providers)를 통해 서비스가 마운트되었는지 확인하세요. 새 앱에서 deprecated `DialogProvider`에 의존하지 마세요.
