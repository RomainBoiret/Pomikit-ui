import { describe, expect, it } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { Dropdown, DropdownItem } from './index'
import Button from '../Button/Button.vue'

describe('Dropdown', () => {
  it('renders trigger and opens content', async () => {
    const Host = defineComponent({
      components: { Dropdown, DropdownItem, Button },
      setup() {
        return () =>
          h(Dropdown, null, {
            trigger: () => h(Button, null, { default: () => 'Menu' }),
            default: () => h(DropdownItem, null, { default: () => 'Edit' }),
          })
      },
    })
    const wrapper = mount(Host, { attachTo: document.body })
    expect(wrapper.text()).toContain('Menu')
    await wrapper.find('button').trigger('click')
    await nextTick()
    expect(document.body.textContent).toContain('Edit')
    wrapper.unmount()
  })
})
