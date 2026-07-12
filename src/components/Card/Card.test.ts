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

  it('supports titleAs, variant and actions', () => {
    const wrapper = mount(Card, {
      props: { titleAs: 'h2', variant: 'outline', size: 'sm' },
      slots: {
        title: 'Heading',
        actions: '<button type="button">More</button>',
        media: '<img alt="" src="about:blank" />',
      },
    })

    expect(wrapper.find('h2.pomi-card__title').exists()).toBe(true)
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['pomi-card--outline', 'pomi-card--sm']),
    )
    expect(wrapper.find('.pomi-card__actions').exists()).toBe(true)
    expect(wrapper.find('.pomi-card__media').exists()).toBe(true)
  })

  it('becomes a link when href is set', () => {
    const wrapper = mount(Card, {
      props: { href: 'https://example.com' },
      slots: { title: 'Docs', default: 'Open docs' },
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://example.com')
    expect(wrapper.classes()).toContain('pomi-card--interactive')
  })

  it('toggles selected when selectable', async () => {
    const wrapper = mount(Card, {
      props: { selectable: true, selected: false },
      slots: { title: 'Plan', default: 'Choose me' },
    })

    expect(wrapper.attributes('role')).toBe('button')
    await wrapper.trigger('click')
    expect(wrapper.emitted('update:selected')?.[0]).toEqual([true])
  })
})
