const { readFileSync } = require("fs")
const sharp = require("sharp")

async function main() {
 console.log("resize <path> <width1> <width2> ...")
 const path = process.argv[2]
 const pathWithoutExtension = path.replace(/\.\w+$/, "")

 const widths = process.argv.slice(3).map(Number)
 const image = sharp(readFileSync(path))

 for (const width of widths) {
  image.resize(width, null).toFile(`${pathWithoutExtension}-${width}w.webp`)
 }
}

main()