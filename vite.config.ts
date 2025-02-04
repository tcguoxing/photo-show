import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@views': fileURLToPath(new URL('./src/views', import.meta.url))
    }
  },
  server: {
    proxy: {
      // 代理规则
      '/dev': {
        target: 'http://localhost:3000', // 目标服务器地址
        changeOrigin: true, // 是否改变请求源
        rewrite: (path) => path.replace(/^\/dev/, ''), // 重写请求路径
      },
    },
  },
})
// export default defineConfig(({ command, mode, ssrBuild }) => {
//   if (command === 'serve') {
//     return {
//       // dev 独有配置
//     }
//   } else {
//     // command === 'build'
//     return {
//       // build 独有配置
//     }
//   }
// })
