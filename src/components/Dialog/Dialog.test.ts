import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Dialog from './Dialog.vue'
import Button from '../Button/Button.vue'

describe('Dialog', () => {
  it('renders trigger and opens content', async () => {
    const wrapper = mount(Dialog, {
      props: {
        open: false,
        title: 'Confirm',
        description: 'Are you sure?',
        'onUpdate:open': (value: boolean) => wrapper.setProps({ open: value }),
      },
      slots: {
        trigger: '<button type="button">Open</button>',
        default: 'Body content',
        footer: '<button type="button">Done</button>',
      },
      attachTo: document.body,
    })

    expect(wrapper.text()).toContain('Open')
    await wrapper.setProps({ open: true })
    await nextTick()

    expect(document.body.textContent).toContain('Confirm')
    expect(document.body.textContent).toContain('Body content')
    wrapper.unmount()
  })

  it('works with Button trigger', async () => {
    const wrapper = mount(Dialog, {
      props: {
        open: true,
        title: 'Hello',
      },
      global: {
        components: { Button },
      },
      slots: {
        trigger: '<Button>Launch</Button>',
        default: 'Inside',
      },
      attachTo: document.body,
    })

    await nextTick()
    expect(document.body.textContent).toContain('Hello')
    expect(document.body.textContent).toContain('Inside')
    wrapper.unmount()
  })
})
