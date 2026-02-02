import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const inputDir = './img';
const outputDir = './public/img';

// Criar diretório de saída se não existir
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Configurações de otimização
const formats = [
  { ext: 'webp', quality: 85 },
  { ext: 'avif', quality: 80 }
];

// Pegar todas as imagens
const files = readdirSync(inputDir).filter(file => 
  /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('Mobile')
);

const mobileFiles = readdirSync(inputDir).filter(file => 
  /Mobile\.(jpg|jpeg|png)$/i.test(file)
);

console.log(`🚀 Otimizando ${files.length} imagens desktop e ${mobileFiles.length} mobile...\n`);

// Função para otimizar uma imagem
async function optimizeImage(file, isMobile = false) {
  const inputPath = join(inputDir, file);
  const nameWithoutExt = file.replace(/\.(jpg|jpeg|png)$/i, '');
  
  try {
    // Obter dimensões originais
    const metadata = await sharp(inputPath).metadata();
    console.log(`📸 ${file} (${metadata.width}x${metadata.height})`);
    
    // Gerar WebP e AVIF
    for (const format of formats) {
      const outputPath = join(outputDir, `${nameWithoutExt}.${format.ext}`);
      
      await sharp(inputPath)
        .resize(metadata.width, metadata.height, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        [format.ext]({ quality: format.quality })
        .toFile(outputPath);
      
      const stats = await sharp(outputPath).stats();
      console.log(`  ✓ ${format.ext.toUpperCase()} criado`);
    }
    
    // Copiar PNG original otimizado (para ícones com transparência)
    if (file.endsWith('.png')) {
      const outputPath = join(outputDir, file);
      await sharp(inputPath)
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(outputPath);
      console.log(`  ✓ PNG otimizado`);
    }
    
    // Copiar JPG original otimizado
    if (file.match(/\.(jpg|jpeg)$/i)) {
      const outputPath = join(outputDir, file);
      await sharp(inputPath)
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(outputPath);
      console.log(`  ✓ JPG otimizado`);
    }
    
    console.log('');
  } catch (error) {
    console.error(`❌ Erro ao processar ${file}:`, error.message);
  }
}

// Processar todas as imagens
async function processAll() {
  // Desktop images
  for (const file of files) {
    await optimizeImage(file, false);
  }
  
  // Mobile images
  for (const file of mobileFiles) {
    await optimizeImage(file, true);
  }
  
  console.log('✅ Otimização concluída!');
  console.log(`📁 Imagens salvas em: ${outputDir}`);
}

processAll().catch(console.error);
