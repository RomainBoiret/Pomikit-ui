import { nextTick, watch, type Ref } from 'vue'
import type { ToastRecord } from './useToast'

const FLIP_MS = 200
const FLIP_EASE = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

/**
 * FLIP stack animation — when toasts are added/removed, existing ones
 * glide to their new position instead of jumping.
 */
export function useToastStackFlip(toasts: Ref<ToastRecord[]>) {
  watch(
    toasts,
    async () => {
      if (typeof document === 'undefined') return

      const prevRects = new Map<string, DOMRect>()
      document.querySelectorAll<HTMLElement>('.pomi-toast[data-toast-id]').forEach((el) => {
        const id = el.dataset.toastId
        if (id) prevRects.set(id, el.getBoundingClientRect())
      })

      await nextTick()
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))

      document.querySelectorAll<HTMLElement>('.pomi-toast[data-toast-id]').forEach((el) => {
        const id = el.dataset.toastId
        if (!id) return
        if (el.dataset.swipe === 'move' || el.dataset.swipe === 'end') return

        const prev = prevRects.get(id)
        if (!prev) return

        const next = el.getBoundingClientRect()
        const dy = prev.top - next.top
        if (Math.abs(dy) < 0.5) return

        el.animate([{ transform: `translateY(${dy}px)` }, { transform: 'translateY(0)' }], {
          duration: FLIP_MS,
          easing: FLIP_EASE,
        })
      })
    },
    { flush: 'pre', deep: true },
  )
}
