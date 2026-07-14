# Toast

短暂反馈。在注册 Pomikit 插件或用 `<PomikitRoot>` 包裹后，调用 `useToast()`。

## 用法

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

辅助方法把结果映射到 tone，因此无需手动挑选颜色。

## 设置

```ts
app.use(Pomikit, { toastDuration: 4200 })
```

或：

```vue
<PomikitRoot toast-label="Notifications">
  <App />
</PomikitRoot>
```

`ToastProvider` 已弃用。优先使用 plugin / PomikitRoot。完整细节：[useToast](/composables/use-toast)。
