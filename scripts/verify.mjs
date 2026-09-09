import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import path from 'node:path'
const pages = JSON.parse(await readFile('src/content/pages.json', 'utf8'))
const spec = await readFile('SPPAT_IMPLEMENTATION.md', 'utf8')
const urls = new Set(pages.map(page => page.url))
const sourcePages = spec.split('PAGINA CONTENT')[1].split('BUSINESS INFORMATION REQUIRED FROM SPPAT')[0].split(/\nPAGINA: /).slice(1)
const expected = sourcePages.map(source => source.match(/URL:\s*(\S+)/)[1])
assert.deepEqual([...urls], expected)
const escape = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;')
const strip = html => html.replace(/<[^>]*>/g, '').replaceAll('<!-- -->', '')
for (const page of pages) {
  const html = await readFile(path.join('dist', page.url, 'index.html'), 'utf8')
  assert(html.includes(`<title>${escape(page.title)}</title>`), `SEO title: ${page.url}`)
  assert(html.includes(`content="${escape(page.description)}"`), `Description: ${page.url}`)
  assert.equal((html.match(/<h1>/g) || []).length, 1, `One H1: ${page.url}`)
  assert(html.includes(`<h1>${escape(page.hero.H1)}</h1>`), `H1: ${page.url}`)
  assert(!/BUSINESS INPUT REQUIRED|DEVELOPER NOTE|\[PROJECT|\[PHONE\]|\[EMAIL\]|\[ADDRESS\]|\[KVK\]|\[BTW\]/.test(html), `Placeholders: ${page.url}`)
  assert(!html.includes('href="/privacyverklaring/"'), `Unapproved privacy: ${page.url}`)
  const body = strip(html)
  for (const block of [page.hero,...page.sections, ...(page.cta ? [page.cta] : [])]) {
    for (const value of [block.H2, block.H3, block.Body,...(block.bullets || [])].filter(Boolean)) assert(body.includes(escape(value)), `Missing content on ${page.url}: ${value}`)
    for (const card of block.cards || []) {
      assert(body.includes(escape(card.Title)), `Missing card title: ${page.url}`)
      if (card.Body) assert(body.includes(escape(card.Body)), `Missing card body: ${page.url}`)
    }
  }
  for (const link of page.links) assert(html.includes(`href="${link.url}">${escape(link.anchor)}</a>`), `Internal anchor: ${page.url}: ${link.anchor}`)
  for (const [,href] of html.matchAll(/<a[^>]*href="(\/[^"#]*)"/g)) if (!href.endsWith('.svg')) assert(urls.has(href), `Unapproved/broken link on ${page.url}: ${href}`)
  for (const [,src] of html.matchAll(/(?:src|href)="(\/(?:assets|references)[^"]+)"/g)) await access(path.join('dist', decodeURIComponent(src)))
}
// Independently check body text against the Markdown source, not just compiled JSON.
const normalize = value => value.replace(/\s+/g, ' ').trim()
const cleanSource = value => normalize(value).replace(/\[BUSINESS INPUT REQUIRED:.*?\]\.?/g, '').trim().replace(/\s*\|$/, '').trim()
let auditedBodies = 0
for (const source of sourcePages) {
  const url = source.match(/URL:\s*(\S+)/)[1]
  const rendered = strip(await readFile(path.join('dist', url, 'index.html'), 'utf8'))
  const sections = source.split(/\n(?=HERO |SECTION \d+:|FAQ |FINAL CTA )/).slice(1)
  for (const section of sections) {
    for (const match of section.matchAll(/\bBody:\s*([\s\S]*?)(?=\s+(?:Card\s+\d+(?:\s+(?:Title|Body|CTA))?:|Primary\s+CTA:|CTA:|Button:|Visual:|ALT:|Formuliervelden:)|$)/g)) {
      let approved = match[1]
      if (url === '/contact/') approved = approved.replace(/Wij streven\s+ernaar binnen \[BUSINESS INPUT REQUIRED:[\s\S]*?\] te reageren\./, '')
      for (const part of approved.split(/\n\s*- /)) {
        const text = cleanSource(part)
        if (text) {
          assert(rendered.includes(escape(text)), `Source content missing on ${url}: ${text}`)
          auditedBodies++
        }
      }
    }
  }
}
const home = await readFile('dist/index.html', 'utf8')
for (const id of ['tegelwerk', 'specialisaties', 'werkzaamheden']) {
  assert(home.includes(`href="#${id}"`) && home.includes(`id="${id}"`), `Home service navigation: ${id}`)
}
assert(!urls.has('/tegelwerk/vloerverwarming-en-tegelen/'), 'Future-only recommendation must not be implemented')
const contact = await readFile('dist/contact/index.html', 'utf8')
assert(contact.includes('type="submit" disabled=""'), 'Submission must be disabled without delivery/privacy data')
const projects = await readFile('dist/projecten/index.html', 'utf8')
assert(!projects.includes('/projecten/[slug]'), 'No fabricated project routes')
const missing = await readFile('dist/404.html', 'utf8')
assert(missing.includes('content="noindex"'), '404 excluded from indexing')
console.log(`Verified ${pages.length} routes and ${auditedBodies} source body/list passages: exact SEO, headings, body copy, lists, cards, internal anchors, asset paths, placeholder/privacy exclusions, and contact guard.`)
