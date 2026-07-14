# Toast

Retour transitoire. Appelez `useToast()` après avoir enregistré le plugin Pomikit ou enveloppé l'application avec `<PomikitRoot>`.

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

Les helpers associent le résultat au tone pour que vous n'ayez pas à choisir les couleurs manuellement.

## Configuration

```ts
app.use(Pomikit, { toastDuration: 4200 })
```

Ou :

```vue
<PomikitRoot toast-label="Notifications">
  <App />
</PomikitRoot>
```

`ToastProvider` est déprécié. Préférez le plugin / PomikitRoot. Détails complets : [useToast](/composables/use-toast).
