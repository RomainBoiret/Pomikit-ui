# useToast

API de toast para outcomes transitórios. Requer o plugin Pomikit ou `<PomikitRoot>`.

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

Os helpers de outcome definem o tone por você para que o call site continue intent-first.

Veja [Toast](/components/toast) e [Root e serviços](/guide/providers).
