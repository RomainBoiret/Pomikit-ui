import type { StorybookConfig } from '@storybook/vue3-vite'
import { resolve } from 'node:path'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)', '../stories/**/*.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      builder: {
        viteConfigPath: resolve(__dirname, 'vite.config.ts'),
      },
    },
  },
}

export default config
