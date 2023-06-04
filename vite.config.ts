/// <reference types="vitest"/>
/// <reference types="Vite/client"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  test: {
    globals: true,
    environment: "jsdom"
  }
})
