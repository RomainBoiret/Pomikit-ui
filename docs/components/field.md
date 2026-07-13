# Field

Chrome de formulaire — label, helper, erreur — sans polluer le contrôle.

## Import

```ts
import { Field, Input } from 'pomikit-ui'
```

## Exemple

```vue
<Field label="Email" required helper="Work email only">
  <Input v-model="email" type="email" :rules="[rules.email()]" />
</Field>

<Field label="Notifications" :error="notifyError">
  <Switch v-model="notify" label="Email me" />
</Field>
```

## Props

| Prop | Type | Défaut |
| --- | --- | --- |
| `label` | `string` | — |
| `helper` | `string` | — |
| `error` | `string` | — |
| `required` | `boolean` | `false` |
| `id` | `string` | — |

## Slots

`label`, `default` (contrôle), `helper`, `error`

## Intent

- Fournit un contexte aux enfants (`Input`, `Select`, `Checkbox`, `Switch`…)
- `error` contrôlé gagne sur l’erreur d’intent enfant
- Zone message réservée → pas de jump layout helper ↔ error
