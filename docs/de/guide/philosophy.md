# Philosophie

**Less decisions. Better interfaces.**

Pomikit verlangt von Entwicklern so wenige Entscheidungen wie möglich und liefert trotzdem premium UI by default. Design wird einmal entschieden; Komponenten konsumieren Tokens und leiten Verhalten aus Business-Intent ab.

## Entscheidungsfilter

Bevor du einen Prop oder eine Feature ergänzt, frage:

> Erfordert das eine zusätzliche Entscheidung vom Entwickler?

Wenn **ja**, versuche der Reihe nach:

1. Design Kit / Tokens (App einmal themen)
2. Intent-Inferenz (async click, `pending`, `options`, `error`)
3. Konventionelles Verhalten (sinnvolle Defaults)

Erst dann einen Prop exponieren, und nur wenn er **Business-Intent** ausdrückt.

## Intent vs Ästhetik

| Bevorzugen (Intent) | Als Produkt-API vermeiden (Ästhetik) |
| --- | --- |
| `confirm`, `href`, `required` | `variant`, `tone`, `size` |
| `pending`, `error`, `options` | `radius`, `density` an Komponenten |
| async Click-Handler | Farbe / Schatten pro Instanz |

Style-Props dürfen als advanced Escape Hatches existieren. Sie sind nicht das Produkt: halte sie aus Getting Started, Playground-Demos und Primärbeispielen heraus.

## Einmal designen

```ts
createTheme({ design: 'linear', accent: '#5B5FFF' })
```

Design Kits besitzen Farben, Radius, Schatten, Spacing, Typografie, Motion und Surfaces. Komponenten branchen nicht auf `design === …`; sie lesen CSS-Tokens.

## Docs-Haltung

Führe mit der minimalen API. Storybook Escape-Hatch-Stories sind interne Isolationswerkzeuge. Diese Docs-Site ist die offizielle Oberfläche.
