import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { readFileSync } from 'fs'

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'inject-partials',
      transformIndexHtml(html) {
        // نقرأ الملفات في كل مرة عشان يتحدث
        const header        = readFileSync('./src/partials/header.html', 'utf-8')
        const footer        = readFileSync('./src/partials/footer.html', 'utf-8')
        const servicesPaths = readFileSync('./src/partials/services-paths.html', 'utf-8')
        const challenges = readFileSync('./src/partials/challenges.html', 'utf-8')
        const solutions = readFileSync('./src/partials/solutions.html', 'utf-8')
        const steps = readFileSync('./src/partials/steps.html', 'utf-8')
        const packages = readFileSync('./src/partials/packages.html', 'utf-8')
        const testimonials = readFileSync('./src/partials/testimonials.html', 'utf-8')
        const faq = readFileSync('./src/partials/faq.html', 'utf-8')

        return html
          .replace('<%- header %>',        header)
          .replace('<%- footer %>',         footer)
          .replace('<%- servicesPaths %>', servicesPaths)
          .replace('<%- challenges %>', challenges)
          .replace('<%- solutions %>', solutions)
          .replace('<%- steps %>', steps)
          .replace('<%- packages %>', packages)
          .replace('<%- testimonials %>', testimonials)
          .replace('<%- faq %>', faq)

      },
      handleHotUpdate({ file, server }) {
        // لو أي partial اتغير — reload تلقائي
        if (file.includes('src/partials')) {
          server.ws.send({ type: 'full-reload' })
        }
      },
    },
  ],

  root: '.',

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'pages/services.html'),
        works:    resolve(__dirname, 'pages/works.html'),
        packages: resolve(__dirname, 'pages/packages.html'),
        about:    resolve(__dirname, 'pages/about.html'),
        blog:     resolve(__dirname, 'pages/blog.html'),
        contact:  resolve(__dirname, 'pages/contact.html'),
        'path-business':      resolve(__dirname, 'pages/path-business.html'),
        'path-academic':      resolve(__dirname, 'pages/path-academic.html'),
        'path-institutions':  resolve(__dirname, 'pages/path-institutions.html'),
        'path-school':        resolve(__dirname, 'pages/path-school.html'),
      },
    },
  },

  server: { open: true },
})