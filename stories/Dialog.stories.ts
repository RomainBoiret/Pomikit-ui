import type { Meta, StoryObj } from '@storybook/vue3'
import { defineComponent, ref } from 'vue'
import Dialog from '../src/components/Dialog/Dialog.vue'
import PomiButton from '../src/components/Button/Button.vue'
import { DialogProvider } from '../src/components/DialogProvider'
import { useDialog } from '../src/composables/useDialog'

const IntentConfirmDemo = defineComponent({
  components: { PomiButton },
  setup() {
    const dialog = useDialog()
    const last = ref('—')
    async function ask() {
      const ok = await dialog.confirm({
        title: 'Delete project?',
        description: 'This cannot be undone.',
        confirmLabel: 'Delete',
        tone: 'danger',
        async onConfirm() {
          await new Promise((r) => setTimeout(r, 800))
        },
      })
      last.value = ok ? 'confirmed' : 'cancelled'
    }
    return { ask, last }
  },
  template: `
    <div style="display:flex;flex-direction:column;gap:0.75rem;align-items:flex-start">
      <PomiButton tone="danger" @click="ask">Delete via useDialog</PomiButton>
      <span>Last result: {{ last }}</span>
    </div>
  `,
})

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    closeOnInteractOutside: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Dialog, PomiButton },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <Dialog v-model:open="open" title="Welcome" description="A calm dialog with keyboard-friendly focus handling.">
        <template #trigger>
          <PomiButton>Open dialog</PomiButton>
        </template>
        Use Escape or the close control to dismiss. Focus returns to the trigger.
        <template #footer>
          <PomiButton variant="ghost" tone="neutral" @click="open = false">Cancel</PomiButton>
          <PomiButton @click="open = false">Continue</PomiButton>
        </template>
      </Dialog>
    `,
  }),
}

export const IntentConfirm: Story = {
  name: 'Intent — useDialog().confirm()',
  render: () => ({
    components: { DialogProvider, IntentConfirmDemo },
    template: `<DialogProvider><IntentConfirmDemo /></DialogProvider>`,
  }),
}

export const Controlled: Story = {
  render: () => ({
    components: { Dialog, PomiButton },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:flex-start">
        <PomiButton @click="open = true">Open controlled dialog</PomiButton>
        <Dialog
          v-model:open="open"
          title="Controlled"
          description="Opened from outside via v-model:open."
        >
          No trigger slot — the parent owns the open state.
          <template #footer>
            <PomiButton @click="open = false">Close</PomiButton>
          </template>
        </Dialog>
      </div>
    `,
  }),
}
