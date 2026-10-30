/**
 * Browser smoke tests for the public portfolio.
 * Runs from GitHub Actions after pushes, with no credentials or external user data.
 * An independent live check cannot be replaced by static code inspection.
 */
import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base = process.env.SITE_URL || 'https://bobbymanik.github.io/';
const pages = [
  '','about.html','projects.html','experience.html','services.html',
  'certifications.html','contact.html','resume.html',
  'case-feedback.html','case-orders.html','case-transmission.html'
];
const failures = [];
const browser = await chromium.launch({ headless: true });
const label = path => path || 'Home';
const log = (name, success, error) => {
  process.stdout.write((success ? 'PASS ' : 'FAIL ') + name + (error ? ': ' + error : '') + '\n');
};
async function check(name, work) {
  try { await work(); log(name, true); }
  catch (err) { failures.push({ name, error: String(err) }); log(name, false, String(err)); }
}
async function load(page, path) {
  let last;
  for (let n = 1; n <= 3; n++) {
    try {
      const res = await page.goto(new URL(path, base).href, { waitUntil: 'domcontentloaded', timeout: 25000 });
      assert(res && res.status() < 400, 'HTTP status ' + (res?.status() ?? 'missing'));
      await page.waitForTimeout(250);
      return;
    } catch (e) {
      last = e;
      if (n < 3) await page.waitForTimeout(1500);
    }
  }
  throw last;
}
async function checkImage(page, selector) {
  const nodes = page.locator(selector);
  const count = Math.min(await nodes.count(), 6);
  for (let i = 0; i < count; i++) {
    const image = nodes.nth(i);
    await image.scrollIntoViewIfNeeded();
    await image.evaluate(img => {
      if (img.complete) return;
      return new Promise(resolve => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
        setTimeout(resolve, 10000);
      });
    });
    const details = await image.evaluate(img => ({ src: img.getAttribute('src'), naturalWidth: img.naturalWidth }));
    assert(details.naturalWidth > 0, 'Image did not load: ' + details.src);
  }
}
for (const [viewportName, viewport] of Object.entries({
  desktop: { width: 1365, height: 900 },
  mobile: { width: 390, height: 844, isMobile: true, hasTouch: true }
})) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  for (const path of pages) {
    await check(viewportName + ' / ' + label(path), async () => {
      const exceptions = [];
      const onError = err => exceptions.push(err.message);
      page.on('pageerror', onError);
      try {
        await load(page, path);
        assert((await page.locator('h1').count()) === 1, 'Exactly one H1 is expected');
        assert((await page.title()).trim().length > 8, 'Page title missing');
        const meta = await page.locator('meta[name="description"]').getAttribute('content');
        assert(meta && meta.length > 40, 'Page description missing');
        const viewportError = await page.evaluate(() => {
          const main = document.querySelector('main');
          return main && main.getBoundingClientRect().right > window.innerWidth + 6;
        });
        assert(!viewportError, 'Main content extends beyond the viewport');
        const ids = await page.locator('[id]').evaluateAll(nodes => nodes.map(n => n.id));
        assert(ids.length === new Set(ids).size, 'Duplicate HTML IDs');
        await checkImage(page, 'main img[src*="assets/evidence/"]');
        assert(exceptions.length === 0, 'Uncaught JavaScript error: ' + exceptions.join('; '));
      } finally { page.off('pageerror', onError); }
    });
  }
  if (viewportName === 'mobile') {
    await check('mobile / navigation menu', async () => {
      await load(page, '');
      const toggle = page.locator('.menu-toggle');
      assert(await toggle.isVisible(), 'Mobile menu trigger hidden');
      await toggle.click();
      assert(await page.locator('#nav-links').isVisible(), 'Mobile navigation did not open');
      await page.locator('#nav-links a[href="contact.html"]').click();
      assert(page.url().includes('/contact.html'), 'Contact navigation failed');
    });
  }
  await context.close();
}
const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, permissions: ['clipboard-read', 'clipboard-write'] });
const page = await context.newPage();
await check('About / Indonesian and English switch', async () => {
  await load(page, 'about.html');
  await page.evaluate(() => { try { localStorage.removeItem('portfolioLocale'); } catch {} });
  await load(page, 'about.html');
  const button = page.locator('#lang-switch');
  const before = await page.locator('[data-pagetitle="ABOUT"]').innerText();
  await button.click();
  await page.waitForTimeout(200);
  const after = await page.locator('[data-pagetitle="ABOUT"]').innerText();
  assert(before !== after, 'Language switch did not translate About heading');
  await button.click();
  await page.waitForTimeout(200);
  const restored = await page.locator('[data-pagetitle="ABOUT"]').innerText();
  assert.equal(restored, before, 'Switching back failed');
});
await check('Projects / filter and case links', async () => {
  await load(page, 'projects.html');
  const webFilter = page.locator('[data-filter="web"]').first();
  await webFilter.click();
  const visibleCards = await page.locator('.project-card:visible').count();
  assert.equal(visibleCards, 1, 'Expected exactly one web project');
  assert(await page.locator('a[href="case-transmission.html"]').count() > 0, 'Transmission case study link missing');
});
await check('Certificates / all entries', async () => {
  await load(page, 'certifications.html');
  await page.waitForTimeout(500);
  assert.equal(await page.locator('#cert-grid .catalog-card').count(), 42, 'Certificate count mismatch');
});
await check('Contact / prefill and clipboard', async () => {
  await load(page, 'contact.html?topic=freelance&service=automation#inquiry');
  assert.equal(await page.locator('#professional-inquiry [name="service"]').inputValue(), 'automation');
  await page.locator('#professional-inquiry [name="name"]').fill('Portfolio test visitor');
  await page.locator('#professional-inquiry [name="email"]').fill('visitor@example.com');
  await page.locator('#professional-inquiry [name="message"]').fill('Test inquiry to validate the portfolio contact form.');
  await page.locator('#copy-inquiry').click();
  await page.waitForTimeout(250);
  const confirmation = (await page.locator('#inquiry-status').innerText()).trim();
  assert(confirmation.length > 0, 'Copy action gave no feedback');
});
await check('Resume / project evidence links and education consistency', async () => {
  await load(page, 'resume.html');
  assert.equal(await page.locator('a.case-resume-link').count(), 3, 'Resume should link to three case studies');
  const text = await page.locator('main').innerText();
  assert(text.includes('3.82 / 4.00'), 'Resume GPA missing');
  assert(text.includes('May 2025'), 'TVRI start date missing');
});
await context.close();

