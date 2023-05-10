import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React_Audio_Player",
  server: {
    port: 3000,
  },
  plugins: [react()],
});
