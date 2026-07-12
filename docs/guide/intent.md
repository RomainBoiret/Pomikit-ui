# Intent design

Pomikit privilégie **l’inférence** plutôt qu’une API à 70 props.

## Principes

1. **Prefer inference over props** — si le comportement peut être déduit, ne demande pas de le configurer.
2. **Si ça n’enlève pas de boilerplate app, ça ne devrait probablement pas ship.**
3. **Beautiful defaults** — le Design DNA porte le look ; le motion est intentionnel, pas gadget.
4. **A11y & reduced motion** — focus visibles, labels, `aria-*`, respect de `prefers-reduced-motion`.

## Exemples d’intent

### Button

```vue
<Button @click="() => fetch('/api/save')">Save</Button>
```

Si le handler retourne une Promise (thenable) :

1. phase `busy` (spinner / `busyText`)
2. puis flash `success` ou `error` (sauf `feedback={false}`)
3. largeur verrouillée pour éviter le layout shift

`confirm` demande un second clic avant d’exécuter l’action.

### Field + Input

```vue
<Field label="Email" required helper="Pro only">
  <Input v-model="email" :rules="[rules.email()]" />
</Field>
```

- Field possède le chrome (label, helper, error)
- Input se concentre sur la saisie
- IDs / `aria-describedby` / required sont partagés via contexte
- Validation au blur et au submit du formulaire parent

### Collection

```vue
<Collection :items="rows" :pending="loading" :error="err" @retry="reload">
  <template #item="{ item }">…</template>
</Collection>
```

- Premier chargement (`pending` + vide) → Skeleton
- Refresh (`pending` + items) → liste conservée + indicateur
- Erreur / empty gérés sans props de rendu manuelles

### Select

```vue
<Select v-model="id" :options="options" :pending="fetching" />
```

`options` + `pending` suffisent — pas d’API “async search 12 props” pour le cas standard.

## Quand ajouter une prop ?

Seulement si l’escape hatch est nécessaire (ex. `loading` contrôlé sur Button, `error` contrôlé sur Field/Input). Le chemin heureux reste sans friction.
