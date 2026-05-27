import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const SRC = 'assets';
const MAX_W = 1920;
const QUALITY = 78;

const files = await fs.readdir(SRC);
const targets = files.filter(f => /\.(jpe?g|png)$/i.test(f) && !f.startsWith('.'));

let totalBefore = 0, totalAfter = 0;
for (const f of targets) {
  const src = path.join(SRC, f);
  const out = path.join(SRC, f.replace(/\.(jpe?g|png)$/i, '.webp'));
  if (out === src) continue;
  const before = (await fs.stat(src)).size;
  totalBefore += before;
  await sharp(src, { failOn: 'none' })
    .rotate()                                // honour EXIF orientation
    .resize({ width: MAX_W, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(out);
  const after = (await fs.stat(out)).size;
  totalAfter += after;
  const ratio = ((1 - after/before) * 100).toFixed(1);
  console.log(`${f.padEnd(60)} ${(before/1024/1024).toFixed(2)}MB → ${(after/1024).toFixed(0)}KB  (-${ratio}%)`);
}
console.log('—'.repeat(80));
console.log(`TOTAL: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB  saved ${((1 - totalAfter/totalBefore)*100).toFixed(1)}%`);
