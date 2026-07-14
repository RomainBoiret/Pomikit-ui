# Toast

Feedback transitório. Chame `useToast()` após registrar o plugin Pomikit ou envolver com `<PomikitRoot>`.

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

Os helpers mapeiam o outcome para o tone para você não escolher cores manualmente.

## Setup

```ts
app.use(Pomikit, { toastDuration: 4200 })
```

Ou:

```vue
<PomikitRoot toast-label="Notifications">
  <App />
</PomikitRoot>
```

`ToastProvider` está deprecado. Prefira plugin / PomikitRoot. Detalhes: [useToast](/composables/use-toast).
