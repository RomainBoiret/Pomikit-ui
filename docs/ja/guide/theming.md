# Design Kits

一度の呼び出しでアプリ全体をテーマ化します：色、角丸、影、余白、タイポグラフィ、モーション、サーフェス。コンポーネントはトークンだけを消費します。

## 公式キット

| Design | 特徴 |
| --- | --- |
| `linear` | ミニマルなプロダクト UI。冷たいグレー、疎な影、開放的な余白。**デフォルト。** |
| `glass` | 柔らかいガラス。控えめなぼかし、明るい縁。 |
| `editorial` | コンテンツ優先。セリフ見出し、低い角丸、ほぼ影なし。 |
| `soft` | 温かく親しみやすい。大きめの角丸、穏やかなコントラスト。 |
| `playful` | 生き生きしているがカートゥーンではない。強い accent、より丸く、動的なモーション。 |

```ts
import { DESIGNS } from 'pomikit-ui'

DESIGNS.linear // DesignKit
```

ゼロコンフィグ（`createTheme` / プラグイン theme なし）は **`linear`** に解決されます。

## createTheme と applyTheme

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

### オプション

| Option | Type | メモ |
| --- | --- | --- |
| `design` | `ThemeDesign` | `linear` \| `glass` \| `editorial` \| `soft` \| `playful` |
| `accent` | `string` | ブランド accent の hex |
| `mode` | `ThemeMode` | `light` \| `dark` \| `system` |
| `radius` | `ThemeRadius` | 軸オーバーライド：`sharp` \| `soft` \| `round` |
| `density` | `ThemeDensity` | `compact` \| `comfortable` \| `spacious` |
| `motion` | `ThemeMotion` | `none` \| `normal` \| `expressive` |
| `elevation` | `ThemeElevation` | `flat` \| `soft` \| `floating` |

キットはすでに妥当な軸デフォルトを持っています。キットを超えたハイブリッドが必要なときだけ軸を上書きしてください。

## プラグイン経由

```ts
app.use(Pomikit, {
  theme: createTheme({ design: 'soft', accent: '#7C6AEF' }),
})
```

プレーンなオプションオブジェクトも使えます：`theme: { design: 'playful' }`。

## プレイグラウンド

[プレイグラウンド](/playground) でキットと軸をライブで試せます。
