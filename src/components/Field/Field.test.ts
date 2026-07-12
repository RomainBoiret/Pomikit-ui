import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Field from './Field.vue'
import Input from '../Input/Input.vue'

describe('Field', () => {
  it('wires label for/id and helper describedby to nested Input', () => {
    const wrapper = mount(Field, {
      props: {
        label: 'Email',
        helper: 'We never share your email.',
        required: true,
      },
      slots: {
        default: '<Input model-value="" />',
      },
      global: {
        components: { Input },
      },
    })

    const input = wrapper.find('input')
    const label = wrapper.find('label')
    expect(label.text()).toContain('Email')
    expect(label.attributes('for')).toBe(input.attributes('id'))
    expect(input.attributes('aria-describedby')).toBeTruthy()
    expect(input.attributes('aria-required')).toBe('true')
    expect(wrapper.find('.pomi-input__label').exists()).toBe(false)
  })

  it('shows intent validation error from nested Input without layout chrome on Input', async () => {
    const wrapper = mount(Field, {
      props: {
        label: 'Name',
        helper: 'Visible name',
        required: true,
      },
      slots: {
        default: '<Input model-value="" />',
      },
      global: {
        components: { Input },
      },
    })

    await wrapper.find('input').trigger('blur')
    await nextTick()

    expect(wrapper.find('.pomi-field__error').text()).toContain('required')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
    expect(wrapper.find('.pomi-input__error').exists()).toBe(false)
  })

  it('prefers controlled Field error over intent', () => {
    const wrapper = mount(Field, {
      props: {
        label: 'Email',
        error: 'Server rejected',
      },
      slots: {
        default: '<PomiInput model-value="a@b.c" />',
      },
      global: {
        components: { PomiInput: Input },
      },
    })

    expect(wrapper.find('.pomi-field__error').text()).toBe('Server rejected')
  })
})
