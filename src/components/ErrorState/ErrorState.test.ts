import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ErrorState from './ErrorState.vue'

describe('ErrorState', () => {
  it('shows retry when @retry is provided', async () => {
    const onRetry = vi.fn()
    const wrapper = mount(ErrorState, {
      props: {
        title: 'Failed',
        error: new Error('Network down'),
        onRetry,
      },
    })

    expect(wrapper.attributes('role')).toBe('alert')
    expect(wrapper.find('.pomi-feedback__description').text()).toBe('Network down')
    await wrapper.find('button').trigger('click')
    expect(onRetry).toHaveBeenCalledTimes(1)
  })

  it('hides retry when no listener', () => {
    const wrapper = mount(ErrorState, {
      props: { title: 'Failed' },
    })
    expect(wrapper.find('.pomi-feedback__action').exists()).toBe(false)
  })
})
