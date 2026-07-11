import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const isLibBuild = process.env.npm_lifecycle_event === 'build'

export default defineConfig({
  plugins: [
    vue(),
    ...(isLibBuild
      ? [
          dts({
            include: ['src'],
            outDir: 'dist',
            rollupTypes: true,
            tsconfigPath: './tsconfig.json',
          }),
        ]
      : []),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PomikitUI',
      fileName: 'pomikit-ui',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue', 'reka-ui'],
      output: {
        globals: {
          vue: 'Vue',
          'reka-ui': 'RekaUI',
        },
        assetFileNames: 'pomikit-ui.[ext]',
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
  },
})
