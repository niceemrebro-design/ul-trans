import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(['index','leistungen','fuhrpark','unternehmen','kontakt','impressum','datenschutz'].map(page => [page, resolve(import.meta.dirname, page === 'index' ? 'index.html' : `${page}/index.html`)]))
    }
  }
});
