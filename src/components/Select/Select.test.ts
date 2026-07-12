import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Select from './Select.vue'

describe('Select', () => {
  it('renders trigger with placeholder', () => {
    const wrapper = mount(Select, {
      props: {
        placeholder: 'Pick one',
        options: [
          { label: 'Ada', value: 'ada' },
          { label: 'Grace', value: 'grace' },
        ],
      },
      attachTo: document.body,
    })
    expect(wrapper.text()).toContain('Pick one')
    wrapper.unmount()
  })

  it('shows loading intent when pending', () => {
    const wrapper = mount(Select, {
      props: {
        pending: true,
        options: [],
      },
      attachTo: document.body,
    })
    expect(wrapper.find('[aria-busy="true"]').exists()).toBe(true)
    wrapper.unmount()
  })
})
