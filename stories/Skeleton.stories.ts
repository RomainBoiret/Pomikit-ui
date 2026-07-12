import type { Meta, StoryObj } from '@storybook/vue3'
import Skeleton from '../src/components/Skeleton/Skeleton.vue'

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  render: () => ({
    components: { Skeleton },
    template: '<div style="max-width:16rem"><Skeleton :lines="3" /></div>',
  }),
}

export const Shapes: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div style="display:grid;gap:1.25rem;max-width:18rem">
        <div style="display:flex;gap:0.85rem;align-items:center">
          <Skeleton variant="circle" />
          <div style="flex:1;min-width:0"><Skeleton :lines="2" /></div>
        </div>
        <Skeleton variant="rect" height="7rem" />
        <Skeleton :lines="4" />
      </div>
    `,
  }),
}

export const Static: Story = {
  render: () => ({
    components: { Skeleton },
    template: '<div style="max-width:16rem"><Skeleton :lines="3" :animated="false" /></div>',
  }),
}
