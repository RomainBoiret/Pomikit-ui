# useToast

API de toast para outcomes transitorios. Requiere el plugin Pomikit o `<PomikitRoot>`.

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

Los helpers de outcome fijan el tone por ti para que el call site se mantenga intent-first.

Consulta [Toast](/components/toast) y [Root y servicios](/guide/providers).
