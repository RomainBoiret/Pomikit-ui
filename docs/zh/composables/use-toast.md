# useToast

短暂结果的 Toast API。需要 Pomikit 插件或 `<PomikitRoot>`。

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

结果辅助方法会为你设置 tone，调用处保持意图优先。

参见 [Toast](/components/toast) 与 [Root 与服务](/guide/providers)。
