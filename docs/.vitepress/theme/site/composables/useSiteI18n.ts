import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { messages, type Locale } from '../i18n'

export function useSiteI18n() {
  const { lang } = useData()
  const locale = computed<Locale>(() => {
    const code = lang.value.toLowerCase().split('-')[0] ?? 'en'
    return (code in messages ? code : 'en') as Locale
  })
  const t = computed(() => messages[locale.value])
  function localePath(path: string) {
    const normalized = path.startsWith('/') ? path : `/${path}`
    if (locale.value === 'en') return withBase(normalized)
    const prefix = `/${locale.value}`
    if (normalized === '/') return withBase(`${prefix}/`)
    if (normalized === prefix || normalized.startsWith(`${prefix}/`)) return withBase(normalized)
    return withBase(`${prefix}${normalized}`)
  }
  return { locale, t, localePath }
}
