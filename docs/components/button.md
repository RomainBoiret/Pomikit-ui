# Button

Primary action control. Lead with intent: async clicks, confirmation, and navigation. The Design Kit owns look and feel.

## Basic

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'
</script>

<template>
  <Button>Save</Button>
</template>
```

## Async click

If the click handler returns a thenable, Button enters a busy phase until it settles. With `feedback` (default `true`), a short success or error flash follows.

```vue
<script setup lang="ts">
import { Button } from 'pomikit-ui'

async function onSave() {
  await api.save()
}
</script>

<template>
  <Button @click="onSave" busy-text="Saving…" success-text="Saved">Save</Button>
</template>
```

## Confirm

Require a second click before committing. `true` uses the default armed label; a string sets a custom one.

```vue
<template>
  <Button :confirm="true" @click="remove">Delete</Button>
  <Button confirm="Really delete?" @click="remove">Delete</Button>
</template>
```

## Link intent

Pass `href` (and optional `target` / `rel`) for navigational actions.

```vue
<template>
  <Button href="/settings">Settings</Button>
  <Button href="https://example.com" target="_blank" rel="noopener noreferrer">
    External
  </Button>
</template>
```

## Common props

| Prop | Intent |
| --- | --- |
| `confirm` | Second-click commit |
| `href` | Render as link |
| `loading` | Controlled busy (merges with async intent) |
| `disabled` | Non-interactive |
| `busyText` / `successText` / `errorText` | Progressive label disclosure |
| `feedback` | Toggle post-settle flash (default `true`) |
| `block` | Full-width layout |

## Advanced escape hatches

`variant`, `tone`, and `size` exist for rare exceptions. Prefer the Design Kit for brand and density. Do not treat these as the primary Button API.
