import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { 
        find: "@", 
        replacement: resolve(__dirname, "./src") 
      },
      { 
        find: "vue", 
        replacement: "@vue/compat"
      }
    ]
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 3
          }
        }
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // You can add global SCSS imports here if needed
        // additionalData: `@import "@/styles/custom-bootstrap.scss";` // Optional
      }
    }
  }
  // server: {
  //   host: true,
  //   cors: true,
  //   port: 8081,
  //   hmr: {
  //     clientPort: 8081,
  //     watch: {
  //       usePolling: true
  //     }
  //   },
  //   proxy: {
  //     '*': {
  //       target: 'http://localhost',
  //       changeOrigin: true,
  //     },
  //   },
  // }
})