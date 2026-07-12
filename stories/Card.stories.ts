import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Card from '../src/components/Card/Card.vue'
import Button from '../src/components/Button/Button.vue'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['elevated', 'outline', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    titleAs: { control: 'select', options: ['h2', 'h3', 'h4', 'div'] },
  },
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

export const WithMediaAndActions: Story = {
  render: () => ({
    components: { Card, Button },
    template: `
      <Card style="max-width: 360px" title-as="h2">
        <template #media>
          <div style="height:140px;background:color-mix(in srgb, var(--pomi-accent) 16%, #e8ecf8)"></div>
        </template>
        <template #title>Pomikit</template>
        <template #description>Elegant Vue components.</template>
        A calm surface for product content.
        <template #footer>
          <Button variant="outline" tone="neutral">Details</Button>
          <Button>Open</Button>
        </template>
      </Card>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div style="display:grid;gap:1rem;max-width:360px">
        <Card variant="elevated"><template #title>Elevated</template>Default card surface.</Card>
        <Card variant="outline"><template #title>Outline</template>Border only, no shadow.</Card>
        <Card variant="ghost"><template #title>Ghost</template>Transparent surface.</Card>
      </div>
    `,
  }),
}

export const ContentOnly: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card style="max-width: 360px" variant="outline" size="sm">
        Simple content card with no header or footer.
      </Card>
    `,
  }),
}

export const IntentLink: Story = {
  name: 'Intent — href',
  render: () => ({
    components: { Card },
    template: `
      <Card href="https://example.com" target="_blank" style="max-width:360px">
        <template #title>Documentation</template>
        <template #description>Navigational card — whole surface is the link.</template>
        Open the docs in a new tab.
      </Card>
    `,
  }),
}

export const IntentSelectable: Story = {
  name: 'Intent — selectable',
  render: () => ({
    components: { Card },
    setup() {
      const selected = ref('a')
      return { selected }
    },
    template: `
      <div style="display:grid;gap:0.75rem;max-width:360px">
        <Card
          selectable
          :selected="selected === 'a'"
          @update:selected="selected = 'a'"
        >
          <template #title>Starter</template>
          Free for solo builders.
        </Card>
        <Card
          selectable
          :selected="selected === 'b'"
          @update:selected="selected = 'b'"
        >
          <template #title>Pro</template>
          For teams that ship weekly.
        </Card>
      </div>
    `,
  }),
}
