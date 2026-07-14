# useToast

Toast-API für transient Outcomes. Erfordert das Pomikit-Plugin oder `<PomikitRoot>`.

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

Outcome-Helper setzen Tone für dich, damit der Call Site intent-first bleibt.

Siehe [Toast](/components/toast) und [Root & Services](/guide/providers).
