import type { SiteMessages } from './types'
import { de } from './de'
import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import { ja } from './ja'
import { ko } from './ko'
import { pt } from './pt'
import { zh } from './zh'

export type { SiteMessages, KitId } from './types'

export const messages = {
  en,
  zh,
  ja,
  ko,
  es,
  pt,
  fr,
  de,
} as const satisfies Record<string, SiteMessages>

export type Locale = keyof typeof messages
