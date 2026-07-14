# Toast

Transient feedback. Call `useToast()` after registering the Pomikit plugin or wrapping with `<PomikitRoot>`.

## Usage

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

Helpers map outcome to tone so you do not pick colors manually.

## Setup

```ts
app.use(Pomikit, { toastDuration: 4200 })
```

Or:

```vue
<PomikitRoot toast-label="Notifications">
  <App />
</PomikitRoot>
```

`ToastProvider` is deprecated. Prefer plugin / PomikitRoot. Full details: [useToast](/composables/use-toast).
