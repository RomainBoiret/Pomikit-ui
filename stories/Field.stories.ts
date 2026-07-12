import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Field from '../src/components/Field/Field.vue'
import Input from '../src/components/Input/Input.vue'
import Button from '../src/components/Button/Button.vue'
import { rules } from '../src/utils/rules'

const meta = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Field owns form chrome (label, helper, error, ids, aria). Input owns typing.

\`\`\`vue
<Field label="Email" helper="We never share your email." required>
  <Input v-model="email" />
</Field>
\`\`\`

Helper and error share one reserved message row — zero layout shift.
        `.trim(),
      },
    },
  },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => ({
    components: { Field, Input },
    setup: () => ({ email: ref('') }),
    template: `
      <Field label="Email" helper="We never share your email." required style="max-width:20rem">
        <Input v-model="email" type="email" placeholder="you@example.com" />
      </Field>
    `,
  }),
}

export const WithRules: Story = {
  render: () => ({
    components: { Field, Input, Button },
    setup: () => ({
      email: ref(''),
      rules: [rules.email()],
    }),
    template: `
      <form style="display:grid;gap:1rem;max-width:20rem" @submit.prevent>
        <Field label="Email" helper="Work address" required>
          <Input v-model="email" type="email" :rules="rules" />
        </Field>
        <Button type="submit">Submit</Button>
      </form>
    `,
  }),
}

export const ControlledError: Story = {
  render: () => ({
    components: { Field, Input },
    template: `
      <Field label="Username" error="Already taken" style="max-width:20rem">
        <Input model-value="romain" />
      </Field>
    `,
  }),
}
