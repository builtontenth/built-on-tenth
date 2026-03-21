import fs from 'fs';
import path from 'path';

const targets = ['dist', '.astro'];

for (const target of targets) {
  const fullPath = path.resolve(process.cwd(), target);
  fs.rmSync(fullPath, { recursive: true, force: true });
}

console.log('Cleaned generated directories: dist, .astro');
