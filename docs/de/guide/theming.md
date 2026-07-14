# Design Kits

Ein Aufruf themt die ganze App: Farben, Radius, Schatten, Spacing, Typografie, Motion und Surfaces. Komponenten konsumieren nur Tokens.

## Offizielle Kits

| Design | Charakter |
| --- | --- |
| `linear` | Minimale Produkt-UI. Kalte Greys, sparsame Schatten, luftiges Spacing. **Default.** |
| `glass` | Weiches Glass. Diskreter Blur, leuchtende Kanten. |
| `editorial` | Content-first. Serif-Titel, niedriger Radius, kaum Schatten. |
| `soft` | Warm und einladend. Großzügiger Radius, sanfter Kontrast. |
| `playful` | Lebendig, aber nicht cartoonhaft. Stärkerer Accent, runder, dynamischere Motion. |

```ts
import { DESIGNS } from 'pomikit-ui'

DESIGNS.linear // DesignKit
```

Zero-config (kein `createTheme` / Plugin-Theme) löst zu **`linear`** auf.

## createTheme und applyTheme

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

### Optionen

| Option | Type | Notes |
| --- | --- | --- |
| `design` | `ThemeDesign` | `linear` \| `glass` \| `editorial` \| `soft` \| `playful` |
| `accent` | `string` | Marken-Accent als Hex |
| `mode` | `ThemeMode` | `light` \| `dark` \| `system` |
| `radius` | `ThemeRadius` | Achsen-Override: `sharp` \| `soft` \| `round` |
| `density` | `ThemeDensity` | `compact` \| `comfortable` \| `spacious` |
| `motion` | `ThemeMotion` | `none` \| `normal` \| `expressive` |
| `elevation` | `ThemeElevation` | `flat` \| `soft` \| `floating` |

Kits setzen bereits sinnvolle Achsen-Defaults. Achsen nur überschreiben, wenn du ein Hybrid jenseits des Kits brauchst.

## Über das Plugin

```ts
app.use(Pomikit, {
  theme: createTheme({ design: 'soft', accent: '#7C6AEF' }),
})
```

Ein flaches Optionsobjekt funktioniert ebenfalls: `theme: { design: 'playful' }`.

## Playground

Kits und Achsen live im [Playground](/playground) ausprobieren.
