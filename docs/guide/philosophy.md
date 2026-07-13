# Philosophie

**Less decisions. Better interfaces.**

Ou : **Beautiful by default. Smart by design.**

Pomikit n’existe pas pour exposer plus de composants ou plus de props.  
Elle existe pour être la bibliothèque Vue qui **demande le moins de décisions** au développeur — tout en produisant des interfaces premium.

## La promesse

```vue
<Button>Save</Button>
<Input v-model="email" />
<Card>…</Card>
```

Importer suffit. Déjà cohérent. Déjà digne d’une app moderne.

Le développeur ne choisit **presque jamais** `variant`, `tone`, `size`, `radius`, etc.

## Le design se décide une fois

```ts
createTheme({
  design: 'linear',
  accent: '#5B5FFF',
})
```

Couleurs, radius, ombres, spacing, typo, motion, surfaces, hover/focus : le [Design Kit](/guide/theming) décide pour **toute** l’app.

## Props = intention métier uniquement

| Intention (oui) | Esthétique (non) |
| --- | --- |
| `confirm`, `href`, `@click` | `variant`, `tone`, `size` |
| `required`, `placeholder`, `rules` | styliser chaque champ |
| `pending`, `error`, `options` | variantes Select / Card |
| `toast.success(...)` | Toast “success variant” |

Les props de style peuvent encore exister comme **escape hatches internes / avancées**.  
Elles ne sont pas le produit. Elles ne doivent pas apparaître dans Getting Started, playground, ni exemples principaux.

## Filtre de décision (obligatoire)

Avant d’ajouter une fonctionnalité ou une prop, poser :

> **Est-ce que cela demande une décision supplémentaire au développeur ?**

| Si oui → | D’abord chercher… |
| --- | --- |
| Un défaut via Design Kit / tokens | |
| Une inférence d’intent (`Promise` → busy, `toast.success`) | |
| Un comportement conventionnel (Field + required) | |

N’expose une prop que si **aucune** de ces voies ne suffit.

## Ce que Pomikit refuse d’être

- Une usine à 70 composants moyens
- Une API où chaque Button exige `variant` + `tone` + `size`
- Un système où le développeur “fait le design” composant par composant

## Ce que Pomikit veut être

La bibliothèque Vue qui **réduit la charge mentale** et livre une UI premium par défaut.

→ [Installation](/guide/getting-started) · [Intent](/guide/intent) · [Design Kits](/guide/theming)
