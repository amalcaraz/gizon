const fs = require('fs');
const path = require('path')
const sharp = require('sharp')

const rootPath = path.resolve(__dirname, '..')
const srcDir = path.resolve(rootPath, './images')
const outDir = path.resolve(rootPath, './public/img')

async function run() {
  fs.mkdirSync(outDir)

  fs.readdirSync(srcDir).forEach(file => {
    const src = `${srcDir}/${file}`
    const out = `${outDir}/${file}`

    if (/(.+)\.jpeg$/.test(file)) {
      processJpg(src, out)
    }

    if (/(.+)\.png$/.test(file)) {
      processAll(src, out)
    }

  })
}

async function processAll(src, out) {
  const sizes = [
    [1, 'xl'],
    [2, 'l'],
    [4, 'm'],
    [8, 's']
  ]

  console.log('🚀 Processing [*]:', src)

  const image = sharp(src)
  const { width, format } = await image.metadata()
  const outFile = `${out.replace(`\.${format}`, '')}`

  for (let [f, p] of sizes) {

    const sized = sharp(src).resize(width / f)

    sized
      [format]() // .jpeg() / .png()
      .toFile(`${outFile}-${p}.${format}`);

    sized
      .webp()
      .toFile(`${outFile}-${p}.webp`);
  }

}

async function processJpg(src, out) {
  const sizes = [
    [768, 1024, 'xl'],
    [600, 800, 'l'],
    [480, 640, 'm'],
    [240, 320, 's']
  ]

  console.log('🚀 Processing [jpeg]:', src)

  const image = sharp(src)
  const { format } = await image.metadata()
  const outFile = `${out.replace(`\.${format}`, '')}`
  
  for (let [w, h, p] of sizes) {

    const sized = sharp(src).resize(w, h)

    sized
      .jpeg()
      .toFile(`${outFile}-${p}.jpeg`);

    sized
      .webp()
      .toFile(`${outFile}-${p}.webp`);
  }

}

run()
