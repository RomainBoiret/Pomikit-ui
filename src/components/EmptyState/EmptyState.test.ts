import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import EmptyState from './EmptyState.vue'
import Button from '../Button/Button.vue'

describe('EmptyState', () => {
  it('renders title and description', () => {
    const wrapper = mount(EmptyState, {
      props: {
        title: 'No projects yet',
        description: 'Create your first project.',
      },
    })
    expect(wrapper.attributes('role')).toBe('status')
    expect(wrapper.find('.pomi-feedback__title').text()).toBe('No projects yet')
    expect(wrapper.find('.pomi-feedback__description').text()).toContain('Create')
  })

  it('renders action slot', () => {
    const wrapper = mount(EmptyState, {
      props: { title: 'Empty' },
      slots: {
        action: '<button type="button">New</button>',
      },
      global: { components: { Button } },
    })
    expect(wrapper.find('.pomi-feedback__action').text()).toContain('New')
  })
})
