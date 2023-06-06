/// <reference types="vitest"/>
/// <reference types="Vite/client"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  test: {
    globals: true,
    environment: "jsdom"
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@firebase': path.resolve(__dirname, './src/firebase'),
      '@functions': path.resolve(__dirname, './src/functions'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@sass': path.resolve(__dirname, './src/sass'),
      '@store': path.resolve(__dirname, './src/store')
    }
  }
})
