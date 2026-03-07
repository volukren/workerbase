import { jsxRenderer } from 'hono/jsx-renderer'
import { ViteClient, Script, Link } from 'vite-ssr-components/hono'
import { Nav } from './components/Nav'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ViteClient />
        <Script src="/src/client/app.ts" />
      </head>
      <body class="bg-bg text-text min-h-screen">
        <Nav />
        <main class="max-w-4xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  )
})
