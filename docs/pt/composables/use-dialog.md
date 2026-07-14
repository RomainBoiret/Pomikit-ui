# useDialog

API imperativa de dialog. Requer o plugin Pomikit (overlays por padrão) ou `<PomikitRoot>`.

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

Retorna `Promise<boolean>` (`true` se confirmado).

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

- Prefira `<Dialog>` declarativo para formulários com vários campos.
- Prefira `confirm` para decisões destrutivas ou de um único passo.
- Não introduza apps novas sobre o `DialogProvider` deprecado.
