import { setup } from '@storybook/vue3'
import type { Preview } from '@storybook/vue3'
import { applyTheme, createTheme } from '../src/theme'
import '../src/styles/index.css'

applyTheme(
  createTheme({
    accent: '#5B5FFF',
    radius: 'soft',
    density: 'comfortable',
    motion: 'expressive',
  }),
)

setup(() => {
  // Theme applied on documentElement above.
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
    backgrounds: {
      default: 'pomikit',
      values: [
        { name: 'pomikit', value: '#F6F5F2' },
        { name: 'dark', value: '#0B0D12' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
}

export default preview
