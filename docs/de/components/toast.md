# Toast

Transient Feedback. `useToast()` nach Registrierung des Pomikit-Plugins oder Wrapping mit `<PomikitRoot>` aufrufen.

## Nutzung

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

Helper mappen Outcome auf Tone, damit du Farben nicht manuell wählst.

## Setup

```ts
app.use(Pomikit, { toastDuration: 4200 })
```

Oder:

```vue
<PomikitRoot toast-label="Notifications">
  <App />
</PomikitRoot>
```

`ToastProvider` ist deprecated. Bevorzuge Plugin / PomikitRoot. Details: [useToast](/composables/use-toast).
