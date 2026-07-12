# Card

Surface de contenu — navigable ou sélectionnable.

## Import

```ts
import { Card } from 'pomikit-ui'
```

## Exemples

```vue
<Card>
  <template #title>Project</template>
  <template #description>Short summary</template>
  Body content
  <template #footer>
    <Button variant="ghost" tone="neutral">Cancel</Button>
    <Button>Open</Button>
  </template>
</Card>

<Card href="https://example.com" target="_blank">
  <template #title>Docs</template>
</Card>

<Card selectable :selected="active" @update:selected="active = $event">
  <template #title>Pro plan</template>
</Card>
```

## Props

| Prop | Type | Défaut |
| --- | --- | --- |
| `variant` | `'elevated' \| 'outline' \| 'ghost'` | `'elevated'` |
| `size` | `PomiSize` | `'md'` |
| `titleAs` | `'h2' \| 'h3' \| 'h4' \| 'div'` | `'h3'` |
| `href` | `string` | — |
| `target` | `string` | — |
| `rel` | `string` | — |
| `selectable` | `boolean` | `false` |
| `selected` | `boolean` | `false` |

## Emits

- `update:selected` / `select` — `(value: boolean)`

## Slots

`media`, `header`, `title`, `description`, `actions`, `default`, `footer`

## Intent

- `href` → rend un `<a>`
- `selectable` → surface interactive (clic / Enter / Space)
- sinon → `<article>`
