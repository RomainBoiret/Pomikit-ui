import { describe, expect, it } from 'vitest'
import { defineComponent, nextTick } from 'vue'
import { mount, flushPromises } from '@vue/test-utils'
import { DialogProvider } from './index'
import { useDialog } from '../../composables/useDialog'

describe('DialogProvider / useDialog', () => {
  it('resolves confirm() with true when confirmed', async () => {
    let resultPromise!: Promise<boolean>

    const Probe = defineComponent({
      setup() {
        const dialog = useDialog()
        return {
          open() {
            resultPromise = dialog.confirm({
              title: 'Delete item',
              description: 'This cannot be undone.',
            })
          },
        }
      },
      template: `<button type="button" class="probe" @click="open">Ask</button>`,
    })

    const wrapper = mount(
      defineComponent({
        components: { DialogProvider, Probe },
        template: `<DialogProvider><Probe /></DialogProvider>`,
      }),
      { attachTo: document.body },
    )

    await wrapper.find('.probe').trigger('click')
    await nextTick()
    await flushPromises()

    expect(document.body.textContent).toContain('Delete item')

    const buttons = Array.from(document.body.querySelectorAll('button'))
    const confirmBtn = buttons.find((b) => b.textContent?.includes('Confirm'))
    expect(confirmBtn).toBeTruthy()
    confirmBtn!.click()
    await flushPromises()

    await expect(resultPromise).resolves.toBe(true)
    wrapper.unmount()
  })

  it('keeps dialog open while onConfirm promise is pending', async () => {
    let resolveConfirm!: () => void
    const pending = new Promise<void>((res) => {
      resolveConfirm = res
    })

    const Probe = defineComponent({
      setup() {
        const dialog = useDialog()
        return {
          open() {
            void dialog.confirm({
              title: 'Save',
              onConfirm: () => pending,
            })
          },
        }
      },
      template: `<button type="button" class="probe" @click="open">Ask</button>`,
    })

    const wrapper = mount(
      defineComponent({
        components: { DialogProvider, Probe },
        template: `<DialogProvider><Probe /></DialogProvider>`,
      }),
      { attachTo: document.body },
    )

    await wrapper.find('.probe').trigger('click')
    await nextTick()
    await flushPromises()

    const confirmBtn = Array.from(document.body.querySelectorAll('button')).find((b) =>
      b.textContent?.includes('Confirm'),
    )
    confirmBtn!.click()
    await nextTick()
    await flushPromises()

    expect(document.body.textContent).toContain('Save')
    expect(confirmBtn!.getAttribute('aria-busy')).toBe('true')

    resolveConfirm()
    await flushPromises()
    await nextTick()

    expect(document.body.textContent).not.toContain('Save')
    wrapper.unmount()
  })
})
