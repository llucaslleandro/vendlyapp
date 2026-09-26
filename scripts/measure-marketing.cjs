// Local laboratory sample; not field Core Web Vitals or an INP assessment.
/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node CommonJS verification. */
const { chromium } = require('playwright');
const fs = require('node:fs');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
    const cdp = await page.context().newCDPSession(page);
    await cdp.send('Network.enable');
    await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
    await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 200000, uploadThroughput: 93750 });
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    await page.addInitScript(() => {
      window.metrics = { lcpMs: null, lcpElement: null, layoutShiftSum: 0 };
      new PerformanceObserver(list => { for (const e of list.getEntries()) { window.metrics.lcpMs = e.startTime; window.metrics.lcpElement = e.element?.tagName; } }).observe({ type: 'largest-contentful-paint', buffered: true });
      new PerformanceObserver(list => { for (const e of list.getEntries()) if (!e.hadRecentInput) window.metrics.layoutShiftSum += e.value; }).observe({ type: 'layout-shift', buffered: true });
    });
    await page.goto(process.env.PREVIEW_URL || 'http://127.0.0.1:3321', { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1000);
    const metrics = await page.evaluate(() => ({ ...window.metrics, transferredBytes: performance.getEntriesByType('resource').reduce((n,e) => n + e.transferSize, 0) + performance.getEntriesByType('navigation')[0].transferSize, externalOrigins: [...new Set(performance.getEntriesByType('resource').map(e => new URL(e.name).origin))].filter(origin => origin !== location.origin) }));
    const report = { scenario: 'Chrome local, 390x844, cold cache, 4x CPU, 1.6 Mbps down, 150 ms latency; Python static server without compression', ...metrics, inp: 'Not measured; requires representative interactions/field data.' };
    fs.mkdirSync('outputs/marketing', { recursive: true });
    fs.writeFileSync('outputs/marketing/performance.json', JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
