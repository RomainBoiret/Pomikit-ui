import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  root: resolve(__dirname),
  plugins: [vue()],
  resolve: {
    alias: {
      'pomikit-ui': resolve(__dirname, '../src/index.ts'),
    },
  },
  server: {
    port: 5173,
  },
})
