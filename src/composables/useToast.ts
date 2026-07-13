import { inject, provide, ref, type InjectionKey, type Ref } from 'vue'

/** Semantic toast accents — only tint icon, progress, and optional edge. */
export type ToastTone = 'success' | 'danger' | 'warning' | 'info'

/** @deprecated Prefer `info` */
type ToastToneLegacy = 'neutral' | 'primary'

export type ToastInput = {
  title: string
  description?: string
  tone?: ToastTone | ToastToneLegacy
  /** ms — default from provider */
  duration?: number
}

export type ToastRecord = {
  id: number
  title: string
  description?: string
  tone: ToastTone
  open: boolean
  duration: number
}

export type ToastApi = {
  show: (input: ToastInput | string) => number
  success: (title: string, description?: string) => number
  error: (title: string, description?: string) => number
  warning: (title: string, description?: string) => number
  info: (title: string, description?: string) => number
  dismiss: (id: number) => void
  clear: () => void
  toasts: Ref<ToastRecord[]>
}

export const provideToastApiKey: InjectionKey<ToastApi> = Symbol('pomikit-toast-api')

let toastId = 0
let sharedToast: ToastApi | null = null

function normalizeTone(tone?: ToastInput['tone']): ToastTone {
  if (tone === 'success' || tone === 'danger' || tone === 'warning' || tone === 'info') {
    return tone
  }
  return 'info'
}

export function createToastStore(defaultDuration = 4200) {
  const toasts = ref<ToastRecord[]>([])

  function show(input: ToastInput | string): number {
    const payload = typeof input === 'string' ? { title: input } : input
    const id = ++toastId
    toasts.value = [
      ...toasts.value,
      {
        id,
        title: payload.title,
        description: payload.description,
        tone: normalizeTone(payload.tone),
        open: true,
        duration: payload.duration ?? defaultDuration,
      },
    ]
    return id
  }

  function dismiss(id: number) {
    toasts.value = toasts.value.map((t) => (t.id === id ? { ...t, open: false } : t))
    const remove = () => {
      toasts.value = toasts.value.filter((t) => t.id !== id)
    }
    if (typeof window === 'undefined') {
      remove()
      return
    }
    // Match exit animation (200ms)
    window.setTimeout(remove, 200)
  }

  function clear() {
    toasts.value = []
  }

  const api: ToastApi = {
    toasts,
    show,
    success: (title, description) => show({ title, description, tone: 'success' }),
    error: (title, description) => show({ title, description, tone: 'danger' }),
    warning: (title, description) => show({ title, description, tone: 'warning' }),
    info: (title, description) => show({ title, description, tone: 'info' }),
    dismiss,
    clear,
  }

  return api
}

export function getSharedToastStore(defaultDuration = 4200) {
  if (!sharedToast) sharedToast = createToastStore(defaultDuration)
  return sharedToast
}

export function resetSharedToastStore() {
  sharedToast = null
}

export function provideToastApi(api: ToastApi) {
  provide(provideToastApiKey, api)
}

export function useToast(): ToastApi {
  return inject(provideToastApiKey, null) ?? getSharedToastStore()
}
