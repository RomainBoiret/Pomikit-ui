import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Checkbox from '../src/components/Checkbox/Checkbox.vue'
import Switch from '../src/components/Switch/Switch.vue'

const meta = {
  title: 'Components/Choice',
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Family: Story = {
  render: () => ({
    components: { Checkbox, Switch },
    setup: () => ({
      accept: ref(false),
      dark: ref(true),
    }),
    template: `
      <div style="display:grid;gap:1.25rem;min-width:16rem">
        <Checkbox v-model="accept" label="Accept terms" />
        <Switch v-model="dark" label="Dark mode" />
      </div>
    `,
  }),
}
