# Intent design

Pomikit privilégie **l’inférence** plutôt qu’une API à 70 props.

Le design vient du [Design Kit](/guide/theming). Les props parlent uniquement du **métier**.

## Principes

1. **Prefer inference over props** — si le comportement peut être déduit, ne le configure pas.
2. **Si ça n’enlève pas de boilerplate app, ça ne devrait probablement pas ship.**
3. **Beautiful defaults** — le kit porte le look ; le motion est intentionnel.
4. **Filtre de décision** — toute nouvelle prop doit passer le test *« décision supplémentaire ? »* → [Philosophie](/guide/philosophy).
5. **A11y & reduced motion** — focus visibles, labels, `aria-*`, `prefers-reduced-motion`.

## Exemples

### Button

```vue
<Button @click="save">Save</Button>
<Button confirm="Delete project?" @click="remove">Delete</Button>
<Button href="/docs">Documentation</Button>
```

Promise → busy → success / error. `confirm` = second clic. Aucun `loading` manuel.

### Field + Input

```vue
<Field label="Email" required helper="Pro only">
  <Input v-model="email" :rules="[rules.email()]" />
</Field>
```

### Select · Collection · Toast · Dialog

```vue
<Select v-model="country" :options="countries" />
<Collection :items="users" :pending="loading" :error="error" />
```

```ts
toast.success('Profile saved')
await dialog.confirm({ title: 'Delete?', confirmLabel: 'Delete' })
```

## Ce que Pomikit refuse d’exposer en premier

```vue
<!-- Pas le produit — escape hatch seulement -->
<Button variant="outline" tone="neutral" size="sm">…</Button>
```

Le kit (`linear`, `glass`, …) remplace ces décisions au niveau app.
