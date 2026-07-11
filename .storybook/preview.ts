import { setup } from '@storybook/vue3'
import type { Preview } from '@storybook/vue3'
import '../src/styles/index.css'

setup(() => {
  // Named imports only — no global plugin registration.
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
}

export default preview
