import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "..",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
