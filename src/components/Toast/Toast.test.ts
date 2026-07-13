import { describe, expect, it } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import ToastProvider from './ToastProvider.vue'
import { useToast } from '../../composables/useToast'
import Button from '../Button/Button.vue'

describe('Toast', () => {
  it('shows a toast via useToast', async () => {
    const Probe = defineComponent({
      setup() {
        const toast = useToast()
        return () =>
          h(
            Button,
            {
              onClick: () => toast.success('Saved'),
            },
            { default: () => 'Notify' },
          )
      },
    })

    const Host = defineComponent({
      setup() {
        return () => h(ToastProvider, null, { default: () => h(Probe) })
      },
    })

    const wrapper = mount(Host, { attachTo: document.body })
    await wrapper.find('button').trigger('click')
    await nextTick()
    expect(document.body.textContent).toContain('Saved')
    expect(document.body.querySelector('.pomi-toast--success')).toBeTruthy()
    wrapper.unmount()
  })

  it('supports warning and info helpers', async () => {
    const Probe = defineComponent({
      setup() {
        const toast = useToast()
        return () =>
          h('div', [
            h(Button, { onClick: () => toast.warning('Careful') }, () => 'Warn'),
            h(Button, { onClick: () => toast.info('Note') }, () => 'Info'),
          ])
      },
    })

    const Host = defineComponent({
      setup() {
        return () => h(ToastProvider, null, { default: () => h(Probe) })
      },
    })

    const wrapper = mount(Host, { attachTo: document.body })
    const buttons = wrapper.findAll('button')
    await buttons[0]!.trigger('click')
    await nextTick()
    expect(document.body.textContent).toContain('Careful')
    expect(document.body.querySelector('.pomi-toast--warning')).toBeTruthy()

    await buttons[1]!.trigger('click')
    await nextTick()
    expect(document.body.textContent).toContain('Note')
    expect(document.body.querySelector('.pomi-toast--info')).toBeTruthy()
    wrapper.unmount()
  })
})
