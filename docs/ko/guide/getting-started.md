# 시작하기

Pomikit는 제로 설정 기본값과 의도 기반 API를 중심으로 만든 Vue 3 컴포넌트 라이브러리입니다. 설치하고 스타일을 가져온 뒤 조합을 시작하세요.

## 설치

```bash
npm install pomikit-ui
# or
pnpm add pomikit-ui
# or
yarn add pomikit-ui
```

Peer dependency: Vue 3.

## 스타일

앱 진입점에서 스타일시트를 한 번만 import하세요:

```ts
import 'pomikit-ui/styles.css'
```

## 제로 설정 사용

컴포넌트는 테마 설정 없이 동작합니다. 기본값은 `linear` Design Kit입니다.

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## 선택적 플러그인 + 테마

toast/dialog 서비스와 브랜드 Design Kit이 필요하면 Pomikit 플러그인을 등록하세요:

```ts
import { createApp } from 'vue'
import { Pomikit, createTheme } from 'pomikit-ui'
import 'pomikit-ui/styles.css'
import App from './App.vue'

const app = createApp(App)

app.use(Pomikit, {
  theme: createTheme({
    design: 'linear',
    accent: '#5B5FFF',
  }),
})

app.mount('#app')
```

플러그인은 테마 토큰을 적용하고 dialog/toast 오버레이를 마운트합니다. `<PomikitRoot>`를 선호한다면 [Root와 서비스](/guide/providers)를 참고하세요.

## 다음 단계

- [철학](/guide/philosophy): Pomikit가 API를 고르는 방식
- [Design Kits](/guide/theming): 앱 전체를 한 번에 테마화
- [의도 설계](/guide/intent): 컴포넌트가 동작을 추론하게 하기
