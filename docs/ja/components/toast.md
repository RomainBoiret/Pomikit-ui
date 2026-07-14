# Toast

一時的なフィードバック。Pomikit プラグイン登録後、または `<PomikitRoot>` で包んだ後に `useToast()` を呼び出します。

## 使い方

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

ヘルパーは結果を tone に写すので、色を手で選ぶ必要はありません。

## セットアップ

```ts
app.use(Pomikit, { toastDuration: 4200 })
```

または：

```vue
<PomikitRoot toast-label="Notifications">
  <App />
</PomikitRoot>
```

`ToastProvider` は非推奨です。plugin / PomikitRoot を優先。詳細：[useToast](/composables/use-toast)。
