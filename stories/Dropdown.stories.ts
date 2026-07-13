import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
} from '../src/components/Dropdown'
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
    components: {
      Dropdown,
      DropdownTrigger,
      DropdownContent,
      DropdownItem,
      DropdownSeparator,
      Button,
    },
    template: `
      <Dropdown>
        <DropdownTrigger>
          <Button>Actions</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem icon="copy" shortcut="⌘D">Duplicate</DropdownItem>
          <DropdownItem icon="pencil" shortcut="F2">Rename</DropdownItem>
          <DropdownSeparator />
          <DropdownItem icon="trash" tone="danger" shortcut="⌘⌫">Delete</DropdownItem>
        </DropdownContent>
      </Dropdown>
    `,
  }),
}

export const WithSubmenu: Story = {
  render: () => ({
    components: {
      Dropdown,
      DropdownTrigger,
      DropdownContent,
      DropdownItem,
      DropdownSeparator,
      DropdownSub,
      DropdownSubTrigger,
      DropdownSubContent,
      Button,
    },
    template: `
      <Dropdown>
        <DropdownTrigger>
          <Button>Workspace</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem icon="folder" active>Current project</DropdownItem>
          <DropdownItem icon="plus">New file</DropdownItem>
          <DropdownSeparator />
          <DropdownSub>
            <DropdownSubTrigger icon="share">Share</DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownItem icon="link">Copy link</DropdownItem>
              <DropdownItem icon="external">Open in browser</DropdownItem>
            </DropdownSubContent>
          </DropdownSub>
          <DropdownSeparator />
          <DropdownItem icon="settings" shortcut="⌘,">Settings</DropdownItem>
          <DropdownItem icon="logout">Sign out</DropdownItem>
        </DropdownContent>
      </Dropdown>
    `,
  }),
}
