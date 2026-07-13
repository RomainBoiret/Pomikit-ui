# Contributing

## Principles

1. **Less decisions.** Prefer inference over props.
2. **Beautiful by default. Smart by design.** Design Kits + tokens own aesthetics.
3. If it does not remove app boilerplate, it probably should not ship.
4. Docs / examples / Getting Started show the **minimal** API only.
5. Style props (`variant`, `tone`, `size`, …) are escape hatches — never the product.
6. Respect `prefers-reduced-motion` and accessibility.
7. Keep the repo understandable in minutes.

## Decision filter (required)

Before adding a feature or prop, ask:

> Does this require an extra decision from the developer?

If **yes**, first try:

1. A Design Kit / token default
2. Intent inference (`Promise` → busy, `toast.success`, Field `required`)
3. A conventional behavior with no opt-in

Only expose a prop when none of the above is enough — and only if it expresses **business intent**, not pure aesthetics.

## Setup

```bash
pnpm install
pnpm test
pnpm storybook
pnpm build
```

## Structure

```
src/components   components
src/composables  useDialog, useToast, useField
src/theme        createTheme + Design Kits + plugin
src/tokens       DNA CSS defaults
src/styles       base + aggregate CSS
src/utils        thenable, rules, cn
docs/            VitePress documentation
stories/         Storybook (intent-first)
playground/      local demo app
```

## Documentation

```bash
pnpm docs:dev      # http://localhost:5173 (VitePress)
pnpm docs:build
```

Official surface = VitePress (+ home playground). Storybook = internal isolation tool.

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs three parallel gates:

| Job | Checks |
| --- | --- |
| **Quality** | `typecheck` · `lint` · `test` · `build` (library) |
| **Docs** | `docs:build` (VitePress) |
| **Storybook** | `build-storybook` (internal tool — still must compile) |

Local parity:

```bash
pnpm typecheck && pnpm lint && pnpm test && pnpm build
pnpm docs:build
pnpm build-storybook
```
