import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleImport from "vite-plugin-style-import";
import { resolve } from "path";
import { readFileSync } from "fs";
import lessToJS from "less-vars-to-js";
import configs from "./src/config";

// less-vars-to-js将less样式转化为json键值对的形式
const themeVariables = lessToJS(
  readFileSync(resolve(__dirname, "./src/styles/variables.less"), "utf8")
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 配置 vite-plugin-style-import, 解决 AntDesign 按需加载
    styleImport({
      libs: [
        {
          libraryName: "antd",
          esModule: true,
          resolveStyle: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    // 指定传递给 CSS 预处理器的选项
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联JavaScript
        modifyVars: themeVariables, // 重写less变量，定制Antd样式
      },
    },
  },
  resolve: {
    // 别名
    alias: {
      "@": resolve(__dirname, "src"), // src路径
    },
  },
  server: {
    port: configs.devPort,
    open: configs.devOpen,
    proxy: {
      "/api": {
        target: configs.proxyURL, //配置你要请求的服务器地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
