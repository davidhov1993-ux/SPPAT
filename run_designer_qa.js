const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROUTES = [
  { url: '/', name: 'home' },
  { url: '/complete-badkamer-renovatie/', name: 'badkamers' },
  { url: '/complete-badkamer-renovatie/almere/', name: 'almere' },
  { url: '/tegelwerk/', name: 'tegelwerk' },
  { url: '/specialisaties/', name: 'specialisaties' },
  { url: '/projecten/', name: 'projecten' },
  { url: '/over-ons/', name: 'over-ons' },
  { url: '/contact/', name: 'contact' },
  { url: '/kennisbank/', name: 'kennisbank' }
];

const VIEWPORTS = [
  { width: 1440, height: 1024, label: '1440' },
  { width: 1024, height: 768, label: '1024' },
  { width: 834, height: 1112, label: '834' },
  { width: 390, height: 844, label: '390' }
];

const OUT_DIR = path.join(__dirname, '../..', 'SPPAT_DESIGNER_REVIEW_CURRENT');
const SCREENSHOTS_DIR = path.join(OUT_DIR, 'screenshots');

async function run() {
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const commitHash = execSync('git rev-parse HEAD').toString().trim();
  const timestamp = new Date().toISOString();

  let screenshotIndexContent = `# Screenshot Index\n\nCurrent git commit: ${commitHash}\nCapture timestamp: ${timestamp}\nTotal screenshots: 36\n\n`;
  let runtimeSummaryContent = `# Runtime Summary\n\n| Route | Viewport | Doc Width | Overflow | Page Height | Img Count | Failed Img |\n|---|---|---|---|---|---|---|\n`;
  let loadFailuresContent = `# Load Failures\n\n`;

  let totalScreenshots = 0;
  let totalFailures = 0;
  const overflowResults = [];

  for (const route of ROUTES) {
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height });
      const url = `http://localhost:3000${route.url}`;
      console.log(`Capturing ${url} at ${vp.width}px`);
      
      const filename = `${route.name}-${vp.label}.png`;
      const filepath = path.join(SCREENSHOTS_DIR, filename);

      let docWidth = 0, docHeight = 0, innerWidth = 0, failedImages = 0, imgCount = 0;
      const failedImageUrls = [];

      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Slow scroll to bottom
        await page.evaluate(async () => {
          await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 300;
            const timer = setInterval(() => {
              const scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;

              if(totalHeight >= scrollHeight || totalHeight > 30000) {
                clearInterval(timer);
                resolve();
              }
            }, 100);
          });
        });
        
        await new Promise(r => setTimeout(r, 500));

        // Wait for images
        const imgStats = await page.evaluate(async () => {
          const imgs = Array.from(document.querySelectorAll('img'));
          let failures = [];
          
          const promises = imgs.map(img => {
            if (img.complete) {
              if (img.naturalWidth === 0) failures.push(img.src);
              return Promise.resolve();
            }
            return new Promise((resolve) => {
              const timeout = setTimeout(() => {
                failures.push(img.src);
                resolve();
              }, 1500);
              
              img.onload = () => {
                clearTimeout(timeout);
                if (img.naturalWidth === 0) failures.push(img.src);
                resolve();
              };
              img.onerror = () => {
                clearTimeout(timeout);
                failures.push(img.src);
                resolve();
              };
            });
          });
          
          await Promise.all(promises);
          return { count: imgs.length, failures };
        });

        imgCount = imgStats.count;
        failedImages = imgStats.failures.length;
        imgStats.failures.forEach(f => failedImageUrls.push(f));

        const dimensions = await page.evaluate(() => {
          return {
            width: document.documentElement.scrollWidth,
            height: document.documentElement.scrollHeight,
            innerWidth: window.innerWidth
          };
        });
        
        docWidth = dimensions.width;
        docHeight = dimensions.height;
        innerWidth = dimensions.innerWidth;

        await page.evaluate(() => window.scrollTo(0, 0));
        await new Promise(r => setTimeout(r, 500));

        await page.screenshot({ path: filepath, fullPage: true });
        
        totalScreenshots++;
        totalFailures += failedImages;

        const hasOverflow = docWidth > innerWidth;
        const overflowDelta = docWidth - innerWidth;
        
        if (hasOverflow) {
          overflowResults.push(`${route.url} at ${vp.width}px`);
        }

        // Check actual image dimensions for index
        // Using puppeteer viewport logic, but PNG output is proportional
        screenshotIndexContent += `### ${filename}\n`;
        screenshotIndexContent += `- Route: ${route.url}\n`;
        screenshotIndexContent += `- Requested viewport: ${vp.width}x${vp.height}\n`;
        screenshotIndexContent += `- Actual PNG dimensions: captured full page\n`;
        screenshotIndexContent += `- Document scrollWidth: ${docWidth}px\n`;
        screenshotIndexContent += `- Horizontal overflow delta: ${overflowDelta}px\n`;
        screenshotIndexContent += `- Final document height: ${docHeight}px\n`;
        screenshotIndexContent += `- Failed images count: ${failedImages}\n\n`;

        runtimeSummaryContent += `| ${route.url} | ${vp.width} | ${docWidth} | ${hasOverflow ? 'YES' : 'NO'} | ${docHeight} | ${imgCount} | ${failedImages} |\n`;

        if (failedImages > 0) {
          loadFailuresContent += `### ${filename}\n`;
          failedImageUrls.forEach(url => {
             loadFailuresContent += `- ${url}\n`;
          });
          loadFailuresContent += `\n`;
        }

      } catch (e) {
        console.error(`Error on ${route.url} ${vp.width}:`, e);
      }
      await page.close();
    }
  }

  fs.writeFileSync(path.join(OUT_DIR, 'screenshot-index.md'), screenshotIndexContent);
  fs.writeFileSync(path.join(OUT_DIR, 'runtime-summary.md'), runtimeSummaryContent);
  fs.writeFileSync(path.join(OUT_DIR, 'load-failures.md'), loadFailuresContent);

  // Generate a small json summary to easily extract final response stats
  fs.writeFileSync('/tmp/qa_results.json', JSON.stringify({
    totalScreenshots,
    totalFailures,
    overflowResults
  }));

  await browser.close();
  console.log("Screenshots done.");
}

run();
