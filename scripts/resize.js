const { readFileSync } = require("fs");
const Jimp = require("jimp");

async function main() {
  console.log("resize <path> <width1> <width2> ...");
  const path = process.argv[2];
  const pathWithoutExtension = path.replace(/\.\w+$/, "");

  const widths = process.argv.slice(3).map(Number);
  const image = await Jimp.read(path);

  for (const width of widths) {
    image.resize(width, Jimp.AUTO);
    image.write(`${pathWithoutExtension}-${width}w.png`);
  }
}

main();
