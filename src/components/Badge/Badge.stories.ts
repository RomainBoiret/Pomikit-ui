import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from './Badge.vue'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['solid', 'soft', 'outline'] },
    tone: { control: 'select', options: ['primary', 'neutral', 'danger', 'success'] },
  },
  args: {
    size: 'md',
    variant: 'soft',
    tone: 'primary',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">New</Badge>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
        <Badge variant="solid">Solid</Badge>
        <Badge variant="soft">Soft</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    `,
  }),
}

export const Tones: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
        <Badge tone="primary">Primary</Badge>
        <Badge tone="neutral">Neutral</Badge>
        <Badge tone="success">Success</Badge>
        <Badge tone="danger">Danger</Badge>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    `,
  }),
}
