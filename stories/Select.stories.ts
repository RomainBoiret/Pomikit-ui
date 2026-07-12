import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Select from '../src/components/Select/Select.vue'
import Field from '../src/components/Field/Field.vue'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => ({
    components: { Select, Field },
    setup: () => ({
      value: ref('grace'),
      options: [
        { label: 'Ada', value: 'ada' },
        { label: 'Grace', value: 'grace' },
        { label: 'Lin', value: 'lin' },
      ],
    }),
    template: `
      <Field label="Engineer" helper="Intent: options + pending, not 70 props." style="width:18rem">
        <Select v-model="value" :options="options" placeholder="Choose…" />
      </Field>
    `,
  }),
}

export const Pending: Story = {
  render: () => ({
    components: { Select },
    template: `<div style="width:18rem"><Select pending placeholder="Loading…" /></div>`,
  }),
}
