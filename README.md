# Pomikit

**Less decisions. Better interfaces.**

Created by [Romain Boiret](https://github.com/RomainBoiret).

Pomikit is a focused Vue 3 component library. Import a component, import the stylesheet, and you get a polished UI. No theme setup required. No per-component styling decisions on the happy path.

```bash
npm install pomikit-ui
```

Browse the official site (home + docs):

```bash
pnpm docs:dev
```

## Why Pomikit exists

Most UI libraries push too many decisions onto every call site: tokens, variants, sizes, themes, and wiring for loading or empty states. That cost becomes boilerplate and inconsistent interfaces.

Pomikit reduces that load. Components infer common behaviors from how you use them. Theme is optional. When you customize, you choose a Design Kit once for the whole application instead of restyling every Button and Input.

## Principles

1. **Zero-config** - Import a component and the stylesheet. Defaults already look intentional (kit `linear`).
2. **Theme is optional** - Customize only when your product needs a distinct identity.
3. **Design Kits shape the app** - Colors, radius, density, motion, elevation, and typography are decided once. Not prop by prop.
4. **Intent over style props** - Prefer what the user is trying to do (async action, confirm, pending list) over choosing `variant`, `tone`, or `size` everywhere.
5. **Style props are escape hatches** - Available when needed. Not the product. Not what docs and examples lead with.
6. **Ship less** - A feature lands only if it removes app boilerplate. The catalog stays focused.

**Decision filter:** before adding a prop or feature, ask whether it requires an extra decision from the developer. If yes, prefer a Design Kit default, intent inference, or a conventional behavior first.

## Installation

**Requirements:** Vue `^3.4`, Node `>= 20`

```bash
npm install pomikit-ui
# or
pnpm add pomikit-ui
# or
yarn add pomikit-ui
```

Import the stylesheet once in your app entry:

```ts
import 'pomikit-ui/styles.css'
```

## Quick Start

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
import 'pomikit-ui/styles.css'

async function save() {
  await fetch('/api/profile', { method: 'POST' })
}
</script>

<template>
  <Button @click="save">Save</Button>
</template>
```

That is enough for basic UI. No plugin, no theme object.

When you need toasts, confirm dialogs, or a Design Kit, register the Pomikit plugin (it also wires Dialog and Toast services):

```ts
import { createApp } from 'vue'
import { Pomikit, createTheme } from 'pomikit-ui'
import 'pomikit-ui/styles.css'
import App from './App.vue'

createApp(App)
  .use(Pomikit, {
    theme: createTheme({
      design: 'linear',
      accent: '#5B5FFF',
      mode: 'system',
    }),
  })
  .mount('#app')
```

Without the plugin, wrap with `<PomikitRoot>` instead (see [Usage examples](#usage-examples)).

## First component: Button

Button shows the intent model clearly.

### Async actions

If `@click` returns a Promise (or any thenable), Button handles busy, then success or error. You do not wire controlled `loading` for the common path.

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'

async function save() {
  await fetch('/api/save', { method: 'POST' })
}
</script>

<template>
  <Button @click="save">Save</Button>
</template>
```

### Confirm before acting

`confirm` arms on the first click and runs the action on the second. Escape or blur cancels.

```vue
<Button confirm @click="remove">Delete</Button>
<Button confirm="Delete project?" @click="remove">Delete</Button>
```

### Links

```vue
<Button href="/guide/getting-started">Documentation</Button>
```

Slots: `default`, `leading`, `trailing`. Controlled `loading` remains an escape hatch; prefer the Promise path when you can.

## Optional theme (Design Kit)

Without `createTheme`, CSS defaults match the **`linear`** kit. When your product needs a brand voice, choose a Design Kit once for the whole app.

```ts
import { Pomikit, createTheme } from 'pomikit-ui'

app.use(Pomikit, {
  theme: createTheme({
    design: 'linear',
    accent: '#5B5FFF',
    mode: 'system',
  }),
})
```

Or hot-swap:

```ts
import { createTheme, applyTheme } from 'pomikit-ui'

applyTheme(createTheme({ design: 'glass', accent: '#5B5FFF' }))
```

### Design Kits

| Kit | Character |
| --- | --- |
| `linear` | Minimal, product-default |
| `glass` | Soft translucent surfaces |
| `editorial` | Content-forward, editorial type feel |
| `soft` | Friendly, approachable |
| `playful` | Brighter, more expressive |

Each kit sets colors, radius, shadows, spacing, motion, typography, and surfaces. Components do not branch on kit names.

### Optional axes

All options below are optional overrides. Prefer picking a kit; use axes sparingly.

| Option | Values | Role |
| --- | --- | --- |
| `design` | `linear` \| `glass` \| `editorial` \| `soft` \| `playful` | App identity |
| `accent` | hex string | Brand color |
| `mode` | `light` \| `dark` \| `system` | Color scheme (`system` follows the OS) |
| `radius` | axis override | Corner scale |
| `density` | axis override | Control height and padding |
| `motion` | axis override | Duration and easing |
| `elevation` | axis override | Shadow / depth feel |

`motion: 'none'` and `prefers-reduced-motion` keep motion restrained.

## Available components

| Component | Role |
| --- | --- |
| `Button` | Actions with async and confirm intent |
| `Card` | Content surface; `href` or `selectable` when needed |
| `Field` | Form chrome: label, helper, error |
| `Input` | Text input with optional rules |
| `Select` | Select with `options` and `pending` |
| `Checkbox` | Binary / indeterminate choice |
| `Switch` | On / off choice |
| `Dropdown` (+ trigger, content, item, separator, sub) | Action menus |
| `Dialog` | Declarative modal |
| `Collection` | Lists with pending, empty, and error intent |
| `Skeleton` | Loading placeholders |
| `EmptyState` | Empty result surface |
| `ErrorState` | Error surface with optional retry |
| `PomikitRoot` | App shell for theme services without the plugin |

### Composables

| API | Requires | Purpose |
| --- | --- | --- |
| `useToast` | Pomikit plugin or `PomikitRoot` | Imperative notifications |
| `useDialog` | Pomikit plugin or `PomikitRoot` | Imperative confirm flows |
| `useFieldContext` | `Field` ancestor | Shared field state for custom controls |

### Utilities

`rules`, `runRules`, `cn`, `createTheme`, `applyTheme`, `applyThemeOptions`, `resolveColorScheme`, `Pomikit`, `DESIGNS`

Legacy `ToastProvider` and `DialogProvider` remain exported for migration. Prefer the plugin or `PomikitRoot`.

## Usage examples

### Field and Input

Field owns chrome. Input owns typing and validation.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Field, Input, rules } from 'pomikit-ui'

