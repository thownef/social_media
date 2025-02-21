import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { tokenStore } from "./src/shared/utils/tokenStore";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/broadcasting/auth': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            const cookies = req.headers.cookie?.match(/accessToken=([^;]+)/);
            const token = cookies ? cookies[1] : null;

            if (token) {
              proxyReq.setHeader('Authorization', `Bearer ${token}`);
            }
          });
        }
      },
    },
  }
});
