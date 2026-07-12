import type { Meta, StoryObj } from '@storybook/vue3'
import ErrorState from '../src/components/ErrorState/ErrorState.vue'

const meta = {
  title: 'Components/ErrorState',
  component: ErrorState,
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorState>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => ({
    components: { ErrorState },
    setup() {
      function retry() {
        // story demo
      }
      return { retry }
    },
    template: `
      <ErrorState
        title="Couldn’t load projects"
        :error="new Error('Request timed out')"
        @retry="retry"
      />
    `,
  }),
}
