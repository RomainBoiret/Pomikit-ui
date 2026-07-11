import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Dialog from './Dialog.vue'
import Button from '../Button/Button.vue'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Dialog, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <Dialog v-model:open="open" title="Welcome" description="A calm dialog with keyboard-friendly focus handling.">
        <template #trigger>
          <Button @click="open = true">Open dialog</Button>
        </template>
        Use Escape or the close control to dismiss. Focus returns to the trigger.
        <template #footer>
          <Button variant="ghost" tone="neutral" @click="open = false">Cancel</Button>
          <Button @click="open = false">Continue</Button>
        </template>
      </Dialog>
    `,
  }),
}

export const Controlled: Story = {
  render: () => ({
    components: { Dialog, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:flex-start">
        <Button @click="open = true">Open controlled dialog</Button>
        <Dialog
          v-model:open="open"
          title="Controlled"
          description="Opened from outside via v-model:open."
        >
          No trigger slot — the parent owns the open state.
          <template #footer>
            <Button @click="open = false">Close</Button>
          </template>
        </Dialog>
      </div>
    `,
  }),
}
