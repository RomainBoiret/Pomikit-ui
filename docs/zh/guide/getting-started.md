# 快速开始

Pomikit 是一个围绕零配置默认值和意图驱动 API 构建的 Vue 3 组件库。安装、导入样式，然后开始组合即可。

## 安装

```bash
npm install pomikit-ui
```

Peer dependency：Vue 3。

## 样式

在应用入口中只导入一次样式表：

```ts
import 'pomikit-ui/styles.css'
```

## 零配置用法

组件无需主题设置即可工作。默认使用 `linear` Design Kit。

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## 可选插件 + 主题

如需 toast/dialog 服务以及品牌化 Design Kit，请注册 Pomikit 插件：

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

插件会应用主题 token，并挂载 dialog/toast 叠加层。如果你更倾向使用 `<PomikitRoot>`，请参阅 [Root 与服务](/guide/providers)。

## 下一步

- [理念](/guide/philosophy)：Pomikit 如何选择 API
- [Design Kits](/guide/theming)：一次为主题化整个应用
- [意图设计](/guide/intent)：让组件推断行为
