# Contributing

## Principles

1. Prefer inference over props.
2. If it does not remove app boilerplate, it probably should not ship.
3. Beautiful defaults + Theme DNA — never gadget motion.
4. Respect `prefers-reduced-motion` and accessibility.
5. Keep the repo understandable in minutes.

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
src/theme        createTheme + plugin
src/tokens       DNA CSS defaults
src/styles       base + aggregate CSS
src/utils        thenable, rules, cn
docs/            VitePress documentation
stories/         Storybook stories
playground/      local demo app
```

## Documentation

```bash
pnpm docs          # http://localhost:5173 (VitePress)
pnpm docs:build
```

Update `docs/` when the public API or intent behavior changes.

## Pull requests

- Keep changes focused
- Add/adjust Vitest for intent behaviors
- Update README / docs when the public API changes
