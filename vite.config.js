import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 这个用于启动
    port: '8092', // 指定启动端口
    open: true, //启动后是否自动打开浏览器
    proxy: {
      // 代理规则：将所有以 /api/github 开头的请求转发到 GitHub
      '/api/github': {
        target: 'https://github.com', // GitHub 的域名
        changeOrigin: true, // 修改请求头中的 Host 为目标地址
        rewrite: (path) => path.replace(/^\/api\/github/, ''), // 去掉路径前缀
        secure: false, // 如果目标地址是 HTTPS，可能需要关闭证书验证（开发环境）
      },
    },
  }

})
