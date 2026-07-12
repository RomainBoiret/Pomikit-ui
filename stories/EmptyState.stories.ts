import type { Meta, StoryObj } from '@storybook/vue3'
import EmptyState from '../src/components/EmptyState/EmptyState.vue'
import Button from '../src/components/Button/Button.vue'

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  args: {
    title: 'No projects yet',
    description: 'Create your first project to get started.',
  },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithAction: Story = {
  render: (args) => ({
    components: { EmptyState, Button },
    setup: () => ({ args }),
    template: `
      <EmptyState v-bind="args">
        <template #action>
          <Button size="sm">New project</Button>
        </template>
      </EmptyState>
    `,
  }),
}
