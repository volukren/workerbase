import { jsxRenderer } from 'hono/jsx-renderer'
import { ViteClient, Script, Link } from 'vite-ssr-components/hono'

const Nav = () => (
  <nav class="bg-white border-b border-gray-200 px-6 py-3">
    <div class="max-w-4xl mx-auto flex items-center gap-6">
      <a href="/" class="font-bold text-lg text-gray-900">Workerbase</a>
    </div>
  </nav>
)

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ViteClient />
        <Script src="/src/client/app.ts" />
      </head>
      <body class="bg-gray-50 min-h-screen">
        <Nav />
        <main class="max-w-4xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  )
})
