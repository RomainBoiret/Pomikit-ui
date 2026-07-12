import { describe, expect, it, vi } from 'vitest'
import { invokeClickHandlers, isThenable } from './thenable'

describe('isThenable', () => {
  it('detects promises and thenables', () => {
    expect(isThenable(Promise.resolve(1))).toBe(true)
    expect(isThenable({ then: () => undefined })).toBe(true)
    expect(isThenable(null)).toBe(false)
    expect(isThenable(undefined)).toBe(false)
    expect(isThenable(42)).toBe(false)
  })
})

describe('invokeClickHandlers', () => {
  it('invokes a single handler and returns its value', () => {
    const event = new MouseEvent('click')
    const handler = vi.fn(() => Promise.resolve('ok'))
    const result = invokeClickHandlers(handler, event)
    expect(handler).toHaveBeenCalledWith(event)
    expect(isThenable(result)).toBe(true)
  })

  it('returns the first thenable from an array of handlers', () => {
    const event = new MouseEvent('click')
    const result = invokeClickHandlers(
      [() => 'sync', () => Promise.resolve('async'), () => Promise.resolve('later')],
      event,
    )
    expect(isThenable(result)).toBe(true)
  })
})
