# Input

Saisie textuelle — validation intent, search icon, clearable stable.

## Import

```ts
import { Input, Field, rules } from 'pomikit-ui'
```

## Exemples

```vue
<Field label="Name" required>
  <Input v-model="name" />
</Field>

<Input
  v-model="q"
  type="search"
  clearable
  placeholder="Search…"
  @update:committed="onSearch"
/>

<Input
  v-model="email"
  label="Email"
  :rules="[rules.required(), rules.email()]"
/>
```

Préférer `Field` pour le chrome ; `label` / `hint` / `error` restent supportés en standalone.

## Props

| Prop | Type | Défaut |
| --- | --- | --- |
| `modelValue` | `string` | `''` |
| `label` | `string` | — |
| `hint` | `string` | — |
| `error` | `string` | — |
| `placeholder` | `string` | — |
| `type` | `InputType` | `'text'` |
| `size` | `PomiSize` | `'md'` |
| `disabled` | `boolean` | `false` |
| `readonly` | `boolean` | `false` |
| `required` | `boolean` | `false` |
| `clearable` | `boolean` | `false` |
| `rules` | `InputRule[]` | `[]` |
| `commitDelay` | `number` | `300` si search, sinon `0` |
| `id` | `string` | — |
| `name` | `string` | — |
| `autocomplete` | `string` | — |

`InputType`: `'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number'`

## Emits

- `update:modelValue`
- `update:committed` — debounced (search-friendly)
- `clear`
- `valid` — `(valid: boolean)`

## Slots

`label`, `leading`, `trailing`

## Expose

- `validate()`
- `focusField()`

## Intent

- `type="search"` → icône loupe intégrée (sauf slot `leading`)
- `clearable` réserve l’espace du clear (pas de stretch à la saisie)
- Validation blur + submit formulaire parent ; focus premier invalide
- Voir aussi [Rules](/reference/rules)
