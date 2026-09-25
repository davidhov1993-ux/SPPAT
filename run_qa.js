const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ROUTES = [
  '/',
  '/complete-badkamer-renovatie/',
  '/complete-badkamer-renovatie/almere/',
  '/tegelwerk/',
  '/specialisaties/',
  '/projecten/',
  '/over-ons/',
  '/contact/',
  '/kennisbank/'
];

const VIEWPORTS = [
  { width: 1440, height: 1024, label: '1440' },
  { width: 1024, height: 768, label: '1024' },
  { width: 834, height: 1112, label: '834' },
  { width: 390, height: 844, label: '390' }
];

const OUT_DIR = path.join(__dirname, '../..', 'SPPAT_FINAL_QA', 'screenshots');

async function run() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const route of ROUTES) {
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height });
      const url = `http://localhost:3000${route}`;
      console.log(`Capturing ${url} at ${vp.width}px`);
      
      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        // Scroll slightly to trigger lazy loading if needed, though they are in view
        await page.evaluate(() => window.scrollBy(0, 1000));
        await new Promise(r => setTimeout(r, 500));
        await page.evaluate(() => window.scrollBy(0, 1000));
        await new Promise(r => setTimeout(r, 500));
        await page.evaluate(() => window.scrollTo(0, 0));

        const safeRoute = route === '/' ? 'home' : route.replace(/\//g, '-').replace(/^-|-$/g, '');
        const filename = `${safeRoute}-${vp.label}.jpg`;
        await page.screenshot({ path: path.join(OUT_DIR, filename), fullPage: true, quality: 70 });
      } catch (e) {
        console.error(`Error on ${route} ${vp.width}:`, e);
      }
      await page.close();
    }
  }

  await browser.close();
  console.log("Screenshots done.");
}

run();
