import type { Meta, StoryObj } from '@storybook/vue3'
import { defineComponent, h } from 'vue'
import ToastProvider from '../src/components/Toast/ToastProvider.vue'
import Button from '../src/components/Button/Button.vue'
import { useToast } from '../src/composables/useToast'

const meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => ({
    components: {
      ToastProvider,
      Demo: defineComponent({
        components: { Button },
        setup() {
          const toast = useToast()
          return { toast }
        },
        template: `
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
            <Button @click="toast.success('Saved', 'Profile updated')">Success</Button>
            <Button tone="danger" variant="outline" @click="toast.error('Failed', 'Try again')">Error</Button>
            <Button variant="soft" @click="toast.show('Hello from Pomikit')">Neutral</Button>
          </div>
        `,
      }),
    },
    setup: () => () => h(ToastProvider, null, { default: () => h('div') }),
    template: `
      <ToastProvider>
        <Demo />
      </ToastProvider>
    `,
  }),
}
