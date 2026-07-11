import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('Input', () => {
  it('renders label and emits update:modelValue', async () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Name',
        modelValue: '',
      },
    })

    expect(wrapper.find('label').text()).toBe('Name')
    await wrapper.find('input').setValue('Romain')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['Romain'])
  })

  it('exposes error with aria-invalid', () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Email',
        error: 'Required',
        modelValue: '',
      },
    })

    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
    expect(wrapper.find('.pomi-input__error').text()).toBe('Required')
    expect(wrapper.classes()).toContain('pomi-input--invalid')
  })

  it('links hint via aria-describedby', () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Bio',
        hint: 'Optional',
        modelValue: '',
      },
    })

    const describedBy = wrapper.find('input').attributes('aria-describedby')
    expect(describedBy).toBeTruthy()
    expect(wrapper.find(`#${describedBy}`).text()).toBe('Optional')
  })
})
