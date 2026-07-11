import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, { slots: { default: 'Save' } })
    expect(wrapper.text()).toContain('Save')
  })

  it('disables when loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Save' },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.attributes('aria-busy')).toBe('true')
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
})
