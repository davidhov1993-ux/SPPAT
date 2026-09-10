import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import { createElement } from 'react'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const pages = JSON.parse(await readFile('src/content/pages.json', 'utf8'))
const template = await readFile('dist/index.html', 'utf8')
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
const server = await createServer({ server: { middlewareMode: true, ws: false }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  for (const page of [...pages, { url: '/404/', title: '404 | Sppat', description: '' }]) {
    const body = renderToString(createElement(App, { path: page.url }))
    let html = template.replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`)
      .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${escape(page.description)}" />`)
      .replace('<div id="root"></div>', `<div id="root" data-route="${page.url}">${body}</div>`)
    if (page.url === '/404/') html = html.replace('</head>', '<meta name="robots" content="noindex" /></head>')
    const target = page.url === '/404/' ? 'dist/404.html' : path.join('dist', page.url, 'index.html')
    await mkdir(path.dirname(target), { recursive: true })
    await writeFile(target, html)
  }
  await writeFile('dist/.nojekyll', '')
  console.log(`Prerendered ${pages.length} approved routes and a 404 page.`)
} finally { await server.close() }
