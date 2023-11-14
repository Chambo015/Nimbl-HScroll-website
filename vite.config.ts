import { defineConfig } from 'vite'
import {fileURLToPath, URL} from "node:url";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "@vueuse/core": ["@vueuse/core"],
          "gsap": ['gsap'],
          "axios": ['axios'],
          "vue3-lottie": ['vue3-lottie'],
        }
      }
    }
  }
})
