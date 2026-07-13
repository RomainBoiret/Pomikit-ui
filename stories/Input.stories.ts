import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Input from '../src/components/Input/Input.vue'
import Field from '../src/components/Field/Field.vue'
import { rules } from '../src/utils/rules'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
    clearable: { control: 'boolean' },
  },
  args: {
    placeholder: 'john@company.com',
    size: 'md',
    disabled: false,
    readonly: false,
    required: false,
    clearable: false,
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const WithField: Story = {
  name: 'Field + Input',
  render: () => ({
    components: { Field, Input },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <Field
        label="Email"
        helper="We'll never share your email."
        required
        style="max-width:360px"
      >
        <Input v-model="value" type="email" placeholder="john@company.com" />
      </Field>
    `,
  }),
}

export const WithError: Story = {
  render: () => ({
    components: { Field, Input },
    setup() {
      const value = ref('john')
      return { value }
    },
    template: `
      <Field
        label="Email"
        error="Please enter a valid email."
        required
        style="max-width:360px"
      >
        <Input v-model="value" type="email" />
      </Field>
    `,
  }),
}

export const Standalone: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <Input
        v-bind="args"
        v-model="value"
        label="Email"
        hint="We'll never share your email."
        required
        style="max-width:360px"
      />
    `,
  }),
}

export const Search: Story = {
  render: () => ({
    components: { Field, Input },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <Field label="Search" style="max-width:360px">
        <Input v-model="value" type="search" placeholder="Find a component…" />
      </Field>
    `,
  }),
}

export const Password: Story = {
  render: () => ({
    components: { Field, Input },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <Field label="Password" required style="max-width:360px">
        <Input v-model="value" type="password" placeholder="••••••••" />
      </Field>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Field, Input },
    template: `
      <Field label="Account ID" style="max-width:360px">
        <Input model-value="acc_1842" disabled />
      </Field>
    `,
  }),
}

export const IntentRules: Story = {
  name: 'Intent — rules on blur',
  render: () => ({
    components: { Field, Input },
    setup() {
      const value = ref('')
      return { value, rules }
    },
    template: `
      <form style="max-width:360px;display:grid;gap:0.75rem" @submit.prevent>
        <Field label="Email" required helper="Work email preferred">
          <Input
            v-model="value"
            type="email"
            placeholder="you@company.com"
            :rules="[rules.email()]"
          />
        </Field>
        <button type="submit">Submit</button>
      </form>
    `,
  }),
}
