import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// Соцмережі приймають лише абсолютну адресу OG-картинки.
// На Vercel це продакшн-домен проєкту, локально localhost
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:5173'

const siteUrlPlugin = (): Plugin => ({
  name: 'site-url',
  transformIndexHtml: {
    order: 'pre',
    handler: (html) => html.replaceAll('%SITE_URL%', siteUrl),
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteUrlPlugin()],
})