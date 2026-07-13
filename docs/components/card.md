# Card

Surface de contenu — belle par défaut. Intent : lien ou sélection.

## Import

```ts
import { Card, Button } from 'pomikit-ui'
```

## Chemin recommandé

```vue
<Card>
  <template #title>Project</template>
  <template #description>Short summary</template>
  Body content
  <template #footer>
    <Button>Open</Button>
  </template>
</Card>

<Card href="/pricing">
  <template #title>Pro plan</template>
</Card>

<Card selectable :selected="active" @update:selected="active = $event">
  <template #title>Choose me</template>
</Card>
```

Pas de `elevated` / `bordered` / `rounded` à configurer — le kit s’en charge.

## Props d’intention

| Prop | Rôle |
| --- | --- |
| `href` / `target` / `rel` | Card lien |
| `selectable` / `selected` | Card sélectionnable |
| `titleAs` | Niveau de titre (`h2`…`div`) |

## Escape hatches

| Prop | Type | Défaut |
| --- | --- | --- |
| `variant` | `elevated` \| `outline` \| `ghost` | `elevated` |
| `size` | `PomiSize` | `md` |

## Emits

- `update:selected` / `select` — `(value: boolean)`

## Slots

`media`, `header`, `title`, `description`, `actions`, `default`, `footer`
