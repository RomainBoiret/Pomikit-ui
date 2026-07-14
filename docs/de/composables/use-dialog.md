# useDialog

Imperative Dialog-API. Erfordert das Pomikit-Plugin (Default-Overlays) oder `<PomikitRoot>`.

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

Gibt `Promise<boolean>` zurück (`true` wenn bestätigt).

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

## Hinweise

- Bevorzuge deklaratives `<Dialog>` für Multi-Field-Formulare.
- Bevorzuge `confirm` für destruktive oder One-Shot-Entscheidungen.
- Keine neuen Apps auf dem deprecated `DialogProvider` aufbauen.
