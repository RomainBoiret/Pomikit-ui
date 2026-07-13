import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import Checkbox from './Checkbox.vue'
import Switch from '../Switch/Switch.vue'

describe('Checkbox / Switch', () => {
  it('toggles checkbox model', async () => {
    const model = ref(false)
    const wrapper = mount(Checkbox, {
      props: {
        label: 'Accept',
        modelValue: model.value,
        'onUpdate:modelValue': (v: boolean | 'indeterminate') => {
          model.value = v === true
        },
      },
    })
    await wrapper.find('button').trigger('click')
    await nextTick()
    expect(model.value).toBe(true)
  })

  it('toggles switch model', async () => {
    const model = ref(false)
    const wrapper = mount(Switch, {
      props: {
        label: 'Dark',
        modelValue: model.value,
        'onUpdate:modelValue': (v: boolean) => {
          model.value = v
        },
      },
    })
    await wrapper.find('button').trigger('click')
    await nextTick()
    expect(model.value).toBe(true)
  })
})
