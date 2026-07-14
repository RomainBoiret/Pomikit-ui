# useToast

API toast pour les résultats transitoires. Nécessite le plugin Pomikit ou `<PomikitRoot>`.

## Helpers

```ts
import { useToast } from 'pomikit-ui'

const toast = useToast()

toast.success('Profile updated')
toast.error('Payment failed', 'Card was declined.')
toast.warning('Almost out of seats')
toast.info('Sync complete')

const id = toast.show({
  title: 'Uploading…',
  description: 'Large file',
  tone: 'info',
  duration: 8000,
})
toast.dismiss(id)
toast.clear()
```

## Types

```ts
type ToastTone = 'success' | 'danger' | 'warning' | 'info'

type ToastInput = {
  title: string
  description?: string
  tone?: ToastTone
  duration?: number
}
```

Les helpers de résultat fixent le tone pour vous afin que le site d'appel reste centré sur l'intention.

Voir [Toast](/components/toast) et [Root et services](/guide/providers).
