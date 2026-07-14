# Filosofia

**Less decisions. Better interfaces.**

O Pomikit pede aos desenvolvedores o menor número possível de decisões enquanto entrega UI premium por padrão. O design é decidido uma vez; os componentes consomem tokens e inferem o comportamento a partir da intenção de negócio.

## Filtro de decisões

Antes de adicionar um prop ou uma feature, pergunte:

> Isso exige uma decisão extra do desenvolvedor?

Se a resposta for **sim**, tente nesta ordem:

1. Design Kit / tokens (tematize a app uma vez)
2. Inferência de intenção (async click, `pending`, `options`, `error`)
3. Comportamento convencional (defaults sensatos)

Só então exponha um prop, e só quando ele expressar **intenção de negócio**.

## Intenção vs estética

| Preferir (intenção) | Evitar como API de produto (estética) |
| --- | --- |
| `confirm`, `href`, `required` | `variant`, `tone`, `size` |
| `pending`, `error`, `options` | `radius`, `density` em componentes |
| handlers de click async | cor / sombra por instância |

Props de estilo podem existir como escape hatches avançados. Eles não são o produto: mantenha-os fora do Getting Started, demos do playground e exemplos principais.

## Projetar uma vez

```ts
createTheme({ design: 'linear', accent: '#5B5FFF' })
```

Os Design Kits controlam cores, radius, sombras, spacing, tipografia, motion e surfaces. Os componentes não ramificam com `design === …`; eles leem tokens CSS.

## Postura da documentação

Lidere com a API mínima. As stories de escape hatch no Storybook são ferramentas internas de isolamento. Este site de docs é a superfície oficial.
