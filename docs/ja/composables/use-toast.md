# useToast

一時的な結果向けの Toast API。Pomikit プラグインまたは `<PomikitRoot>` が必要です。

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

結果ヘルパーが tone を設定するので、呼び出し側は意図優先のままです。

[Toast](/components/toast) と [Root とサービス](/guide/providers) を参照。
