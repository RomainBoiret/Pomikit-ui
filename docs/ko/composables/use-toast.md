# useToast

일시적 결과를 위한 Toast API. Pomikit 플러그인 또는 `<PomikitRoot>`가 필요합니다.

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

결과 헬퍼가 tone을 설정하므로 호출부는 의도 우선으로 유지됩니다.

[Toast](/components/toast)와 [Root와 서비스](/guide/providers)를 보세요.
