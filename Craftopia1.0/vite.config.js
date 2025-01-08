import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  base:'./',
  // base: process.env.NODE_ENV === 'production' ? '/Debug/' : '/',
  plugins: [react(), svgr({
    svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
    include: "**/*.svg",
    }),
  ],
});