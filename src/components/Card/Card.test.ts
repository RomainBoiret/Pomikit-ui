import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from './Card.vue'

describe('Card', () => {
  it('renders body content', () => {
    const wrapper = mount(Card, { slots: { default: 'Hello card' } })
    expect(wrapper.text()).toContain('Hello card')
  })

  it('renders title and footer slots', () => {
    const wrapper = mount(Card, {
      slots: {
        title: 'Title',
        description: 'Desc',
        default: 'Body',
        footer: 'Footer',
      },
    })
    expect(wrapper.find('.pomi-card__title').text()).toBe('Title')
    expect(wrapper.find('.pomi-card__description').text()).toBe('Desc')
    expect(wrapper.find('.pomi-card__footer').text()).toBe('Footer')
  })
})
