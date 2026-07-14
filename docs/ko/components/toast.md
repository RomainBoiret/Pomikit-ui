# Toast

일시적 피드백. Pomikit 플러그인을 등록하거나 `<PomikitRoot>`로 감싼 뒤 `useToast()`를 호출하세요.

## 사용법

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

헬퍼가 결과를 tone에 매핑하므로 색을 직접 고르지 않아도 됩니다.

## 설정

```ts
app.use(Pomikit, { toastDuration: 4200 })
```

또는:

```vue
<PomikitRoot toast-label="Notifications">
  <App />
</PomikitRoot>
```

`ToastProvider`는 deprecated입니다. plugin / PomikitRoot를 우선하세요. 자세한 내용: [useToast](/composables/use-toast).
