# Conventions

Shared rules for every Pomikit component. Keep these stable — predictability is a product feature.

## Imports

Named exports only:

```ts
import { Button, Card } from 'pomikit-ui'
import 'pomikit-ui/styles.css'
```

No required `app.use()` plugin.

## Props

| Concept | Values | Default |
| --- | --- | --- |
| `size` | `sm` \| `md` \| `lg` | `md` |
| `variant` | `solid` \| `outline` \| `ghost` \| `soft` | depends on component |
| `tone` | `primary` \| `neutral` \| `danger` \| `success` | `primary` |

Booleans use plain names: `disabled`, `loading` — never `isDisabled`.

Form controls use `v-model` / `update:modelValue`.

## Naming

- Package: `pomikit-ui`
- CSS variables & classes: `pomi-*`
- Vue component names (DevTools): `PomiButton`, `PomiInput`, …

## File layout

Colocate stories and tests with the component:

```text
src/components/Button/
  Button.vue
  Button.stories.ts
  Button.test.ts
  button.css
  index.ts
```

## Accessibility baseline

- Semantic HTML first
- Visible `:focus-visible` styles
- Keyboard use for interactive components
- ARIA only when native semantics are not enough

## Styling

- Components use CSS classes + CSS variables
- Consumers import `pomikit-ui/styles.css` once
- Prefer tokens over hard-coded colors inside components
