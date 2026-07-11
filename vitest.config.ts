import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'pomikit-ui': resolve(__dirname, 'src/index.ts'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    css: true,
    include: ['src/**/*.test.ts'],
  },
})
