import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from './Badge.vue'

describe('Badge', () => {
  it('renders slot content', () => {
    const wrapper = mount(Badge, { slots: { default: 'Beta' } })
    expect(wrapper.text()).toBe('Beta')
  })

  it('applies size, variant and tone classes', () => {
    const wrapper = mount(Badge, {
      props: { size: 'sm', variant: 'solid', tone: 'danger' },
      slots: { default: 'Hot' },
    })
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([
        'pomi-badge',
        'pomi-badge--sm',
        'pomi-badge--solid',
        'pomi-badge--danger',
      ]),
    )
  })
})
