# useDialog

API dialog impérative. Nécessite le plugin Pomikit (overlays par défaut) ou `<PomikitRoot>`.

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

Retourne `Promise<boolean>` (`true` si confirmé).

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

- Préférez `<Dialog>` déclaratif pour les formulaires multi-champs.
- Préférez `confirm` pour les décisions destructives ou ponctuelles.
- N'introduisez pas de nouvelles applications sur le `DialogProvider` déprécié.
