import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import PkgConfig from "vite-plugin-package-config";
import OptimizationPersist from "vite-plugin-optimize-persist";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    PkgConfig(),
    OptimizationPersist(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/css/globalVariable.scss";',
      },
    },
  },
});
