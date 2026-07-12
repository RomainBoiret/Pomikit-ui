import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Collection from './Collection.vue'

describe('Collection', () => {
  it('shows skeleton on first load (pending + empty)', () => {
    const wrapper = mount(Collection, {
      props: {
        items: [],
        pending: true,
      },
    })
    expect(wrapper.find('.pomi-collection__skeleton').exists()).toBe(true)
    expect(wrapper.find('.pomi-skeleton').exists()).toBe(true)
    expect(wrapper.attributes('aria-busy')).toBe('true')
  })

  it('keeps items visible while refreshing and shows refresh indicator', () => {
    const wrapper = mount(Collection, {
      props: {
        items: [{ name: 'A' }, { name: 'B' }],
        pending: true,
      },
      slots: {
        item: (slotProps: { item: unknown }) => (slotProps.item as { name: string }).name,
      },
    })

    expect(wrapper.classes()).toContain('pomi-collection--refreshing')
    expect(wrapper.find('.pomi-collection__refresh').exists()).toBe(true)
    expect(wrapper.find('.pomi-collection__skeleton').exists()).toBe(false)
    expect(wrapper.text()).toContain('A')
    expect(wrapper.text()).toContain('B')
  })

  it('shows empty state when idle with no items', () => {
    const wrapper = mount(Collection, {
      props: {
        items: [],
        pending: false,
        emptyTitle: 'No users',
      },
    })
    expect(wrapper.find('.pomi-empty-state').text()).toContain('No users')
  })

  it('shows error state when idle with error', async () => {
    const onRetry = vi.fn()
    const wrapper = mount(Collection, {
      props: {
        items: [],
        pending: false,
        error: new Error('Boom'),
        onRetry,
      },
    })
    expect(wrapper.find('.pomi-error-state').exists()).toBe(true)
    await wrapper.find('button').trigger('click')
    expect(onRetry).toHaveBeenCalledTimes(1)
  })

  it('renders items when ready', () => {
    const wrapper = mount(Collection, {
      props: {
        items: ['one', 'two'],
        layout: 'stack',
      },
      slots: {
        item: (slotProps: { item: unknown }) => String(slotProps.item),
      },
    })
    expect(wrapper.text()).toContain('one')
    expect(wrapper.text()).toContain('two')
    expect(wrapper.find('.pomi-collection__list--stack').exists()).toBe(true)
  })

  it('keeps items when an error arrives after a successful load', () => {
    const wrapper = mount(Collection, {
      props: {
        items: ['kept'],
        pending: false,
        error: new Error('refresh failed'),
      },
      slots: {
        item: (slotProps: { item: unknown }) => String(slotProps.item),
      },
    })
    expect(wrapper.text()).toContain('kept')
    expect(wrapper.find('.pomi-error-state').exists()).toBe(false)
  })
})
