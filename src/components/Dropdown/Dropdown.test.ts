import { describe, expect, it } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from './index'
import Button from '../Button/Button.vue'

describe('Dropdown', () => {
  it('renders trigger and opens content', async () => {
    const Host = defineComponent({
      components: { Dropdown, DropdownTrigger, DropdownContent, DropdownItem, Button },
      setup() {
        return () =>
          h(Dropdown, null, {
            default: () => [
              h(DropdownTrigger, null, {
                default: () => h(Button, null, { default: () => 'Menu' }),
              }),
              h(DropdownContent, null, {
                default: () =>
                  h(DropdownItem, { icon: 'pencil' }, { default: () => 'Edit' }),
              }),
            ],
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
