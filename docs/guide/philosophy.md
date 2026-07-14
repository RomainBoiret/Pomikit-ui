# Philosophy

**Less decisions. Better interfaces.**

Pomikit asks developers for the fewest decisions while shipping premium UI by default. Design is decided once; components consume tokens and infer behavior from business intent.

## Decision filter

Before adding a prop or feature, ask:

> Does this require an extra decision from the developer?

If **yes**, try in order:

1. Design Kit / tokens (theme the app once)
2. Intent inference (async click, `pending`, `options`, `error`)
3. Conventional behavior (sensible defaults)

Only then expose a prop, and only when it expresses **business intent**.

## Intent vs aesthetics

| Prefer (intent) | Avoid as product API (aesthetics) |
| --- | --- |
| `confirm`, `href`, `required` | `variant`, `tone`, `size` |
| `pending`, `error`, `options` | `radius`, `density` on components |
| async click handlers | per-instance color / shadow knobs |

Style props may exist as advanced escape hatches. They are not the product: keep them out of Getting Started, playground demos, and primary examples.

## Design once

```ts
createTheme({ design: 'linear', accent: '#5B5FFF' })
```

Design Kits own colors, radius, shadows, spacing, typography, motion, and surfaces. Components do not branch on `design === …`; they read CSS tokens.

## Docs stance

Lead with the minimal API. Storybook escape-hatch stories are internal isolation tools. This docs site is the official surface.
