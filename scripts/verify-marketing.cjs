// Usage: NODE_PATH=<directory containing playwright> node scripts/verify-marketing.cjs
// Only local preview is visited. Contact links are checked without opening WhatsApp.
/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node CommonJS verification. */
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:3320';
const output = path.resolve('outputs/marketing');
fs.mkdirSync(output, { recursive: true });
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [], failed = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) failed.push(`${response.status()} ${response.url()}`); });
    await page.addInitScript(() => { window.marketingEvents = []; window.addEventListener('vendly:marketing', event => window.marketingEvents.push(event.detail)); });
    await page.goto(base);
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(new URL(await page.locator('link[rel="canonical"]').getAttribute('href')).href, 'https://vendlyapp.com.br/');
    assert.equal(await page.locator('main > section').count(), 14);
    const contact = await page.locator('a[data-location="hero"]').getAttribute('href');
    assert.match(contact, /^https:\/\/wa\.me\/5579996063423\?text=/);
    assert.equal(await page.locator('.login-link').getAttribute('href'), 'https://painel.vendlyapp.com.br/login');
    const anchors = await page.locator('a[href^="#"]').evaluateAll(links => links.map(a => a.hash.slice(1)));
    for (const id of anchors) assert.equal(await page.locator(`[id="${id}"]`).count(), 1, `Valid anchor ${id}`);
    for (const width of [320, 390, 768, 1440, 1920]) {
      await page.setViewportSize({ width, height: width < 800 ? 844 : 960 });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(150);
      const layout = await page.evaluate(() => ({ viewport: innerWidth, scroll: document.documentElement.scrollWidth, offenders: [...document.querySelectorAll('main *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1 && getComputedStyle(el).display !== 'none').map(el => ({ element: el.tagName, class: el.className, right: el.getBoundingClientRect().right })) }));
      assert.equal(layout.scroll <= layout.viewport, true, `No overflow at ${width}: ${JSON.stringify(layout)}`);
      await page.screenshot({ path: path.join(output, `hero-${width}.png`) });
      if ([390, 1440].includes(width)) {
        for (const img of await page.locator('main img').all()) {
          if (!(await img.isVisible())) continue;
          await img.scrollIntoViewIfNeeded();
          await img.evaluate(el => el.decode());
        }
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({ path: path.join(output, `page-${width}.png`), fullPage: true });
      }
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByRole('button', { name: 'Abrir menu', exact: true }).click();
    await page.getByRole('navigation', { name: 'Navegação mobile' }).getByRole('link', { name: 'Vitrine digital', exact: true }).click();
    assert.equal(await page.locator('#mobile-menu').isVisible(), false);
    assert.match(page.url(), /#vitrine$/);
    await page.getByRole('button', { name: 'Abrir menu', exact: true }).click();
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('button', { name: 'Abrir menu', exact: true }).evaluate(el => el === document.activeElement), true);
    await page.locator('details[data-faq="troca"] summary').click();
    assert.equal(await page.locator('details[data-faq="troca"]').getAttribute('open'), '');
    await page.getByRole('group', { name: 'Escolha a demonstração' }).getByRole('button', { name: 'Vitrine digital' }).click();
    assert.equal(await page.locator('#demo-screen img').getAttribute('src'), '/product/storefront.webp');
    await page.getByRole('button', { name: 'Ampliar tela' }).click();
    await page.getByRole('dialog', { name: 'Vitrine digital' }).waitFor();
    assert.equal(await page.locator('dialog').evaluate(el => el.contains(document.activeElement)), true);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('dialog').isVisible(), false);
    assert.equal(await page.getByRole('button', { name: 'Ampliar tela' }).evaluate(el => el === document.activeElement), true);
    await page.locator('#planos').scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);
    // Exercise the event without opening WhatsApp or contacting anyone.
    await page.locator('a[data-location="pricing"]').evaluate(el => el.addEventListener('click', event => event.preventDefault(), { once: true }));
    await page.locator('a[data-location="pricing"]').click();
    const events = await page.evaluate(() => window.marketingEvents);
    assert(events.some(e => e.name === 'faq_opened' && e.question === 'troca'));
    assert(events.some(e => e.name === 'feature_demo_selected' && e.demo === 'storefront'));
    assert(events.some(e => e.name === 'pricing_viewed'));
    assert(events.some(e => e.name === 'contact_cta_clicked' && e.location === 'pricing'));
    assert.equal((await context.cookies()).length, 0);
    const brokenImages = await page.locator('img').evaluateAll(imgs => imgs.filter(img => img.complete && img.naturalWidth === 0).map(img => img.src));
    assert.deepEqual(brokenImages, []);
    assert.deepEqual(errors, []);
    assert.deepEqual(failed, []);
    await context.close();
    const noJs = await browser.newContext({ javaScriptEnabled: false });
    const staticPage = await noJs.newPage();
    await staticPage.goto(base);
    assert.match(await staticPage.locator('h1').innerText(), /vender mais/);
    await staticPage.locator('details').first().locator('summary').click();
    assert.equal(await staticPage.locator('details').first().getAttribute('open'), '');
    const result = { widths: [320,390,768,1440,1920], sections: 14, consoleErrors: errors, failedResources: failed, passed: ['canonical','CTA destination','anchors','mobile menu','keyboard Escape','FAQ','demo switching','enlarged dialog and focus return','local analytics events','no cookies','no-JS content'], events };
    fs.writeFileSync(path.join(output,'results.json'), JSON.stringify(result,null,2));
    console.log(JSON.stringify(result,null,2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
