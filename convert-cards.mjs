import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function convertCards() {
  const files = ['cardA.jpg', 'cardB.jpg'];
  
  for (const file of files) {
    const inputPath = join(__dirname, 'public', 'img', file);
    const baseName = file.replace('.jpg', '');
    const outputBase = baseName + '-feature';
    
    console.log(`Converting ${file} to ${outputBase}.webp and ${outputBase}.avif...`);
    
    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(join(__dirname, 'public', 'img', outputBase + '.webp'));
    
    // Convert to AVIF
    await sharp(inputPath)
      .avif({ quality: 80 })
      .toFile(join(__dirname, 'public', 'img', outputBase + '.avif'));
    
    console.log(`✓ ${file} converted successfully`);
  }
  
  console.log('\n✅ Conversion complete!');
}

convertCards().catch(console.error);
