<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  ref,
  useAttrs,
  useSlots,
  watchEffect,
} from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '../../utils/cn'
import { invokeClickHandlers, isThenable } from '../../utils/thenable'
import type { PomiSize, PomiTone, PomiVariant } from '../../utils/types'

export type ButtonSize = PomiSize | 'icon'
export type ButtonPhase = 'idle' | 'busy' | 'success' | 'error'

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  /**
   * @advanced Escape hatch — prefer the Design Kit density over per-button sizing.
   */
  size?: ButtonSize
  /**
   * @advanced Escape hatch — prefer Design Kit defaults; use only for rare exceptions.
   */
  variant?: PomiVariant
  /**
   * @advanced Escape hatch — prefer intent (`confirm`, async click). Kit owns brand color.
   */
  tone?: PomiTone
  disabled?: boolean
  /** Controlled busy escape hatch. Merges with intent-driven busy from async clicks. */
  loading?: boolean
  block?: boolean
  href?: string
  target?: string
  rel?: string
  /**
   * Intent: require a second click to commit.
   * `true` uses "Confirm?" — a string becomes the armed label.
   */
  confirm?: boolean | string
  /**
   * After a thenable click settles, briefly show success/error feedback.
   * Default true. Set false to exit busy → idle immediately.
   */
  feedback?: boolean
  /** Progressive disclosure: replace label while busy (keeps width lock). */
  busyText?: string
  /** Progressive disclosure: label during success flash. */
  successText?: string
  /** Progressive disclosure: label during error flash. */
  errorText?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  size: 'md',
  variant: 'solid',
  tone: 'primary',
  disabled: false,
  loading: false,
  block: false,
  href: undefined,
  target: undefined,
  rel: undefined,
  confirm: undefined,
  feedback: true,
  busyText: undefined,
  successText: undefined,
  errorText: undefined,
})

defineOptions({ name: 'PomiButton', inheritAttrs: false })

const SUCCESS_MS = 650
const ERROR_MS = 900

const attrs = useAttrs()
const slots = useSlots()

const phase = ref<ButtonPhase>('idle')
const lockedMinWidth = ref<string | undefined>()
const armed = ref(false)
const armTimer = ref<ReturnType<typeof setTimeout> | null>(null)
const feedbackTimer = ref<ReturnType<typeof setTimeout> | null>(null)

const isLink = computed(() => !!props.href)
const intentBusy = computed(() => phase.value === 'busy')
const isBusy = computed(() => props.loading || intentBusy.value)
const isFeedback = computed(() => phase.value === 'success' || phase.value === 'error')
const isDisabled = computed(
  () => props.disabled || isBusy.value || isFeedback.value,
)
const tag = computed(() => (isLink.value ? 'a' : 'button'))
const confirmLabel = computed(() => {
  if (props.confirm === true) return 'Confirm?'
  if (typeof props.confirm === 'string') return props.confirm
  return undefined
})

const effectiveTone = computed<PomiTone>(() => {
  if (armed.value) return 'danger'
  if (phase.value === 'success') return 'success'
  if (phase.value === 'error') return 'danger'
  return props.tone
})

const classes = computed(() =>
  cn(
    'pomi-button',
    `pomi-button--${props.size}`,
    `pomi-button--${props.variant}`,
    `pomi-button--${effectiveTone.value}`,
    isBusy.value && 'pomi-button--loading',
    phase.value === 'success' && 'pomi-button--success',
    phase.value === 'error' && 'pomi-button--error',
    props.block && 'pomi-button--block',
    armed.value && 'pomi-button--armed',
    attrs.class as string | undefined,
  ),
)

const fallthroughAttrs = computed(() => {
  const { class: _class, style: _style, onClick: _onClick, ...rest } = attrs
  return rest
})

const rootStyle = computed(() => {
  const style = attrs.style as string | Record<string, string> | undefined
  if (!lockedMinWidth.value) return style

  if (style == null || style === '') {
    return { minWidth: lockedMinWidth.value }
  }

  if (typeof style === 'string') {
    return `${style};min-width:${lockedMinWidth.value}`
  }

  return { ...style, minWidth: lockedMinWidth.value }
})

const showSpinner = computed(() => isBusy.value && !props.busyText)
const hideDefaultLabel = computed(
  () =>
    (isBusy.value && !props.busyText) ||
    (phase.value === 'success' && !props.successText) ||
    (phase.value === 'error' && !props.errorText),
)

watchEffect(() => {
  if (!import.meta.env.DEV) return
  if (props.size !== 'icon') return
  if (slots.default) return
  if (attrs['aria-label'] || attrs['aria-labelledby']) return
  console.warn(
    '[Pomikit] Button with size="icon" and no text content should provide an aria-label.',
  )
})

