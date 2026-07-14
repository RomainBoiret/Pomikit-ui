# Development tools

## Docs site (official)

This VitePress site is the **official** documentation: Getting Started, Design Kits, intent APIs, and component references. Prefer these pages and the [Playground](/playground) when learning or sharing Pomikit.

## Storybook (internal)

Storybook is an **internal isolation** workspace for contributors:

- Visual regression and component states
- Escape-hatch stories (`variant`, `tone`, `size`) kept out of primary docs
- Accessibility and interaction checks in isolation

It is not the product surface. Do not treat Storybook stories as the canonical API guide; they often explore advanced edges that Getting Started deliberately hides.
