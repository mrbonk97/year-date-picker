import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: "./tsconfig.app.json" })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "Year Month Picker",
      fileName: (format) => `year-month-picker.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // change build CSS filename year-month-picker.css → style.css
        assetFileNames: (assetInfo) => {
          if (assetInfo.names[0] === "year-month-picker.css") {
            return "style.css";
          }
          return assetInfo.names[0]!;
        },
      },
    },
  },
});
