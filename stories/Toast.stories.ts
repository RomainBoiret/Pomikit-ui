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
            <Button @click="toast.success('Saved', 'Your changes are live')">Success</Button>
            <Button @click="toast.error('Something went wrong', 'Please try again')">Error</Button>
            <Button @click="toast.warning('Heads up', 'This action cannot be undone')">Warning</Button>
            <Button @click="toast.info('New update', 'Keyboard shortcuts are available')">Info</Button>
          </div>
        `,
      }),
    },
    template: `
      <ToastProvider>
        <Demo />
      </ToastProvider>
    `,
  }),
}

export const Stack: Story = {
  render: () => ({
    components: {
      ToastProvider,
      Demo: defineComponent({
        components: { Button },
        setup() {
          const toast = useToast()
          function burst() {
            toast.info('Synced', 'Workspace is up to date')
            window.setTimeout(() => toast.success('Published', 'Landing page is live'), 180)
            window.setTimeout(() => toast.warning('Quota', '80% of your plan used'), 360)
          }
          return { burst }
        },
        template: `<Button @click="burst">Stack three toasts</Button>`,
      }),
    },
    template: `
      <ToastProvider>
        <Demo />
      </ToastProvider>
    `,
  }),
}
