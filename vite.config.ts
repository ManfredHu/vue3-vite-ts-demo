import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    port: 9110
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: {
        //   // reference:  避免重复引用
        //   hack: `true; @import (reference) "${path.resolve('src/style/base/import.variables.less')}";`
        // },
        javascriptEnabled: true, // 允许less执行js
      }
    },
  }
})
