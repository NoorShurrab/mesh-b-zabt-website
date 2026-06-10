// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// import { resolve } from 'path'
// import { readFileSync } from 'fs'
// import { createHtmlPlugin } from 'vite-plugin-html'

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     createHtmlPlugin({ minify: false,
//       inject: {
//       data: {
//       header: '',
//       footer: '',
//       servicesPaths: ''
//     }
//   }
//     }),
//     {
//       name: 'inject-partials',
//       transformIndexHtml(html) {
//         // نقرأ الملفات في كل مرة عشان يتحدث
//         const header        = readFileSync('./src/partials/header.html', 'utf-8')
//         const footer        = readFileSync('./src/partials/footer.html', 'utf-8')
//         const servicesPaths = readFileSync('./src/partials/services-paths.html', 'utf-8')
//         return html
//           .replace('<%- header %>',        header)
//           .replace('<%- footer %>',         footer)
//           .replace('<%- servicesPaths %>', servicesPaths)
//       },
//       handleHotUpdate({ file, server }) {
//         // لو أي partial اتغير — reload تلقائي
//         if (file.includes('src/partials')) {
//           server.ws.send({ type: 'full-reload' })
//         }
//       },
//     },
//   ],

//   root: '.',

//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       input: {
//         main:     resolve(__dirname, 'index.html'),
//         services: resolve(__dirname, 'pages/services.html'),
//         works:    resolve(__dirname, 'pages/works.html'),
//         packages: resolve(__dirname, 'pages/packages.html'),
//         about:    resolve(__dirname, 'pages/about.html'),
//         blog:     resolve(__dirname, 'pages/blog.html'),
//         contact:  resolve(__dirname, 'pages/contact.html'),
//       },
//     },
//   },

//   server: { open: true },
// })
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { readFileSync } from 'fs'

export default defineConfig({
  plugins: [
    tailwindcss(),
    createHtmlPlugin({
      minify: false,
      inject: {
        data: {
          header: readFileSync('./src/partials/header.html', 'utf-8'),
          footer: readFileSync('./src/partials/footer.html', 'utf-8'),
          servicesPaths: readFileSync('./src/partials/services-paths.html', 'utf-8'),
        }
      }
    })
  ],
  root: '.',
})