const email = ref('')
</script>

<template>
  <Field label="Email" required helper="Work email only">
    <Input v-model="email" type="email" :rules="[rules.email()]" />
  </Field>
</template>
```

### Select

```vue
<Select v-model="country" :options="countries" :pending="loading" />
```

### Collection

First load with `pending` shows skeletons. Refresh keeps the list visible. Empty and error states are handled without a hand-rolled state machine.

```vue
<Collection
  :items="rows"
  :pending="loading"
  :error="error"
  @retry="reload"
>
  <template #item="{ item }">
    {{ item.name }}
  </template>
</Collection>
```

### Dialog (declarative)

```vue
<Dialog title="Rename workspace" description="Choose a new name.">
  <template #trigger>
    <Button>Open</Button>
  </template>
  <Input v-model="name" />
  <template #footer>
    <Button @click="save">Save</Button>
  </template>
</Dialog>
```

### Toast and confirm

With the Pomikit plugin registered, composables work without manual providers:

```vue
<script setup lang="ts">
import { Button, useDialog, useToast } from 'pomikit-ui'

const toast = useToast()
const dialog = useDialog()

async function remove() {
  const ok = await dialog.confirm({
    title: 'Delete workspace?',
    description: 'This cannot be undone.',
    confirmLabel: 'Delete',
    onConfirm: async () => {
      await api.delete()
    },
  })
  if (ok) toast.success('Deleted')
}
</script>

<template>
  <Button @click="remove">Delete</Button>
</template>
```

Without the plugin:

```vue
<script setup lang="ts">
import { PomikitRoot, applyTheme, createTheme } from 'pomikit-ui'

applyTheme(createTheme({ design: 'editorial' }))
</script>

<template>
  <PomikitRoot>
    <RouterView />
  </PomikitRoot>
</template>
```

### Card

```vue
<Card href="/settings" title="Settings" description="Manage your workspace." />
```

### Dropdown

```vue
<script setup lang="ts">
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  Button,
} from 'pomikit-ui'
</script>

<template>
  <Dropdown>
    <DropdownTrigger>
      <Button>Actions</Button>
    </DropdownTrigger>
    <DropdownContent>
      <DropdownItem @select="rename">Rename</DropdownItem>
      <DropdownItem @select="remove">Delete</DropdownItem>
    </DropdownContent>
  </Dropdown>
</template>
```

## Less decisions. Better interfaces.

Pomikit exists to lower the number of decisions between an idea and a clear interface.

Every prop at a call site is a decision under deadline. Every required theme step before first paint is friction. Pomikit removes decisions that do not improve the product:

- Defaults are already beautiful, so day one does not need a design-system project.
- Behavior is inferred from intent (Promises, confirm, pending lists), so you do not rebuild the same loading UX on every screen.
- Design Kits customize the whole app, so you are not retuning every component by hand.
- Style props stay secondary. The happy path stays short.

The goal is not more components. It is fewer decisions and better interfaces.

## Roadmap (v1)

Pomikit is at **0.3.1**. Foundations, redesign, and docs playground work for Design Kits and intent APIs are largely in place.

Toward a solid v1 release:

- Finish simplify work (leaner exports, deprecate style escape hatches in the public surface)
- Publish a stable npm release
- Host the docs site (`pnpm docs:dev`) publicly

Explicitly not in scope for v1: a PrimeVue-sized catalog, DataTable parity, Radio in core, or a monorepo split.

## Contributing

Contributions that strengthen the intent model and remove app boilerplate are welcome.

**Principles**

1. Prefer inference over props.
2. Design Kits and tokens own aesthetics.
3. If it does not remove app boilerplate, it probably should not ship.
4. Docs and examples show the minimal API only.
5. Style props are escape hatches, never the product.
6. Respect accessibility and `prefers-reduced-motion`.
7. Keep the repository understandable quickly.

**Setup**

```bash
pnpm install
pnpm test
pnpm storybook
pnpm docs:dev
pnpm dev
pnpm build
```

| Command | Purpose |
| --- | --- |
| `pnpm docs:dev` | Official site (home + documentation) |
| `pnpm test` | Unit tests (Vitest) |
| `pnpm storybook` | Internal component isolation |
| `pnpm dev` | Local playground app |
| `pnpm build` | Library build |
| `pnpm typecheck` / `pnpm lint` | Local quality gates |

**Pull requests:** keep them focused, cover intent behavior with tests when behavior changes, and update this README when the public API changes.

## License

[MIT](./LICENSE) © 2026-present [Romain Boiret](https://github.com/RomainBoiret)
