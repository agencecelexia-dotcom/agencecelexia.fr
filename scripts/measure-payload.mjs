/**
 * Inventory the eagerly declared resources of a built page, without a browser.
 * Gzip sizes are local estimates, not network timings or Core Web Vitals.
 * Usage: node scripts/measure-payload.mjs [/route]
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { gzipSync } from 'node:zlib';

const route = process.argv[2] || '/';
if (!/^\/[a-z0-9/-]*$/i.test(route) || route.includes('..')) throw new Error('Expected a site route such as / or /guides.');
const dist = resolve('dist');
const file = resolve(dist, `.${route.replace(/\/$/, '')}/index.html`);
const document = readFileSync(file, 'utf8');
const attributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w-]+)=["']([^"']*)["']/g)].map(([, key, value]) => [key, value]));
const resources = new Map();
const externalScripts = [];
function add(path, type) {
  if (!path.startsWith('/') || path.startsWith('//')) return;
  resources.set(path, type);
}

for (const [tag] of document.matchAll(/<(?:link|script|img)\b[^>]*>/g)) {
  const attrs = attributes(tag);
  if (tag.startsWith('<script') && attrs.src) {
    if (/^https?:/.test(attrs.src)) externalScripts.push(attrs.src);
    else add(attrs.src, 'script');
  } else if (tag.startsWith('<link') && ['stylesheet', 'modulepreload', 'preload'].includes(attrs.rel)) {
    add(attrs.href || '', attrs.rel === 'stylesheet' ? 'stylesheet' : attrs.as === 'font' ? 'font' : 'script');
  } else if (tag.startsWith('<img') && attrs.loading !== 'lazy') add(attrs.src || '', 'image');
}

const files = [...resources].map(([path, type]) => {
  const data = readFileSync(resolve(dist, `.${path}`));
  return { path, type, bytes: data.length, estimatedTransferBytes: ['script', 'stylesheet'].includes(type) ? gzipSync(data).length : data.length };
});
const html = { bytes: Buffer.byteLength(document), gzipBytes: gzipSync(document).length };
console.log(JSON.stringify({
  route,
  measurement: 'Built HTML and eagerly declared first-party resources; local gzip estimates, no browser timing.',
  html,
  resources: files,
  firstPartyEstimatedTransferBytes: html.gzipBytes + files.reduce((sum, resource) => sum + resource.estimatedTransferBytes, 0),
  externalInitialScripts: externalScripts,
}, null, 2));
