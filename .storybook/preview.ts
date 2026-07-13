import { setup } from '@storybook/vue3'
import type { Preview } from '@storybook/vue3'
import { applyTheme, createTheme } from '../src/theme'
import '../src/styles/index.css'

applyTheme(
  createTheme({
    accent: '#34C759',
    design: 'linear',
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
      values: [{ name: 'pomikit', value: 'var(--pomi-bg)' }],
    },
  },
}

export default preview
