import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vue3-component-library',
      fileName: (format) => `${'vue3-component-library'}.${format}.js`,
    },
    rollupOptions: {
      // Vue is provided by the parent project, don't compile Vue source-code inside our library.
      external: ['vue'],
      output: { globals: { vue: 'Vue' } },
    },
  },
})
