# Dropdown

Menu d’actions premium — compound components, spring motion, icônes & raccourcis.

## Import

```ts
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  Button,
} from 'pomikit-ui'
```

## Chemin recommandé

```vue
<Dropdown>
  <DropdownTrigger>
    <Button>Actions</Button>
  </DropdownTrigger>

  <DropdownContent>
    <DropdownItem icon="copy" shortcut="⌘D">Duplicate</DropdownItem>
    <DropdownItem icon="pencil" shortcut="F2">Rename</DropdownItem>
    <DropdownSeparator />
    <DropdownItem icon="trash" tone="danger" shortcut="⌘⌫">
      Delete
    </DropdownItem>
  </DropdownContent>
</Dropdown>
```

`tone="danger"` sur un item = intention destructive (escape hatch utile ici).

## Submenu

```vue
<DropdownSub>
  <DropdownSubTrigger icon="share">Share</DropdownSubTrigger>
  <DropdownSubContent>
    <DropdownItem icon="link">Copy link</DropdownItem>
    <DropdownItem icon="external">Open in browser</DropdownItem>
  </DropdownSubContent>
</DropdownSub>
```

## Dropdown

| Prop | Type | Défaut |
| --- | --- | --- |
| `modal` | `boolean` | `true` |

`v-model:open` — `boolean`

Slots : `default` (`DropdownTrigger` + `DropdownContent`)

## DropdownTrigger

| Prop | Type | Défaut |
| --- | --- | --- |
| `label` | `string` | — |
| `disabled` | `boolean` | `false` |

Slot : élément unique (souvent `Button`) via `as-child`.

## DropdownContent

| Prop | Type | Défaut |
| --- | --- | --- |
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` |
| `sideOffset` | `number` | `6` |
| `collisionPadding` | `number` | `8` |

## DropdownItem

| Prop | Type | Défaut |
| --- | --- | --- |
| `icon` | `DropdownIconName` | — |
| `shortcut` | `string` | — |
| `active` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `tone` | `'neutral' \| 'danger'` | `'neutral'` |

Emit : `select`

Slots : `default`, `icon` (override de l’icône built-in)

Icônes built-in : `copy`, `pencil`, `trash`, `settings`, `plus`, `check`, `share`, `download`, `external`, `user`, `logout`, `folder`, `link`, `search`, `more`, `chevron-right`

## DropdownSeparator

Séparateur visuel — pas de props.

## Motion & Design Kits

L’ouverture suit les tokens de motion du Design Kit (`--pomi-motion-enter-y`, `--pomi-motion-enter-scale`, `--pomi-ease`).  
Respecte `motion: 'none' | 'normal' | 'expressive'` et `prefers-reduced-motion`.  
Surfaces, radius, ombres et blur viennent uniquement des tokens (`design: 'linear' | 'glass' | …`).
