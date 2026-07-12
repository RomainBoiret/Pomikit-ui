import { computed, inject, provide, ref, type InjectionKey } from 'vue'
import type { PomiTone } from '../utils/types'

export type DialogConfirmOptions = {
  title: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
  tone?: PomiTone
  /** If it returns a Promise, the confirm button stays busy until settle. */
  onConfirm?: () => unknown
}

export type DialogRequest = DialogConfirmOptions & {
  id: number
  resolve: (value: boolean) => void
}

export type DialogApi = {
  confirm: (options: DialogConfirmOptions) => Promise<boolean>
}

const DialogApiKey: InjectionKey<DialogApi> = Symbol('pomikit-dialog-api')

let requestId = 0

export function createDialogStore() {
  const queue = ref<DialogRequest[]>([])
  const current = computed(() => queue.value[0])

  function confirm(options: DialogConfirmOptions): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      queue.value = [
        ...queue.value,
        {
          ...options,
          id: ++requestId,
          resolve,
        },
      ]
    })
  }

  function closeCurrent(result: boolean) {
    const active = queue.value[0]
    if (!active) return
    active.resolve(result)
    queue.value = queue.value.slice(1)
  }

  const api: DialogApi = { confirm }

  return { queue, current, confirm, closeCurrent, api }
}

export function provideDialogApi(api: DialogApi) {
  provide(DialogApiKey, api)
}

export function useDialog(): DialogApi {
  const api = inject(DialogApiKey, null)
  if (!api) {
    throw new Error(
      '[Pomikit] useDialog() requires a parent <DialogProvider>. Wrap your app (or page) with DialogProvider.',
    )
  }
  return api
}
