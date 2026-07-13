import { inject, type ComputedRef, type InjectionKey, type Ref } from 'vue'

export type FieldContext = {
  controlId: ComputedRef<string>
  labelId: ComputedRef<string>
  describedBy: ComputedRef<string | undefined>
  required: ComputedRef<boolean>
  /** Field label text — Input may float it instead of Field rendering above. */
  label: ComputedRef<string | undefined>
  /** Controlled Field error wins; intent errors flow through setIntentError. */
  resolvedError: ComputedRef<string | undefined>
  setIntentError: (message: string | undefined) => void
  /** Input claims the label as a floating label — Field hides its external label. */
  claimFloatingLabel: () => void
  releaseFloatingLabel: () => void
  floatingLabelClaimed: Ref<boolean>
}

export const FieldContextKey: InjectionKey<FieldContext> = Symbol('pomikit-field')

export function useFieldContext(): FieldContext | null {
  return inject(FieldContextKey, null)
}

export type FieldMessageSource = {
  hint?: Ref<string | undefined> | ComputedRef<string | undefined>
  error?: Ref<string | undefined> | ComputedRef<string | undefined>
}
