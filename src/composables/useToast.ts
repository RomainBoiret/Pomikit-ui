import { inject, provide, ref, type InjectionKey, type Ref } from 'vue'
import type { PomiTone } from '../utils/types'

export type ToastTone = Extract<PomiTone, 'neutral' | 'success' | 'danger'> | 'primary'

export type ToastInput = {
  title: string
  description?: string
  tone?: ToastTone
  /** ms — default from provider */
  duration?: number
}

export type ToastRecord = ToastInput & {
  id: number
  open: boolean
  duration: number
}

export type ToastApi = {
  show: (input: ToastInput | string) => number
  success: (title: string, description?: string) => number
  error: (title: string, description?: string) => number
  dismiss: (id: number) => void
  clear: () => void
  toasts: Ref<ToastRecord[]>
}

const ToastApiKey: InjectionKey<ToastApi> = Symbol('pomikit-toast-api')

let toastId = 0

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
        tone: payload.tone ?? 'neutral',
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
    window.setTimeout(remove, 280)
  }

  function clear() {
    toasts.value = []
  }

  const api: ToastApi = {
    toasts,
    show,
    success: (title, description) => show({ title, description, tone: 'success' }),
    error: (title, description) => show({ title, description, tone: 'danger' }),
    dismiss,
    clear,
  }

  return api
}

export function provideToastApi(api: ToastApi) {
  provide(ToastApiKey, api)
}

export function useToast(): ToastApi {
  const api = inject(ToastApiKey, null)
  if (!api) {
    throw new Error(
      '[Pomikit] useToast() requires a parent <ToastProvider>. Wrap your app with ToastProvider.',
    )
  }
  return api
}
