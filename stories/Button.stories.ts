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
Less decisions. Better interfaces.

\`\`\`vue
<Button @click="save">Save</Button>
\`\`\`

Promise click → busy → success|error. \`confirm\` for second-click commit.
Never lead with variant / tone / size — those are internal escape hatches only.
        `.trim(),
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Button },
    template: '<Button>Continue</Button>',
  }),
}

export const IntentAsync: Story = {
  name: 'Intent — async click',
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
        <Button @click="fail">Will fail</Button>
      </div>
    `,
  }),
}

export const IntentConfirm: Story = {
  name: 'Intent — confirm',
  render: () => ({
    components: { Button },
    setup() {
      async function remove() {
        await new Promise((resolve) => setTimeout(resolve, 600))
      }
      return { remove }
    },
    template: `
      <Button confirm="Delete forever?" @click="remove">Delete</Button>
    `,
  }),
}

export const AsLink: Story = {
  render: () => ({
    components: { Button },
    template: '<Button href="https://example.com" target="_blank">Open docs</Button>',
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

export const EscapeHatches: Story = {
  name: 'Advanced — escape hatches',
  parameters: {
    docs: {
      description: {
        story:
          'variant / tone / size exist for rare exceptions. Prefer changing the Design Kit instead.',
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;flex-direction:column;gap:1rem">
        <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
          <Button tone="primary">Primary</Button>
          <Button tone="neutral">Neutral</Button>
          <Button tone="success">Success</Button>
          <Button tone="danger">Danger</Button>
        </div>
        <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
    `,
  }),
}
