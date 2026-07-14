# useDialog

Imperative dialog API. Requires the Pomikit plugin (default overlays) or `<PomikitRoot>`.

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

Returns `Promise<boolean>` (`true` if confirmed).

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

## Notes

- Prefer declarative `<Dialog>` for multi-field forms.
- Prefer `confirm` for destructive or one-shot decisions.
- Do not introduce new apps on deprecated `DialogProvider`.
