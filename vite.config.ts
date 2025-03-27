import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 5001,
  },
  preview: {
    host: "0.0.0.0",
    port: 5001,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // путь к корневому index
      name: "EzooUiKit",
      fileName: (format) => `ezoo-ui-kit.${format}.js`,
    },
    rollupOptions: {
      // Внешние зависимости — не включаются в сборку
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
