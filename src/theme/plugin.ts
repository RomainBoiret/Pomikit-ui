import type { App } from 'vue'
import {
  applyTheme,
  applyThemeOptions,
  type CreateThemeOptions,
  type PomikitTheme,
} from './createTheme'
import { ensurePomikitServices } from '../root/ensureServices'

export type PomikitPluginOptions = {
  theme?: CreateThemeOptions | PomikitTheme
  /** Toast default duration (ms) when overlays are auto-mounted */
  toastDuration?: number
  toastLabel?: string
  /** Skip auto-mounting dialog/toast overlays (use <PomikitRoot> instead) */
  overlays?: boolean
}

export const Pomikit = {
  install(app: App, options: PomikitPluginOptions = {}) {
    if (typeof document !== 'undefined') {
      if (options.theme && 'vars' in options.theme) {
        applyTheme(options.theme)
      } else {
        applyThemeOptions((options.theme as CreateThemeOptions | undefined) ?? {})
      }
    }

    if (options.overlays === false) return

    ensurePomikitServices(app, {
      toastDuration: options.toastDuration,
      toastLabel: options.toastLabel,
    })
  },
}
