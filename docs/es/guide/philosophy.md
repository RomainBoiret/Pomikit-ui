# Filosofía

**Less decisions. Better interfaces.**

Pomikit pide a los desarrolladores el menor número de decisiones posible mientras entrega UI premium por defecto. El diseño se decide una vez; los componentes consumen tokens e infieren el comportamiento a partir de la intención de negocio.

## Filtro de decisiones

Antes de añadir un prop o una feature, pregúntate:

> ¿Esto exige una decisión extra al desarrollador?

Si la respuesta es **sí**, prueba en este orden:

1. Design Kit / tokens (tema la app una vez)
2. Inferencia de intención (async click, `pending`, `options`, `error`)
3. Comportamiento convencional (defaults sensatos)

Solo entonces expón un prop, y solo cuando exprese **intención de negocio**.

## Intención vs estética

| Preferir (intención) | Evitar como API de producto (estética) |
| --- | --- |
| `confirm`, `href`, `required` | `variant`, `tone`, `size` |
| `pending`, `error`, `options` | `radius`, `density` en componentes |
| handlers de click async | color / sombra por instancia |

Los props de estilo pueden existir como escape hatches avanzados. No son el producto: mantenlos fuera de Getting Started, demos del playground y ejemplos principales.

## Diseñar una vez

```ts
createTheme({ design: 'linear', accent: '#5B5FFF' })
```

Los Design Kits controlan colores, radius, sombras, spacing, tipografía, motion y surfaces. Los componentes no ramifican con `design === …`; leen tokens CSS.

## Postura de la documentación

Lidera con la API mínima. Las stories de escape hatch en Storybook son herramientas internas de aislamiento. Este sitio de docs es la superficie oficial.
