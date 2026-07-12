# Dropdown

Menu d’actions — trigger en slot (`as-child`).

## Import

```ts
import { Dropdown, DropdownItem, DropdownSeparator, Button } from 'pomikit-ui'
```

## Exemple

```vue
<Dropdown>
  <template #trigger>
    <Button variant="outline">Menu</Button>
  </template>
  <DropdownItem @select="onEdit">Edit</DropdownItem>
  <DropdownItem @select="onDuplicate">Duplicate</DropdownItem>
  <DropdownSeparator />
  <DropdownItem tone="danger" @select="onDelete">Delete</DropdownItem>
</Dropdown>
```

## Dropdown

| Prop | Type | Défaut |
| --- | --- | --- |
| `label` | `string` | — |
| `modal` | `boolean` | `true` |

`v-model:open` — `boolean`

Slots : `trigger`, `default`

## DropdownItem

| Prop | Type | Défaut |
| --- | --- | --- |
| `disabled` | `boolean` | `false` |
| `tone` | `'neutral' \| 'danger'` | `'neutral'` |

Emit : `select`

## DropdownSeparator

Séparateur visuel — pas de props.
