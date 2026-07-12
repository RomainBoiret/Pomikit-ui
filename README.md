# Pomikit

**Beautiful by default. Components that understand your intent.**

```bash
pnpm add pomikit-ui
```

## Documentation

```bash
pnpm docs
```

Site VitePress dans [`docs/`](./docs) — installation, thème, intent, API de chaque composant.

| Ressource | Commande |
| --- | --- |
| Docs | `pnpm docs` |
| Playground | `pnpm dev` |
| Storybook | `pnpm storybook` |

## Quick start

```ts
import { createApp } from 'vue'
import {
  Pomikit,
  createTheme,
  DialogProvider,
  ToastProvider,
} from 'pomikit-ui'
import 'pomikit-ui/styles.css'

createApp(App)
  .use(Pomikit, { theme: createTheme({ accent: '#5B5FFF' }) })
  .mount('#app')

// Root template:
// <ToastProvider><DialogProvider><App /></DialogProvider></ToastProvider>
```

## Catalog (focused)

| Component | Intent highlights |
| --- | --- |
| **Button** | Promise → busy → success/error; `confirm` |
| **Field** + **Input** | Chrome vs typing; rules on blur/submit |
| **Select** | `options` + `pending` (no 70-prop API) |
| **Checkbox** / **Switch** / **Radio** | Same family; Field-aware |
| **Dropdown** | Trigger slot + items |
| **Dialog** + `useDialog().confirm()` | Promise confirm |
| **Toast** + `useToast` | `success` / `error` / `show` |
| **Collection** | `pending` first-load vs refresh |
| **Card** | `href` / `selectable` |
| **Skeleton** | Shimmer placeholders |

Supporting primitives: `EmptyState`, `ErrorState`.

## Theme DNA

```ts
createTheme({
  accent: '#5B5FFF',
  radius: 'soft',
  density: 'comfortable',
  motion: 'expressive',
  personality: 'glass', // minimal | glass | playful
})
```

## Develop

```bash
pnpm install
pnpm docs
pnpm storybook
pnpm dev
pnpm test
pnpm build
```

See [ROADMAP.md](./ROADMAP.md) and [CONTRIBUTING.md](./CONTRIBUTING.md).
