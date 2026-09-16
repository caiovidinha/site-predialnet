// Redimensiona e recomprime as imagens de public/img mantendo os mesmos nomes.
// Os originais ficam em img-originals/ (fora de public, não são publicados).
// Rodar de novo é seguro: sempre parte do original.
import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync, copyFileSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

const imgDir = './public/img';
const originalsDir = './img-originals';
const MIN_BYTES = 80 * 1024; // só mexe em arquivos maiores que isso

// Largura máxima conforme onde a imagem aparece no site
function maxWidthFor(file) {
  if (/^card/i.test(file)) return 720;                  // cards de plano (1/4 da tela)
  if (/^(navega-|ideal-)/i.test(file)) return 900;      // cards das seções
  if (/^foto_empresa_mobile/i.test(file)) return 800;
  if (/^foto_empresa/i.test(file)) return 1200;         // coluna de 45%
  if (/mobile/i.test(file)) return 1080;                // versões para celular
  return 1920;                                          // banners de largura total
}

if (!existsSync(originalsDir)) mkdirSync(originalsDir, { recursive: true });

const files = readdirSync(imgDir).filter((f) => /\.(webp|avif|jpe?g|png)$/i.test(f));
let before = 0;
let after = 0;

for (const file of files) {
  const imgPath = join(imgDir, file);
  const origPath = join(originalsDir, file);
  if (!existsSync(origPath)) copyFileSync(imgPath, origPath);

  const origSize = statSync(origPath).size;
  if (origSize < MIN_BYTES) continue;

  const meta = await sharp(origPath).metadata();
  const width = Math.min(meta.width, maxWidthFor(file));
  let pipeline = sharp(origPath).resize({ width, withoutEnlargement: true });

  const ext = file.split('.').pop().toLowerCase();
  if (ext === 'webp') pipeline = pipeline.webp({ quality: 75, effort: 6 });
  else if (ext === 'avif') pipeline = pipeline.avif({ quality: 55, effort: 5 });
  else if (ext === 'png') pipeline = pipeline.png({ compressionLevel: 9 });
  else pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true });

  const buf = await pipeline.toBuffer();
  before += origSize;
  if (buf.length < origSize) {
    writeFileSync(imgPath, buf);
    after += buf.length;
    console.log(`${file}: ${meta.width}px ${(origSize / 1024) | 0}KB -> ${width}px ${(buf.length / 1024) | 0}KB`);
  } else {
    copyFileSync(origPath, imgPath);
    after += origSize;
  }
}

console.log(`\nTotal: ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB`);
