# useDialog

命令式 dialog API。需要 Pomikit 插件（默认 overlays）或 `<PomikitRoot>`。

## confirm

```ts
import { useDialog } from 'pomikit-ui'

const dialog = useDialog()

const ok = await dialog.confirm({
  title: 'Remove member?',
  description: 'They will lose access immediately.',
  confirmLabel: 'Remove',
  cancelLabel: 'Keep',
  tone: 'danger',
  onConfirm: () => api.removeMember(id),
})
```

返回 `Promise<boolean>`（确认则为 `true`）。

## Options

```ts
type DialogConfirmOptions = {
  title: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
  tone?: PomiTone
  /** Confirm button stays busy while the Promise settles. */
  onConfirm?: () => unknown
}
```

## 说明

- 多字段表单优先用声明式 `<Dialog>`。
- 破坏性或一次性决策优先用 `confirm`。
- 新应用不要基于已弃用的 `DialogProvider`。
