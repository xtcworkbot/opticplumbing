import puppeteer from 'puppeteer';
const b = await puppeteer.launch({ headless: 'new' });
const p = await b.newPage();
await p.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await p.goto('http://localhost:3000/og-preview.html', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 800));
await p.screenshot({ path: 'og-preview.png', clip: { x:0, y:0, width:1200, height:630 }, omitBackground: false });
await b.close();
console.log('og-preview.png saved');
