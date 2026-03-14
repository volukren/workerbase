import { jsxRenderer } from 'hono/jsx-renderer'
import { ViteClient, Script, Link } from 'vite-ssr-components/hono'
import { Nav } from './components/Nav'

interface PageMeta {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
}

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: PageMeta): Response | Promise<Response>
  }
}

export const renderer = jsxRenderer(({ children, title = '', description = '', ogTitle = '', ogDescription = '', ogImage = '', ogUrl = '' }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Page meta */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />

        {/* Twitter — values mirror OG */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
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
