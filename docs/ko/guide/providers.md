# Root와 서비스

Dialog와 toast에는 서비스 호스트가 필요합니다. **Pomikit 플러그인** 또는 **`<PomikitRoot>`**를 우선하세요. 단독 `DialogProvider` / `ToastProvider`는 deprecated입니다.

## Pomikit 플러그인 (권장)

```ts
import { createApp } from 'vue'
import { Pomikit, createTheme } from 'pomikit-ui'
import App from './App.vue'

createApp(App)
  .use(Pomikit, {
    theme: createTheme({ design: 'linear', accent: '#34C759' }),
    toastDuration: 4200,
  })
  .mount('#app')
```

기본적으로 플러그인은:

1. 테마 토큰을 적용합니다 (`applyTheme` / `applyThemeOptions`)
2. dialog + toast 오버레이를 마운트해 `useDialog()`와 `useToast()`가 앱 전역에서 동작하게 합니다

오버레이를 직접 마운트할 때는 비활성화하세요:

```ts
app.use(Pomikit, {
  theme: { design: 'glass' },
  overlays: false,
})
```

## PomikitRoot

오버레이를 Vue 트리에 두고 싶을 때 사용합니다 (Nuxt 레이아웃, 범위 지정 루트, SSR 친화적 배치):

```vue
<script setup lang="ts">
import { PomikitRoot } from 'pomikit-ui'
</script>

<template>
  <PomikitRoot>
    <RouterView />
  </PomikitRoot>
</template>
```

Props: `toastDuration`, `toastLabel`. `overlays: false`인 플러그인과 함께 쓰거나, 여기서 오버레이를 마운트할 때 공유 stores에 의존합니다.

## Composables

```ts
import { useDialog, useToast } from 'pomikit-ui'

const dialog = useDialog()
const toast = useToast()

await dialog.confirm({ title: 'Delete project?' })
toast.success('Deleted')
```

## 레거시 providers

`DialogProvider`와 `ToastProvider`는 계속 export되지만 **deprecated**입니다. 테마와 서비스를 일관되게 유지하려면 `<PomikitRoot>` 또는 Pomikit 플러그인을 우선하세요.
