import type { Meta, StoryObj } from '@storybook/vue3'
import Card from './Card.vue'
import Button from '../Button/Button.vue'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card style="max-width: 360px">
        <template #title>Project overview</template>
        <template #description>A short summary of the current workspace.</template>
        Keep related actions and content together without visual noise.
      </Card>
    `,
  }),
}

export const WithFooter: Story = {
  render: () => ({
    components: { Card, Button },
    template: `
      <Card style="max-width: 360px">
        <template #title>Confirm changes</template>
        <template #description>Review before publishing your updates.</template>
        Your local draft will become the public version.
        <template #footer>
          <Button variant="ghost" tone="neutral">Cancel</Button>
          <Button>Publish</Button>
        </template>
      </Card>
    `,
  }),
}

export const ContentOnly: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card style="max-width: 360px">
        Simple content card with no header or footer.
      </Card>
    `,
  }),
}
