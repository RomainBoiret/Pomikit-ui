# Design Kits

One call themes the whole app: colors, radius, shadows, spacing, typography, motion, and surfaces. Components only consume tokens.

## Official kits

| Design | Character |
| --- | --- |
| `linear` | Minimal product UI. Cold greys, sparse shadows, airy spacing. **Default.** |
| `glass` | Soft glass. Discrete blur, luminous edges. |
| `editorial` | Content-first. Serif titles, low radius, almost no shadow. |
| `soft` | Warm and welcoming. Generous radius, gentle contrast. |
| `playful` | Lively but not cartoon. Stronger accent, rounder, more dynamic motion. |

```ts
import { DESIGNS } from 'pomikit-ui'

DESIGNS.linear // DesignKit
```

Zero-config (no `createTheme` / plugin theme) resolves to **`linear`**.

## createTheme and applyTheme

```ts
import { createTheme, applyTheme, applyThemeOptions } from 'pomikit-ui'

const theme = createTheme({
  design: 'glass',
  accent: '#5B5FFF',
  mode: 'system',
})

applyTheme(theme)

// Or shortcuts:
applyThemeOptions({ design: 'editorial', accent: '#0A2540' })
```

### Options

| Option | Type | Notes |
| --- | --- | --- |
| `design` | `ThemeDesign` | `linear` \| `glass` \| `editorial` \| `soft` \| `playful` |
| `accent` | `string` | Brand accent hex |
| `mode` | `ThemeMode` | `light` \| `dark` \| `system` |
| `radius` | `ThemeRadius` | Axis override: `sharp` \| `soft` \| `round` |
| `density` | `ThemeDensity` | `compact` \| `comfortable` \| `spacious` |
| `motion` | `ThemeMotion` | `none` \| `normal` \| `expressive` |
| `elevation` | `ThemeElevation` | `flat` \| `soft` \| `floating` |

Kits already set sensible axis defaults. Override axes only when you need a hybrid beyond the kit.

## Via the plugin

```ts
app.use(Pomikit, {
  theme: createTheme({ design: 'soft', accent: '#7C6AEF' }),
})
```

Passing a plain options object also works: `theme: { design: 'playful' }`.

## Playground

Try kits and axes live on the [Playground](/playground).
