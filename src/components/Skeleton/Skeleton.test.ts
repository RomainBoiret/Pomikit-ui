import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Skeleton from './Skeleton.vue'

describe('Skeleton', () => {
  it('renders a single text bone by default', () => {
    const wrapper = mount(Skeleton)
    expect(wrapper.find('.pomi-skeleton--text').exists()).toBe(true)
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  it('renders multiple lines', () => {
    const wrapper = mount(Skeleton, { props: { lines: 3 } })
    expect(wrapper.findAll('.pomi-skeleton')).toHaveLength(3)
  })

  it('supports rect and circle variants', () => {
    const rect = mount(Skeleton, { props: { variant: 'rect', height: '8rem' } })
    expect(rect.find('.pomi-skeleton--rect').exists()).toBe(true)
    expect((rect.find('.pomi-skeleton').element as HTMLElement).style.height).toBe('8rem')

    const circle = mount(Skeleton, { props: { variant: 'circle' } })
    expect(circle.find('.pomi-skeleton--circle').exists()).toBe(true)
  })

  it('can disable shimmer', () => {
    const wrapper = mount(Skeleton, { props: { animated: false } })
    expect(wrapper.find('.pomi-skeleton--static').exists()).toBe(true)
  })
})
