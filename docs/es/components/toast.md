# Toast

Feedback transitorio. Llama a `useToast()` tras registrar el plugin Pomikit o envolver con `<PomikitRoot>`.

## Uso

```ts
import { useToast } from 'pomikit-ui'

const toast = useToast()

toast.show('Copied')
toast.success('Saved', 'Your changes are live.')
toast.error('Upload failed', 'Try again in a moment.')
toast.warning('Quota high')
toast.info('New version available')
```

## API

```ts
type ToastInput = {
  title: string
  description?: string
  tone?: 'success' | 'danger' | 'warning' | 'info'
  duration?: number // ms
}

type ToastApi = {
  show: (input: ToastInput | string) => number
  success: (title: string, description?: string) => number
  error: (title: string, description?: string) => number
  warning: (title: string, description?: string) => number
  info: (title: string, description?: string) => number
  dismiss: (id: number) => void
  clear: () => void
}
```

Los helpers mapean el outcome al tone para que no elijas colores a mano.

## Setup

```ts
app.use(Pomikit, { toastDuration: 4200 })
```

O:

```vue
<PomikitRoot toast-label="Notifications">
  <App />
</PomikitRoot>
```

`ToastProvider` está deprecado. Prefiere plugin / PomikitRoot. Detalles: [useToast](/composables/use-toast).
