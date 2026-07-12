import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '../src/components/Button/Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Intent-driven Button: if \`@click\` returns a Promise, Pomikit runs the full action pipeline:

idle → busy → success|error → idle

Width stays locked. No loading ref required. Use \`feedback={false}\` to skip the flash.
Optional \`busyText\` / \`successText\` / \`errorText\` for progressive disclosure (no auto i18n).

\`\`\`vue
<Button @click="save">Save</Button>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'icon'] },
    variant: { control: 'select', options: ['solid', 'outline', 'ghost', 'soft'] },
    tone: { control: 'select', options: ['primary', 'neutral', 'danger', 'success'] },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    block: { control: 'boolean' },
  },
  args: {
    size: 'md',
    variant: 'solid',
    tone: 'primary',
    disabled: false,
    loading: false,
    block: false,
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
        <Button size="icon" aria-label="Favorite">★</Button>
      </div>
    `,
  }),
}

export const Block: Story = {
  render: () => ({
    components: { Button },
    template: '<div style="width:280px"><Button block>Continue</Button></div>',
  }),
}

export const AsLink: Story = {
  render: () => ({
    components: { Button },
    template: '<Button href="https://example.com" target="_blank">Open docs</Button>',
  }),
}

export const Loading: Story = {
  name: 'Loading (controlled)',
  render: () => ({
    components: { Button },
    template: '<Button loading>Saving</Button>',
  }),
}

export const IntentAsync: Story = {
  name: 'Intent — async click',
  parameters: {
    docs: {
      description: {
        story:
          'Promise click → busy → success/error flash → idle. Sync handlers stay unchanged. Rejected promises show a discrete error state.',
      },
    },
  },
  render: () => ({
    components: { Button },
    setup() {
      async function save() {
        await new Promise((resolve) => setTimeout(resolve, 1200))
      }
      async function fail() {
        await new Promise((_, reject) => setTimeout(() => reject(new Error('nope')), 800))
      }
      return { save, fail }
    },
    template: `
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
        <Button @click="save">Save</Button>
        <Button busy-text="Saving…" success-text="Saved" @click="save">Save with text</Button>
        <Button tone="danger" variant="outline" @click="fail">Will fail</Button>
        <Button variant="outline" tone="neutral" @click="() => undefined">Sync (no busy)</Button>
      </div>
    `,
  }),
}

export const IntentConfirm: Story = {
  name: 'Intent — confirm in place',
  render: () => ({
    components: { Button },
    setup() {
      async function remove() {
        await new Promise((resolve) => setTimeout(resolve, 600))
      }
      return { remove }
    },
    template: `
      <Button tone="danger" confirm="Delete forever?" @click="remove">
        Delete
      </Button>
    `,
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
