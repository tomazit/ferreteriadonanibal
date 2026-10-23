import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';

const sprite = (await readFile('assets/iconos.svg', 'utf8')).trim()
  .replace('<svg xmlns="http://www.w3.org/2000/svg">', '<svg xmlns="http://www.w3.org/2000/svg" class="icon-sprite" aria-hidden="true" focusable="false">');

for (const file of ['index.html', 'catalogo.html']) {
  const html = await readFile(file, 'utf8');
  const updated = html.replace(/<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" class="icon-sprite".*?<\/svg>/s, sprite);
  if (updated === html && !html.includes('class="icon-sprite"')) {
    throw new Error(`Falta el sprite SVG en ${file}`);
  }
  if (updated !== html) await writeFile(file, updated);
}

await Promise.all([
  ['js/home.js', 'js/home.bundle.js'],
  ['js/catalog.js', 'js/catalog.bundle.js'],
].map(([entryPoint, outfile]) => build({
  entryPoints: [entryPoint],
  outfile,
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['chrome90'],
  charset: 'utf8',
  logLevel: 'info',
})));
