# Providers

Deux providers à monter près de la racine de l’app.

## Ordre recommandé

```vue
<ToastProvider>
  <DialogProvider>
    <App />
  </DialogProvider>
</ToastProvider>
```

L’ordre Toast → Dialog évite que les overlays dialog passent “sous” les toasts de façon surprenante ; tu peux inverser si ton produit préfère l’inverse.

## ToastProvider

| Prop | Type | Défaut |
| --- | --- | --- |
| `duration` | `number` | `4200` |
| `label` | `string` | `'Notifications'` |

Active [`useToast`](/composables/use-toast).

## DialogProvider

Pas de props. Active [`useDialog`](/composables/use-dialog) et rend la file de confirms.

## Sans provider

Ces appels lèvent une erreur claire :

```ts
useToast()  // Error: must be used within ToastProvider
useDialog() // Error: must be used within DialogProvider
```

Les composants `Dialog` déclaratifs (avec trigger) n’ont **pas** besoin de `DialogProvider`. Le provider sert surtout à `useDialog().confirm()`.
