# Pomikit

Elegant, predictable, effortless Vue 3 UI components.

```bash
pnpm add pomikit-ui
```

```ts
import { Button, Input } from 'pomikit-ui'
import 'pomikit-ui/styles.css'
```

## Philosophy

- **Elegant** — clean interface, subtle motion, timeless defaults
- **Predictable** — shared sizes, variants, and tones across components
- **Effortless** — a few lines should be enough for a polished result

Defaults are overridable via CSS variables. Pomikit does not impose a brand.

## Components (MVP)

- `Button`
- `Badge`
- `Card`
- `Input`
- `Dialog` (built on [Reka UI](https://reka-ui.com) for accessibility primitives)

## Local development

```bash
pnpm install
pnpm storybook    # docs & variants
pnpm dev          # playground app
pnpm test
pnpm build
```

## Theming

Override tokens once in your app:

```css
:root {
  --pomi-color-primary: #0f766e;
  --pomi-radius: 10px;
  --pomi-font: "Source Sans 3", system-ui, sans-serif;
}
```

See [CONVENTIONS.md](./CONVENTIONS.md) for API rules and [ROADMAP.md](./ROADMAP.md) for what’s next.
