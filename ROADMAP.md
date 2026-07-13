# Roadmap

## Vision v1

**Less decisions. Better interfaces.**

Design system Vue 3 qui réduit la charge mentale — pas un concurrent PrimeVue à 70 props.

## Catalog (v1)

Button · Field · Input · Collection · Dialog · Select · Toast · Dropdown · Checkbox · Switch · Card · Skeleton

## Phase 0 — Foundations

- [x] Design Kits v1 (`design`: `linear` | `glass` | `editorial` | `soft` | `playful`)
- [x] Axes optionnels (`accent`, `radius`, `density`, `motion`, `elevation`, `mode`)
- [x] Alias de migration `personality` → Design Kit
- [x] `mode: 'system'` + sync `prefers-color-scheme`
- [x] Zero-config CSS defaults (= kit `linear`)
- [x] Motion tokens par kit + axe `none` | `normal` | `expressive`
- [x] Plugin auto-services + `<PomikitRoot>`
- [x] Radio hors API publique v1

## Phase 1 — Composants wow

- [x] Redesign CSS + motion : Button, Field/Input, Card, Dialog/Toast, Checkbox/Switch, Select/Dropdown, Collection/Skeleton

## Phase 2 — Docs playground

- [x] Home docs = playground interactif (axes ↔ composants live)
- [x] Storybook documenté comme outil interne uniquement

## Phase 3 — Simplify

- [x] Philosophie radicale : intent-only API, Design Kits, filtre de décision
- [ ] Nettoyage exports / legacy providers
- [ ] Architecture dossiers allégée
- [ ] Réduire / cacher les escape hatches style dans l’API publique (warn / deprecate)

## Phase 4 — Release

- [ ] npm publish
- [ ] Host VitePress docs

## Explicitly not now

- Expanding to a PrimeVue-sized catalog
- DataTable parity
- Radio in core
- Monorepo
