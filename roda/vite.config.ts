import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Empacota a roda num único arquivo (React incluso) que a página do demo carrega com <script>.
export default defineConfig({
  plugins: [react()],
  define: { "process.env.NODE_ENV": '"production"' },
  build: {
    outDir: "..",
    emptyOutDir: false,
    lib: { entry: "src/mount.tsx", formats: ["iife"], name: "FTRoda", fileName: () => "roda.js" },
  },
})
