export function isThenable(value: unknown): value is PromiseLike<unknown> {
  return (
    value != null &&
    (typeof value === 'object' || typeof value === 'function') &&
    typeof (value as PromiseLike<unknown>).then === 'function'
  )
}

type ClickHandler = (event: MouseEvent) => unknown

/** Vue may pass a single listener or an array when multiple v-on are merged. */
export function invokeClickHandlers(
  handlers: unknown,
  event: MouseEvent,
): unknown {
  if (handlers == null) return undefined

  if (typeof handlers === 'function') {
    return (handlers as ClickHandler)(event)
  }

  if (Array.isArray(handlers)) {
    let thenable: PromiseLike<unknown> | undefined

    for (const handler of handlers) {
      if (typeof handler !== 'function') continue
      const result = (handler as ClickHandler)(event)
      if (!thenable && isThenable(result)) thenable = result
    }

    return thenable
  }

  return undefined
}
