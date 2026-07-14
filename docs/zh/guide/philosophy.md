# 理念

**更少决策。更好界面。**

Pomikit 在默认提供优质 UI 的同时，向开发者索取尽可能少的决策。设计只做一次；组件消费 token，并从业务意图推断行为。

## 决策过滤器

在添加 prop 或功能之前，先问：

> 这是否需要开发者多做一个决策？

如果答案是**是**，按以下顺序尝试：

1. Design Kit / tokens（一次为主题化整个应用）
2. 意图推断（异步点击、`pending`、`options`、`error`）
3. 约定行为（合理默认值）

只有在此之后才暴露 prop，并且仅当它表达**业务意图**时才可以。

## 意图 vs 美学

| 优先（意图） | 避免作为产品 API（美学） |
| --- | --- |
| `confirm`、`href`、`required` | `variant`、`tone`、`size` |
| `pending`、`error`、`options` | 组件上的 `radius`、`density` |
| 异步点击处理 | 按实例调整颜色 / 阴影旋钮 |

样式 prop 可作为高级逃生舱存在。它们不是产品本身：请勿放进快速开始、演示台演示和主要示例。

## 设计一次

```ts
createTheme({ design: 'linear', accent: '#5B5FFF' })
```

Design Kits 负责颜色、圆角、阴影、间距、排版、动效和表面。组件不会根据 `design === …` 分支；它们读取 CSS tokens。

## 文档立场

以最小 API 作为引导。Storybook 的逃生舱故事是内部隔离工具。本站才是官方表面。
