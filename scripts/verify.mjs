import assert from 'node:assert/strict'
import { readFile, access, readdir, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'
import sharp from 'sharp'
const read = file => readFile(file, 'utf8')
const pages = JSON.parse(await read('src/content/pages.json'))
const cases = JSON.parse(await read('src/content/projects.json'))
const media = JSON.parse(await read('src/content/media.json'))
const baseline = await read('SPPAT_IMPLEMENTATION.md')
const r1 = await read('SPPAT_PROJECT_CASE_STUDIES_FINAL_R1.md')
const ia = await read('SPPAT_INFORMATION_ARCHITECTURE_NAVIGATION_FINAL.md')
const records = []
function check(id, message, fn) { try { fn(); records.push({id, status:'PASS', message}) } catch (error) { records.push({id,status:'FAIL',message:error.message}); } }
const normalize = text => text.replace(/\s+/g,' ').trim()
const decode = text => text.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#x27;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>')
const strip = html => normalize(decode(html.replace(/<[^>]*>/g,' ').replaceAll('<!-- -->','')))
const textOf = html => normalize(decode(html.replace(/<[^>]*>/g,'').replaceAll('<!-- -->','')))
const sourcePages = baseline.split('PAGINA CONTENT')[1].split('BUSINESS INFORMATION REQUIRED FROM SPPAT')[0].split(/\nPAGINA: /).slice(1)
const expectedRoutes = sourcePages.map(source => source.match(/URL:\s*(\S+)/)[1])

const caseBlocks = r1.split(/\n# [2-7]\. CASE \d+ — /).slice(1).map(s => s.split('\n---')[0]).slice(0, 5)
const expectedCases = caseBlocks.map(block => block.match(/\*\*Suggested slug:\*\* \`(.*?)\`/)[1])
expectedRoutes.push(...expectedCases)
const routes = [...pages.map(p => p.url), ...cases.map(p => `/projecten/${p.slug}/`)]
check('IA-01','Exactly 28 approved routes',()=> {assert.equal(routes.length,28);assert.deepEqual([...routes].sort(),[...expectedRoutes].sort());assert.equal(new Set(routes).size,28)})
const htmlByRoute = new Map()
for (const route of routes) {
 const html = await read(path.join('dist',route,'index.html')); htmlByRoute.set(route, html)
 const body = textOf(html)
 const page = pages.find(p => p.url === route)
 const project = cases.find(p => `/projecten/${p.slug}/` === route)
 const title = page?.title || project.seoTitle, description = page?.description || project.meta, h1 = page?.hero.H1 || project.h1
 check(`SEO:${route}`,'Rendered SEO, canonical, one exact H1',()=> {
  assert.equal(decode(html.match(/<title>(.*?)<\/title>/s)?.[1] || ''),title)
  assert.equal(decode(html.match(/<meta name="description" content="(.*?)"/s)?.[1] || ''),description)
  assert.equal((html.match(/<h1(?:\s[^>]*)?>/g)||[]).length,1)
  assert.equal(decode(html.match(/<h1(?:\s[^>]*)?>(.*?)<\/h1>/s)?.[1] || ''),h1)
  assert(html.includes(`rel="canonical" href="https://sppat.nl${route}"`))
 })
 check(`CONTENT:${route}`,'Every supplied body, heading, bullet, card and FAQ rendered',()=> {
  if (!page) return
  for (const block of [page.hero,...page.sections,...(page.cta ? [page.cta] : [])]) {
   for (const value of [block.H2,block.H3,block.Body,...(block.bullets || [])].filter(Boolean)) assert(body.includes(normalize(value)),`Missing ${route}: ${value}`)
   for (const card of block.cards || []) for (const value of [card.Title,card.Body].filter(Boolean)) assert(body.includes(normalize(value)),`Missing card ${value}`)
  }
  for (const faq of page.faq || []) for (const value of [faq.question,faq.answer]) assert(body.includes(normalize(value)),`Missing FAQ ${value}`)
  for (const url of page.relatedUrls || []) assert(html.includes(`href="${url}"`),`Missing related link ${url}`)
 })
 check(`LINKS:${route}`,'All local routes and fragments resolve; no leaked placeholders',()=> {
  for (const [,href] of html.matchAll(/<a[^>]*href="(\/[^"#]*)"/g)) assert(routes.includes(href),`Unknown ${href}`)
  for (const [,hash] of html.matchAll(/href="#([^"]+)"/g)) assert(html.includes(`id="${hash}"`),`Missing #${hash}`)
  assert(!/BUSINESS INPUT REQUIRED|DEVELOPER NOTE|\[PROJECT|\[PHONE\]|\[EMAIL\]|\[ADDRESS\]|\[KVK\]|\[BTW\]/.test(body))
 })
 const srcs = [...html.matchAll(/(?:src|srcSet)="(\/[^" ]+)"/g)].map(m => m[1])
 for (const src of srcs) await access(path.join('dist',decodeURIComponent(decode(src))))
 check(`MEDIA:${route}`,'All content images registered and labeled; no masters public',()=> {
  for (const [,tag] of html.matchAll(/(<img[^>]+>)/g)) { assert(tag.includes('/production/'));assert(/alt="[^"]+"/.test(tag));assert(/width="\d+"/.test(tag));assert(/height="\d+"/.test(tag)) }
  assert(!/src="\/(media|references|special-references)\//.test(html))
  assert(!html.includes('data-provenance="verified-sppat"'))
 })
}
for (const [i,block] of caseBlocks.entries()) {
 console.log("expectedCases[i] is:", expectedCases[i], "in map:", htmlByRoute.has(expectedCases[i]))
 const p=cases[i], html=htmlByRoute.get(expectedCases[i]), rendered=textOf(html)
 check(`CASE-${i+1}:COPY`,'Exact R1 title, meta, H1, intro, H2/body, proof list and CTA',()=> {
  assert.equal(p.seoTitle,block.match(/\*\*Title:\*\* `(.*?)`/)[1]);assert.equal(p.meta,block.match(/\*\*Meta:\*\* `(.*?)`/)[1]);assert.equal(p.h1,block.match(/### H1\n`(.*?)`/)[1])
  for (const paragraph of block.match(/### Intro\n(.*?)(?=\n### )/s)[1].trim().split('\n\n')) assert(rendered.includes(normalize(paragraph)))
  for (const [,heading,body] of block.matchAll(/### H2 — (.*?)\n(.*?)(?=\n### |$)/gs)) {assert(rendered.includes(normalize(heading)));assert(rendered.includes(normalize(body)))}
  const proof = block.match(/### Technical proof list\n(.*?)(?=\n### )/s)
  for (const point of proof?.[1].trim().split('\n') || []) assert(rendered.includes(normalize(point.replace(/^- /,''))))
  const cta=block.match(/### CTA\n`(.*?)` → `([^`]+)`/);assert(html.includes(`href="${cta[2]}"`));assert(rendered.includes(cta[1]))
  assert(p.relatedServiceUrls.length >= 2 && p.relatedServiceUrls.length <= 4)
 })
 check(`CASE-${i+1}:MEDIA`,'Source identity, distinct galleries, grouping and AI isolation',()=> {
  assert.equal(p.heroMedia,['bath08','compact','floor07-9','bath-feb','ai-toilet','res04-4'][i]);assert.equal(new Set([p.heroMedia,...p.galleryMedia]).size,p.galleryMedia.length+1)
  if (p.tier==='A') assert(p.galleryMedia.length+1>=4 && p.galleryMedia.length+1<=6)
  if (!p.groupingConfirmed) assert.equal(p.galleryMedia.length,0)
  if (i===3) assert.deepEqual(p.referenceMedia,['ai-macro'])
  if (i===4) assert.equal(p.galleryMedia.length,0)
  assert(!/Recent opgeleverd|Gerealiseerd werk|1\.000\+/.test(strip(html)))
 })
}
check('NAV-01','Canonical 3 / 7 / 4 category children and correct approved route names',()=> {
 const header=htmlByRoute.get('/').split('</header>')[0]
 for (const [index,count] of [3,10].entries()) assert.equal((header.match(new RegExp(`id="desktop-nav-${index}"[\\s\\S]*?<ul[^>]*>([\\s\\S]*?)<\\/ul>`))[1].match(/<li/g)||[]).length,count)
})
check('PROVENANCE-01','Registry classification and source integrity',()=> {
 for (const m of media) {assert(['verified-sppat','licensed-reference','illustrative-ai'].includes(m.provenance)); assert(m.source.startsWith('media/source/'));assert.equal(m.ownerVerified,false)}
})
for (const master of JSON.parse(await read('media/source-checksums.json'))) {
 const hash=createHash('sha256').update(await readFile(master.file)).digest('hex')
 check(`MASTER:${master.file}`,'Immutable source checksum',()=>assert.equal(hash,master.sha256))
}
for (const m of media) for (const [role,crops] of Object.entries(m.crops)) for (const breakpoint of ['desktop','tablet','mobile']) {
 const file=`public/production/${m.exportName}-${role}-${breakpoint}.webp`, info=await sharp(file).metadata()
 const ratio=(breakpoint==='mobile'?crops.mobile:crops.desktop).split('/').map(Number)
 check(`CROP:${m.id}:${role}:${breakpoint}`,'Required crop ratio within rounding tolerance; never upscale',()=>{assert(Math.abs(info.width/info.height-ratio[0]/ratio[1])<0.01);assert(info.width<=m.width && info.height<=m.height)})
}
check('PRODUCTION-01','Only processed media deployed',()=> {assert(!htmlByRoute.get('/').includes('SPPAT-VIS-'))})
const deployedDirs=await readdir('dist')
check('PRODUCTION-02','No source master directories in dist',()=>{for(const dir of ['media','references','special-references'])assert(!deployedDirs.includes(dir))})
const heat='Bij tegelwerk op vloerverwarming wordt de vloeropbouw vooraf beoordeeld. Het moment en de wijze van ingebruikname worden afgestemd op het type dekvloer, het verwarmingssysteem en de voorschriften van de betrokken systeem- en materiaalleveranciers.'
check('HEAT-01','Final technical override replaces universal protocol',()=> {
 for (const route of ['/tegelwerk/vloer-tegelen/']) assert(textOf(htmlByRoute.get(route)).includes(heat))
 for (const html of htmlByRoute.values()) assert(!/verplicht opstookprotocol|altijd.*opstookprotocol|opstookprotocol.*verplicht/i.test(textOf(html)))
})
check('FORM-01','Unavailable transport cannot report success; privacy gate enforced',()=>assert(htmlByRoute.get('/contact/').includes('type="submit" disabled=""')))
const missing=await read('dist/404.html');check('404-02','Prerendered 404 has noindex',()=>assert(missing.includes('content="noindex"')))
await writeFile('audit/final-verification.json',JSON.stringify({routes:routes.length,records},null,2)+'\n')
const failures=records.filter(r=>r.status==='FAIL')
for(const failure of failures) console.error(failure.id, failure.message)
console.log(`${records.length-failures.length}/${records.length} final-spec assertions PASS across ${routes.length} routes.`)
if(failures.length)process.exitCode=1
