import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, { slots: { default: 'Save' } })
    expect(wrapper.text()).toContain('Save')
  })

  it('disables when loading prop is set', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Save' },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.attributes('aria-busy')).toBe('true')
    expect(wrapper.text()).toContain('Loading')
  })

  it('applies variant and tone classes', () => {
    const wrapper = mount(Button, {
      props: { variant: 'outline', tone: 'danger', size: 'lg' },
      slots: { default: 'Delete' },
    })
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([
        'pomi-button',
        'pomi-button--outline',
        'pomi-button--danger',
        'pomi-button--lg',
      ]),
    )
  })

  it('supports block and icon sizes', () => {
    const block = mount(Button, {
      props: { block: true },
      slots: { default: 'Full' },
    })
    expect(block.classes()).toContain('pomi-button--block')

    const icon = mount(Button, {
      props: { size: 'icon' },
      attrs: { 'aria-label': 'Favorite' },
      slots: { default: '★' },
    })
    expect(icon.classes()).toContain('pomi-button--icon')
  })

  it('renders as a link when href is set', () => {
    const wrapper = mount(Button, {
      props: { href: 'https://example.com' },
      slots: { default: 'Docs' },
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://example.com')
  })

  it('enters intent busy when click returns a Promise', async () => {
    vi.useFakeTimers()
    let resolve!: () => void
    const pending = new Promise<void>((res) => {
      resolve = res
    })
    const onClick = vi.fn(() => pending)

    const wrapper = mount(Button, {
      attrs: { onClick },
      slots: { default: 'Save' },
    })

    const click = wrapper.trigger('click')
    await nextTick()

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(wrapper.attributes('aria-busy')).toBe('true')
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.classes()).toContain('pomi-button--loading')

    resolve()
    await Promise.resolve()
    await nextTick()
    expect(wrapper.classes()).toContain('pomi-button--success')

    await vi.advanceTimersByTimeAsync(700)
    await click
    await nextTick()

    expect(wrapper.attributes('aria-busy')).toBeUndefined()
    expect(wrapper.attributes('disabled')).toBeUndefined()
    expect(wrapper.classes()).not.toContain('pomi-button--success')
    vi.useRealTimers()
  })

  it('shows error feedback when the Promise rejects', async () => {
    vi.useFakeTimers()
    let reject!: (reason?: unknown) => void
    const pending = new Promise<void>((_, rej) => {
      reject = rej
    })

    const wrapper = mount(Button, {
      attrs: { onClick: () => pending },
      slots: { default: 'Save' },
    })

    const click = wrapper.trigger('click')
    await nextTick()
    reject(new Error('fail'))
    await Promise.resolve()
    await nextTick()

    expect(wrapper.classes()).toContain('pomi-button--error')
    await vi.advanceTimersByTimeAsync(950)
    await click
    await nextTick()
    expect(wrapper.classes()).not.toContain('pomi-button--error')
    vi.useRealTimers()
  })

  it('skips success flash when feedback is false', async () => {
    vi.useFakeTimers()
    let resolve!: () => void
    const pending = new Promise<void>((res) => {
      resolve = res
    })

    const wrapper = mount(Button, {
      props: { feedback: false },
      attrs: { onClick: () => pending },
      slots: { default: 'Save' },
    })

    const click = wrapper.trigger('click')
    await nextTick()
    resolve()
    await click
    await nextTick()

    expect(wrapper.classes()).not.toContain('pomi-button--success')
    expect(wrapper.attributes('aria-busy')).toBeUndefined()
    vi.useRealTimers()
  })

  it('does not enter busy for synchronous clicks', async () => {
    const onClick = vi.fn(() => 'ok')
    const wrapper = mount(Button, {
      attrs: { onClick },
      slots: { default: 'Save' },
    })

    await wrapper.trigger('click')
    await nextTick()

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(wrapper.attributes('aria-busy')).toBeUndefined()
    expect(wrapper.classes()).not.toContain('pomi-button--loading')
  })

  it('ignores re-entry while intent busy', async () => {
    vi.useFakeTimers()
    let resolve!: () => void
    const pending = new Promise<void>((res) => {
      resolve = res
    })
    const onClick = vi.fn(() => pending)

    const wrapper = mount(Button, {
      attrs: { onClick },
      slots: { default: 'Save' },
    })

    const first = wrapper.trigger('click')
    await nextTick()
    await wrapper.trigger('click')
    await wrapper.trigger('click')

    expect(onClick).toHaveBeenCalledTimes(1)

    resolve()
    await vi.advanceTimersByTimeAsync(700)
    await first
    await nextTick()
    vi.useRealTimers()
  })

  it('locks min-width while busy to avoid layout shift', async () => {
    vi.useFakeTimers()
    let resolve!: () => void
    const pending = new Promise<void>((res) => {
      resolve = res
    })

    const wrapper = mount(Button, {
      attrs: {
        onClick: () => pending,
        style: 'width: 160px',
      },
      slots: { default: 'Save' },
    })

    const first = wrapper.trigger('click')
    await nextTick()

    const style = wrapper.attributes('style') ?? ''
    expect(style.includes('min-width')).toBe(true)

    resolve()
    await vi.advanceTimersByTimeAsync(700)
    await first
    vi.useRealTimers()
  })

  it('arms confirm intent before running the action', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Button, {
      props: { confirm: 'Delete forever?' },
      attrs: { onClick },
      slots: { default: 'Delete' },
    })

    await wrapper.trigger('click')
    expect(onClick).not.toHaveBeenCalled()
    expect(wrapper.text()).toContain('Delete forever?')
    expect(wrapper.classes()).toContain('pomi-button--armed')

    await wrapper.trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('cancels armed confirm on blur', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Button, {
      props: { confirm: true },
      attrs: { onClick },
      slots: { default: 'Delete' },
    })

    await wrapper.trigger('click')
    expect(wrapper.text()).toContain('Confirm?')
    await wrapper.trigger('blur')
    expect(wrapper.text()).toContain('Delete')
    expect(onClick).not.toHaveBeenCalled()
  })
})
