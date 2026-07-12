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
    wrapper.unmount()
  })
})
