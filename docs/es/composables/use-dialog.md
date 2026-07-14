# useDialog

API imperativa de dialog. Requiere el plugin Pomikit (overlays por defecto) o `<PomikitRoot>`.

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

Devuelve `Promise<boolean>` (`true` si se confirmó).

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

## Notas

- Prefiere `<Dialog>` declarativo para formularios de varios campos.
- Prefiere `confirm` para decisiones destructivas o de un solo paso.
- No introduzcas apps nuevas sobre el `DialogProvider` deprecado.