// Search-readiness checks: these detect indexing obstacles but do not verify Google index status.
const crawlContext = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const crawlPage = await crawlContext.newPage();
await check('Google Search Console / public HTML verification file', async () => {
  const expected = 'google-site-verification: google3dae974021c11354.html';
  const verificationPath = 'google3dae974021c11354.html';
  const url = new URL(verificationPath, base).href;
  const response = await crawlContext.request.get(url, { timeout: 25000 });
  assert.equal(response.status(), 200, 'Verification URL must return HTTP 200');
  const actual = await response.text();
  assert.equal(actual, expected, 'Published verification file differs from Google original');
});
await check('SEO / robots.txt and sitemap.xml', async () => {
  const robotsResponse = await crawlContext.request.get(new URL('robots.txt', base).href);
  assert.equal(robotsResponse.status(), 200, 'robots.txt should return HTTP 200');
  const robots = await robotsResponse.text();
  assert(robots.includes('User-agent: *') && robots.includes('Allow: /'), 'Crawling rules are missing');
  assert(robots.includes('Sitemap: ' + new URL('sitemap.xml', base).href), 'Sitemap directive is missing');
  const response = await crawlContext.request.get(new URL('sitemap.xml', base).href);
  assert.equal(response.status(), 200, 'sitemap.xml should return HTTP 200');
  const xml = await response.text();
  assert(xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'), 'Sitemap namespace missing');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x => x[1]);
  assert.equal(urls.length, pages.length, 'Sitemap entry count does not match public page list');
  assert.equal(new Set(urls).size, urls.length, 'Duplicate URLs in sitemap');
  for (const path of pages) {
    assert(urls.includes(new URL(path, base).href), 'Missing sitemap URL: ' + path);
  }
});
for (const path of pages) {
  await check('SEO metadata / ' + label(path), async () => {
    await load(crawlPage, path);
    const expected = new URL(path, base).href;
    const canonical = await crawlPage.locator('link[rel="canonical"]').getAttribute('href');
    assert.equal(canonical, expected, 'Canonical URL does not match page URL');
    assert.equal(await crawlPage.locator('meta[property="og:url"]').getAttribute('content'), expected, 'Open Graph URL mismatch');
    const title = (await crawlPage.locator('meta[property="og:title"]').getAttribute('content'))?.trim();
    const description = (await crawlPage.locator('meta[property="og:description"]').getAttribute('content'))?.trim();
    assert(title && title.length > 8, 'Open Graph title missing');
    assert(description && description.length > 40, 'Open Graph description missing');
    assert((await crawlPage.locator('meta[name="robots"]').getAttribute('content')).includes('index'), 'Page is noindex');
    const jsonld = crawlPage.locator('script[type="application/ld+json"]');
    assert(await jsonld.count() > 0, 'JSON-LD missing');
    for (const code of await jsonld.allTextContents()) {
      const parsed = JSON.parse(code);
      assert(parsed['@context'] === 'https://schema.org', 'JSON-LD context invalid');
    }
    const ogLocator = crawlPage.locator('meta[property="og:image"]');
    const ogImage = (await ogLocator.count()) ? await ogLocator.getAttribute('content') : null;
    if (ogImage) {
      const imgRes = await crawlContext.request.get(ogImage);
      assert.equal(imgRes.status(), 200, 'Open Graph image does not load: ' + ogImage);
    }
  });
}
await crawlContext.close();
await browser.close();
process.stdout.write('\nTotal failures: ' + failures.length + '\n');
if (failures.length) process.exitCode = 1;