function clearArm() {
  armed.value = false
  if (armTimer.value) {
    clearTimeout(armTimer.value)
    armTimer.value = null
  }
}

function clearFeedbackTimer() {
  if (feedbackTimer.value) {
    clearTimeout(feedbackTimer.value)
    feedbackTimer.value = null
  }
}

function armButton(event: MouseEvent) {
  lockWidth(event)
  armed.value = true
  if (armTimer.value) clearTimeout(armTimer.value)
  armTimer.value = setTimeout(() => {
    armed.value = false
    armTimer.value = null
  }, 4000)
}

function lockWidth(event: MouseEvent) {
  if (lockedMinWidth.value) return
  const el = event.currentTarget
  if (!(el instanceof HTMLElement)) return
  lockedMinWidth.value = `${el.getBoundingClientRect().width}px`
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    clearFeedbackTimer()
    feedbackTimer.value = setTimeout(() => {
      feedbackTimer.value = null
      resolve()
    }, ms)
  })
}

async function runAction(event: MouseEvent) {
  const result = invokeClickHandlers(attrs.onClick, event)
  if (!isThenable(result)) return

  lockWidth(event)
  clearFeedbackTimer()
  phase.value = 'busy'
  await nextTick()

  try {
    await result
    if (props.feedback) {
      phase.value = 'success'
      await wait(SUCCESS_MS)
    }
  } catch {
    if (props.feedback) {
      phase.value = 'error'
      await wait(ERROR_MS)
    }
  } finally {
    phase.value = 'idle'
  }
}

async function handleClick(event: MouseEvent) {
  if (props.disabled || isBusy.value || isFeedback.value) {
    event.preventDefault()
    event.stopImmediatePropagation()
    return
  }

  if (confirmLabel.value && !armed.value) {
    event.preventDefault()
    event.stopImmediatePropagation()
    armButton(event)
    return
  }

  if (armed.value) clearArm()
  await runAction(event)
}

function onBlur() {
  if (armed.value) clearArm()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && armed.value) {
    event.preventDefault()
    clearArm()
  }
}

onBeforeUnmount(() => {
  clearArm()
  clearFeedbackTimer()
})
</script>

<template>
  <Primitive
    :as="tag"
    :class="classes"
    :style="rootStyle"
    v-bind="fallthroughAttrs"
    :type="isLink ? undefined : type"
    :href="isLink && !isDisabled ? href : undefined"
    :target="isLink ? target : undefined"
    :rel="isLink ? rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined) : undefined"
    :disabled="isLink ? undefined : isDisabled"
    :aria-disabled="isDisabled || undefined"
    :aria-busy="isBusy || undefined"
    :aria-expanded="confirmLabel ? armed : undefined"
    :tabindex="isLink && isDisabled ? -1 : undefined"
    @click="handleClick"
    @blur="onBlur"
    @keydown="onKeydown"
  >
    <span v-if="showSpinner" class="pomi-button__status-overlay" aria-hidden="true">
      <span class="pomi-button__spinner" />
    </span>
    <span
      v-else-if="phase === 'success' && !successText"
      class="pomi-button__status-overlay"
      aria-hidden="true"
    >
      <svg class="pomi-button__icon" viewBox="0 0 16 16" fill="none">
        <path
          d="M3.5 8.5l3 3 6-7"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span
      v-else-if="phase === 'error' && !errorText"
      class="pomi-button__status-overlay"
      aria-hidden="true"
    >
      <svg class="pomi-button__icon" viewBox="0 0 16 16" fill="none">
        <path
          d="M4 4l8 8M12 4l-8 8"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </span>

    <span class="pomi-button__content" :class="{ 'pomi-button__label--hidden': hideDefaultLabel }">
      <template v-if="armed && confirmLabel">{{ confirmLabel }}</template>
      <template v-else-if="isBusy && busyText">{{ busyText }}</template>
      <template v-else-if="phase === 'success' && successText">{{ successText }}</template>
      <template v-else-if="phase === 'error' && errorText">{{ errorText }}</template>
      <template v-else>
        <slot name="leading" />
        <slot />
        <slot name="trailing" />
      </template>
    </span>

    <span v-if="isBusy" class="pomi-sr-only">Loading</span>
    <span v-else-if="phase === 'success'" class="pomi-sr-only" role="status">Success</span>
    <span v-else-if="phase === 'error'" class="pomi-sr-only" role="status">Error</span>
  </Primitive>
</template>
