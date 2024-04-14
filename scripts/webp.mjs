import imagemin from "imagemin"
import imageminWebp from "imagemin-webp"

async function main() {
  console.log("webp <path> ...")
  const path = process.argv[2]
  console.log(`Converting images in ${path} to webp...`)
  await imagemin([`${path}/*.{jpg,png,jpeg}`], {
    destination: `${path}/webp`,
    plugins: [imageminWebp({ quality: 75 })]
  })
  console.log("Done!")
}

main()