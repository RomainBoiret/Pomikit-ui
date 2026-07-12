import type { Meta, StoryObj } from '@storybook/vue3'
import Dropdown from '../src/components/Dropdown/Dropdown.vue'
import DropdownItem from '../src/components/Dropdown/DropdownItem.vue'
import DropdownSeparator from '../src/components/Dropdown/DropdownSeparator.vue'
import Button from '../src/components/Button/Button.vue'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => ({
    components: { Dropdown, DropdownItem, DropdownSeparator, Button },
    template: `
      <Dropdown>
        <template #trigger>
          <Button variant="outline">Actions</Button>
        </template>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem tone="danger">Delete</DropdownItem>
      </Dropdown>
    `,
  }),
}
