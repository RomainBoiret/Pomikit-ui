# Checkbox · Switch · Radio

Famille de choix — même langage visuel, Field-aware.

## Import

```ts
import { Checkbox, Switch, Radio, RadioGroup } from 'pomikit-ui'
```

## Checkbox

```vue
<Checkbox v-model="accept" label="Accept terms" />
```

| Prop | Type | Défaut |
| --- | --- | --- |
| `label` | `string` | — |
| `size` | `PomiSize` | `'md'` |
| `disabled` | `boolean` | `false` |
| `required` | `boolean` | `false` |
| `id` | `string` | — |
| `name` | `string` | — |
| `value` | `string` | `'on'` |

`v-model`: `boolean | 'indeterminate'`

## Switch

```vue
<Switch v-model="compact" label="Compact density" />
```

| Prop | Type | Défaut |
| --- | --- | --- |
| `label` | `string` | — |
| `size` | `PomiSize` | `'md'` |
| `disabled` | `boolean` | `false` |
| `required` | `boolean` | `false` |
| `id` | `string` | — |
| `name` | `string` | — |

`v-model`: `boolean`

## RadioGroup + Radio

```vue
<Field label="Plan">
  <RadioGroup v-model="plan">
    <Radio value="starter" label="Starter" />
    <Radio value="pro" label="Pro" />
  </RadioGroup>
</Field>
```

### RadioGroup

| Prop | Type | Défaut |
| --- | --- | --- |
| `size` | `PomiSize` | `'md'` |
| `disabled` | `boolean` | `false` |
| `required` | `boolean` | `false` |
| `name` | `string` | — |
| `orientation` | `'horizontal' \| 'vertical'` | `'vertical'` |

`v-model`: `string`

### Radio

| Prop | Type | Défaut |
| --- | --- | --- |
| `value` | `string` | **requis** |
| `label` | `string` | — |
| `disabled` | `boolean` | `false` |
| `id` | `string` | — |

## Field

Dans un `Field`, ces contrôles héritent de `controlId`, `required`, `describedBy` et `aria-invalid`.
