import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { BASE_PATH } from "./src/config";
import { join } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
  // 配置@路径, 应用组件时使用@代替./src/
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": join(__dirname, "src"),
    },
  },
});
