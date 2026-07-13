# Input

Champ prêt à l’emploi. L’apparence vient du Design Kit.

## Import

```ts
import { Input, Field, rules } from 'pomikit-ui'
```

## Chemin recommandé

```vue
<Input />

<Input v-model="email" type="email" placeholder="Email" required />

<Field label="Email" helper="We'll never share your email." required>
  <Input v-model="email" type="email" placeholder="john@company.com" />
</Field>
```

Préférer `Field` pour label / helper / error.

## Intent

| Option | Comportement |
| --- | --- |
| `type="search"` | Icône loupe + clear |
| `type="password"` | Toggle afficher / masquer |
| `clearable` | Bouton clear |
| `rules` | Validation blur + submit |
| `required` | Marqué + a11y |

## Props d’intention

| Prop | Type | Défaut |
| --- | --- | --- |
| `modelValue` | `string` | `''` |
| `placeholder` | `string` | — |
| `type` | `InputType` | `'text'` |
| `required` / `disabled` / `readonly` | `boolean` | `false` |
| `clearable` | `boolean` | `false` |
| `rules` | `InputRule[]` | `[]` |
| `commitDelay` | `number` | search: `300`, sinon `0` |
| `label` / `hint` / `error` | `string` | standalone (préférer Field) |

## Escape hatches

| Prop | Notes |
| --- | --- |
| `size` | `sm` \| `md` \| `lg` — rare ; le kit porte déjà la densité |

## Slots

`label`, `leading`, `trailing`

## Expose

- `validate()`
- `focusField()`
