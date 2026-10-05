import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base relativa para que funcione en GitHub Pages con cualquier nombre de repositorio
export default defineConfig({
  plugins: [react()],
  base: './',
});
