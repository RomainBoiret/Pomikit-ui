export type InputRule = (value: string) => true | string | null | undefined | void

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const rules = {
  required:
    (message = 'This field is required'): InputRule =>
    (value) =>
      value.trim().length > 0 ? true : message,
  email:
    (message = 'Enter a valid email'): InputRule =>
    (value) =>
      value.trim().length === 0 || EMAIL_RE.test(value.trim()) ? true : message,
  min:
    (length: number, message?: string): InputRule =>
    (value) =>
      value.length >= length ? true : (message ?? `Must be at least ${length} characters`),
  max:
    (length: number, message?: string): InputRule =>
    (value) =>
      value.length <= length ? true : (message ?? `Must be at most ${length} characters`),
} as const

export function runRules(value: string, list: InputRule[]): string | undefined {
  for (const rule of list) {
    const result = rule(value)
    if (result === true || result == null) continue
    return result
  }
  return undefined
}
