# Racine & services

Dans Pomikit v1, tu n’as **plus** besoin de monter `ToastProvider` + `DialogProvider`.

## Recommandé : plugin

```ts
app.use(Pomikit, {
  theme: createTheme({ design: 'linear' }),
})
```

Le plugin enregistre Dialog + Toast et monte les overlays automatiquement.

## Alternative : `<PomikitRoot>`

```vue
<template>
  <PomikitRoot>
    <App />
  </PomikitRoot>
</template>
```

Un seul wrapper pour `useDialog` / `useToast`.

### Props

| Prop | Type | Défaut |
| --- | --- | --- |
| `toastDuration` | `number` | `4200` |
| `toastLabel` | `string` | `'Notifications'` |

## Legacy (déprécié)

`ToastProvider` et `DialogProvider` restent exportés pour migration, mais préfère le plugin ou `PomikitRoot`.

Les `Dialog` déclaratifs (avec trigger) n’ont besoin d’aucun service.
