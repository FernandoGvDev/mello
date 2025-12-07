import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import sitemap from "vite-plugin-sitemap";
// import { routes } from "./src/Routes";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // sitemap({
    //   hostname: "https://seusite.com", //Ajuste Necessarrio
    //   dynamicRoutes: routes.map(route => route.path)
    // }),
  ],
})
