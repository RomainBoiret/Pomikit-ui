# useDialog

명령형 dialog API. Pomikit 플러그인(기본 overlays) 또는 `<PomikitRoot>`가 필요합니다.

## confirm

```ts
import { useDialog } from 'pomikit-ui'

const dialog = useDialog()

const ok = await dialog.confirm({
  title: 'Remove member?',
  description: 'They will lose access immediately.',
  confirmLabel: 'Remove',
  cancelLabel: 'Keep',
  tone: 'danger',
  onConfirm: () => api.removeMember(id),
})
```

`Promise<boolean>`을 반환합니다 (확인이면 `true`).

## Options

```ts
type DialogConfirmOptions = {
  title: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
  tone?: PomiTone
  /** Confirm button stays busy while the Promise settles. */
  onConfirm?: () => unknown
}
```

## 참고

- 여러 필드 폼은 선언적 `<Dialog>`를 우선하세요.
- 파괴적이거나 일회성 결정은 `confirm`을 우선하세요.
- deprecated `DialogProvider`로 새 앱을 시작하지 마세요.
