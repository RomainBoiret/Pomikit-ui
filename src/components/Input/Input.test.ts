import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'
import { rules } from '../../utils/rules'

describe('Input', () => {
  it('renders label and emits update:modelValue', async () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Name',
        modelValue: '',
      },
    })

    expect(wrapper.find('label').text()).toContain('Name')
    await wrapper.find('input').setValue('Romain')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['Romain'])
  })

  it('exposes error with aria-invalid; error replaces hint in describedby', () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Email',
        hint: 'Work email',
        error: 'Required',
        modelValue: '',
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('aria-invalid')).toBe('true')
    expect(wrapper.find('.pomi-input__error').text()).toBe('Required')
    expect(wrapper.classes()).toContain('pomi-input--invalid')

    const describedBy = input.attributes('aria-describedby')?.split(' ') ?? []
    expect(describedBy).toHaveLength(1)
    expect(wrapper.find('.pomi-input__hint').exists()).toBe(false)
  })

  it('forwards native attrs to the input element', () => {
    const wrapper = mount(Input, {
      props: { label: 'Code', modelValue: '' },
      attrs: {
        maxlength: '4',
        'data-testid': 'code-input',
        class: 'layout-class',
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('maxlength')).toBe('4')
    expect(input.attributes('data-testid')).toBe('code-input')
    expect(wrapper.classes()).toContain('layout-class')
    expect(input.classes()).not.toContain('layout-class')
  })

  it('supports readonly, required and clearable', async () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Search',
        modelValue: 'query',
        readonly: true,
        required: true,
        clearable: true,
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('readonly')).toBeDefined()
    expect(input.attributes('required')).toBeDefined()
    expect(wrapper.find('.pomi-input__required').exists()).toBe(true)

    await wrapper.setProps({ readonly: false })
    expect(wrapper.find('.pomi-input__clear').classes()).toContain('pomi-input__clear--visible')
    await wrapper.find('.pomi-input__clear').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([''])
    expect(wrapper.emitted('clear')).toBeTruthy()
  })

  it('reserves clear space when clearable even if empty', () => {
    const wrapper = mount(Input, {
      props: { modelValue: '', clearable: true, type: 'search' },
    })

    expect(wrapper.find('.pomi-input__control--trailing').exists()).toBe(true)
    expect(wrapper.find('.pomi-input__clear').exists()).toBe(true)
    expect(wrapper.find('.pomi-input__clear').classes()).not.toContain(
      'pomi-input__clear--visible',
    )
  })

  it('renders leading and trailing slots', () => {
    const wrapper = mount(Input, {
      props: { modelValue: '' },
      slots: {
        leading: '<span class="lead">L</span>',
        trailing: '<span class="trail">T</span>',
      },
    })

    expect(wrapper.find('.lead').exists()).toBe(true)
    expect(wrapper.find('.trail').exists()).toBe(true)
  })

  it('shows a built-in search icon for type=search', () => {
    const wrapper = mount(Input, {
      props: { type: 'search', modelValue: '', label: 'Search' },
    })

    expect(wrapper.find('.pomi-input__search-icon').exists()).toBe(true)
    expect(wrapper.find('.pomi-input__control--leading').exists()).toBe(true)
  })

  it('lets leading slot replace the search icon', () => {
    const wrapper = mount(Input, {
      props: { type: 'search', modelValue: '' },
      slots: { leading: '<span class="custom-lead">X</span>' },
    })

    expect(wrapper.find('.custom-lead').exists()).toBe(true)
    expect(wrapper.find('.pomi-input__search-icon').exists()).toBe(false)
  })

  it('validates rules on blur (intent)', async () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Email',
        modelValue: 'bad',
        rules: [rules.email()],
      },
    })

    await wrapper.find('input').trigger('blur')
    await nextTick()

    expect(wrapper.find('.pomi-input__error').text()).toContain('valid email')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('prevents form submit and focuses first invalid input', async () => {
    const FormHost = {
      components: { Input },
      template: `
        <form @submit.prevent="onSubmit">
          <Input label="Email" :model-value="''" :rules="[requiredRule]" />
          <button type="submit">Go</button>
        </form>
      `,
      setup() {
        const onSubmit = vi.fn()
        return { onSubmit, requiredRule: rules.required() }
      },
    }

    const wrapper = mount(FormHost, { attachTo: document.body })
    await wrapper.find('form').trigger('submit')
    await nextTick()
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))

    expect(wrapper.find('.pomi-input__error').exists()).toBe(true)
    expect(document.activeElement).toBe(wrapper.find('input').element)
    wrapper.unmount()
  })
})
