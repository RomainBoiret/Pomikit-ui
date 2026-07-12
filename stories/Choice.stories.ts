import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Checkbox from '../src/components/Checkbox/Checkbox.vue'
import Switch from '../src/components/Switch/Switch.vue'
import { Radio, RadioGroup } from '../src/components/Radio'
import Field from '../src/components/Field/Field.vue'

const meta = {
  title: 'Components/Choice',
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Family: Story = {
  render: () => ({
    components: { Checkbox, Switch, Radio, RadioGroup, Field },
    setup: () => ({
      accept: ref(false),
      dark: ref(true),
      plan: ref('pro'),
    }),
    template: `
      <div style="display:grid;gap:1.25rem;min-width:16rem">
        <Checkbox v-model="accept" label="Accept terms" />
        <Switch v-model="dark" label="Dark mode" />
        <Field label="Plan">
          <RadioGroup v-model="plan">
            <Radio value="starter" label="Starter" />
            <Radio value="pro" label="Pro" />
          </RadioGroup>
        </Field>
      </div>
    `,
  }),
}
