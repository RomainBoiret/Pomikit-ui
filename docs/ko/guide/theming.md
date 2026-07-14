# Design Kits

한 번의 호출로 앱 전체를 테마화합니다: 색, 둥글기, 그림자, 간격, 타이포그래피, 모션, 서피스. 컴포넌트는 토큰만 소비합니다.

## 공식 키트

| Design | 성격 |
| --- | --- |
| `linear` | 미니멀 제품 UI. 차가운 회색, 드문 그림자, 여유로운 간격. **기본값.** |
| `glass` | 부드러운 글래스. 은은한 블러, 밝은 엣지. |
| `editorial` | 콘텐츠 우선. 세리프 제목, 낮은 둥글기, 거의 그림자 없음. |
| `soft` | 따뜻하고 친근함. 넉넉한 둥글기, 부드러운 대비. |
| `playful` | 생기 있지만 만화 같지는 않음. 더 강한 accent, 더 둥글고, 더 역동적인 모션. |

```ts
import { DESIGNS } from 'pomikit-ui'

DESIGNS.linear // DesignKit
```

제로 설정(`createTheme` / 플러그인 theme 없음)은 **`linear`**로 해석됩니다.

## createTheme와 applyTheme

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

### 옵션

| Option | Type | 참고 |
| --- | --- | --- |
| `design` | `ThemeDesign` | `linear` \| `glass` \| `editorial` \| `soft` \| `playful` |
| `accent` | `string` | 브랜드 accent hex |
| `mode` | `ThemeMode` | `light` \| `dark` \| `system` |
| `radius` | `ThemeRadius` | 축 오버라이드: `sharp` \| `soft` \| `round` |
| `density` | `ThemeDensity` | `compact` \| `comfortable` \| `spacious` |
| `motion` | `ThemeMotion` | `none` \| `normal` \| `expressive` |
| `elevation` | `ThemeElevation` | `flat` \| `soft` \| `floating` |

키트는 이미 합리적인 축 기본값을 제공합니다. 키트를 넘는 하이브리드가 필요할 때만 축을 오버라이드하세요.

## 플러그인 경유

```ts
app.use(Pomikit, {
  theme: createTheme({ design: 'soft', accent: '#7C6AEF' }),
})
```

일반 옵션 객체도 동작합니다: `theme: { design: 'playful' }`.

## 플레이그라운드

[플레이그라운드](/playground)에서 키트와 축을 실시간으로 시험해 보세요.
