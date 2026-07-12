# Thème (Design DNA)

Pomikit ne propose pas 200 tokens manuels : tu décris l’intention du thème, `createTheme` génère les variables CSS.

## Plugin

```ts
import { Pomikit, createTheme } from 'pomikit-ui'

app.use(Pomikit, {
  theme: createTheme({
    accent: '#5B5FFF',
    radius: 'soft',
    density: 'comfortable',
    motion: 'expressive',
    mode: 'light',
    personality: 'glass',
  }),
})
```

Tu peux aussi passer un objet d’options directement (équivalent à `createTheme(options)`) :

```ts
app.use(Pomikit, { theme: { accent: '#FF5A7A', mode: 'dark' } })
```

## `createTheme` / `applyTheme`

```ts
import { createTheme, applyTheme } from 'pomikit-ui'

const theme = createTheme({ accent: '#5B5FFF', personality: 'playful' })
applyTheme(theme) // document.documentElement par défaut
```

Utile pour changer de thème à chaud (comme le playground).

## Options

| Option | Type | Défaut | Effet |
| --- | --- | --- | --- |
| `accent` | `string` (hex) | `#5B5FFF` | Couleur de marque |
| `radius` | `sharp` \| `soft` \| `round` | `soft` | Rayons |
| `density` | `compact` \| `comfortable` \| `spacious` | `comfortable` | Hauteurs / paddings |
| `motion` | `none` \| `subtle` \| `expressive` | `expressive` | Durées / easings |
| `mode` | `light` \| `dark` | `light` | Surfaces / contraste |
| `personality` | `minimal` \| `glass` \| `playful` | — | Preset qui compose les axes |

### Personalities

| Personality | Comportement typique |
| --- | --- |
| `minimal` | Rayons plus nets, motion douce, densité compacte |
| `glass` | Surfaces floutées, rayons plus ronds, motion expressive |
| `playful` | Accent plus vif, densité spacious, rayons round |

## Variables générées

Exemples de custom properties appliquées :

- `--pomi-accent`, `--pomi-accent-hover`, `--pomi-accent-soft`
- `--pomi-bg`, `--pomi-fg`, `--pomi-muted`, `--pomi-border`, `--pomi-surface`
- `--pomi-radius`, `--pomi-control-h-md`, `--pomi-duration-mid`
- `--pomi-focus-ring`, `--pomi-shadow`

Attributs data sur la racine : `data-pomi-radius`, `data-pomi-density`, `data-pomi-motion`, `data-pomi-mode`, `data-pomi-personality`.

## Accessibilité

`motion: 'none'` et `prefers-reduced-motion` désactivent / réduisent les animations (voir aussi le CSS de base Pomikit).
