import { createApp, type App } from 'vue'
import { provideDialogApiKey } from '../composables/useDialog'
import { provideToastApiKey } from '../composables/useToast'
import PomikitOverlays from './PomikitOverlays.vue'
import { areOverlaysMounted, getPomikitServices, markOverlaysMounted } from './services'

export type EnsureServicesOptions = {
  toastDuration?: number
  toastLabel?: string
}

/**
 * Registers dialog/toast services on the Vue app and mounts overlay UI once.
 * Called by the Pomikit plugin so apps don't need visible providers.
 */
export function ensurePomikitServices(
  app: Pick<App, 'provide'>,
  options: EnsureServicesOptions = {},
) {
  const { dialog, toast } = getPomikitServices(options.toastDuration)
  app.provide(provideDialogApiKey, dialog.api)
  app.provide(provideToastApiKey, toast)

  if (typeof document === 'undefined' || areOverlaysMounted()) return

  const host = document.createElement('div')
  host.setAttribute('data-pomikit-overlays', '')
  document.body.appendChild(host)

  createApp(PomikitOverlays, {
    toastDuration: options.toastDuration ?? 4200,
    toastLabel: options.toastLabel ?? 'Notifications',
  }).mount(host)

  markOverlaysMounted()
}
