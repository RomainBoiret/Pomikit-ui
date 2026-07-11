import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['solid', 'outline', 'ghost', 'soft'] },
    tone: { control: 'select', options: ['primary', 'neutral', 'danger', 'success'] },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: {
    size: 'md',
    variant: 'solid',
    tone: 'primary',
    disabled: false,
    loading: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Continue</Button>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    `,
  }),
}

export const Tones: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
        <Button tone="primary">Primary</Button>
        <Button tone="neutral">Neutral</Button>
        <Button tone="success">Success</Button>
        <Button tone="danger">Danger</Button>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
}

export const Loading: Story = {
  render: () => ({
    components: { Button },
    template: '<Button loading>Saving</Button>',
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Button },
    template: '<Button disabled>Disabled</Button>',
  }),
}

export const WithSlots: Story = {
  render: () => ({
    components: { Button },
    template: `
      <Button>
        <template #leading>★</template>
        Favorite
      </Button>
    `,
  }),
}
