import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Input from './Input.vue'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    size: 'md',
    disabled: false,
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" style="max-width:320px" />',
  }),
}

export const WithHint: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <Input
        v-model="value"
        label="Username"
        hint="Visible on your public profile"
        placeholder="romain"
        style="max-width:320px"
      />
    `,
  }),
}

export const WithError: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref('bad')
      return { value }
    },
    template: `
      <Input
        v-model="value"
        label="Password"
        type="password"
        error="Must be at least 8 characters"
        style="max-width:320px"
      />
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div style="display:grid;gap:1rem;max-width:320px">
        <Input size="sm" label="Small" placeholder="Small" />
        <Input size="md" label="Medium" placeholder="Medium" />
        <Input size="lg" label="Large" placeholder="Large" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Input },
    template: `
      <Input
        label="Disabled"
        model-value="Locked value"
        disabled
        style="max-width:320px"
      />
    `,
  }),
}
