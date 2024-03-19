import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import type { UserConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const config: UserConfig = {
    plugins: [vue(), vueJsx({})],
    server: {
      port: 8080,
    },
    resolve: {
      alias: {
        "@": Bun.fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
  if (env.mode === "submodule") {
    config.build = {
      assetsDir: "projects/test1/assets",
    };
  }

  return config;
});
