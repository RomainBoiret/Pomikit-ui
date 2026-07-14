# useDialog

命令的 dialog API。Pomikit プラグイン（デフォルト overlays）または `<PomikitRoot>` が必要です。

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

`Promise<boolean>` を返します（確認なら `true`）。

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

## メモ

- 複数フィールドのフォームは宣言的 `<Dialog>` を優先。
- 破壊的・一回きりの決定は `confirm` を優先。
- 非推奨の `DialogProvider` に新しいアプリを載せないでください。
