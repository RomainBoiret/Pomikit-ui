# Philosophie

**Moins de décisions. De meilleures interfaces.**

Pomikit demande le moins de décisions possible aux développeurs tout en livrant une UI premium par défaut. Le design est décidé une fois ; les composants consomment des tokens et déduisent le comportement à partir de l'intention métier.

## Filtre de décision

Avant d'ajouter une prop ou une fonctionnalité, demandez-vous :

> Cela impose-t-il une décision supplémentaire au développeur ?

Si **oui**, essayez dans cet ordre :

1. Design Kit / tokens (thématiser l'application une fois)
2. Inférence d'intention (clic async, `pending`, `options`, `error`)
3. Comportement conventionnel (valeurs par défaut sensées)

N'exposez une prop qu'ensuite, et seulement lorsqu'elle exprime une **intention métier**.

## Intention vs esthétique

| Préférer (intention) | Éviter comme API produit (esthétique) |
| --- | --- |
| `confirm`, `href`, `required` | `variant`, `tone`, `size` |
| `pending`, `error`, `options` | `radius`, `density` sur les composants |
| gestionnaires de clic async | boutons couleur / ombre par instance |

Les props de style peuvent exister comme échappatoires avancées. Elles ne sont pas le produit : gardez-les hors de Premiers pas, des démos du playground et des exemples principaux.

## Concevoir une fois

```ts
createTheme({ design: 'linear', accent: '#5B5FFF' })
```

Les Design Kits possèdent les couleurs, le rayon, les ombres, l'espacement, la typographie, le mouvement et les surfaces. Les composants ne branchent pas sur `design === …` ; ils lisent des tokens CSS.

## Position documentaire

Menez avec l'API minimale. Les stories Storybook d'échappatoire sont des outils d'isolation internes. Ce site de documentation est la surface officielle.
