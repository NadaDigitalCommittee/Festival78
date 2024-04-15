const dotenv=require("dotenv")
module.exports={
  remoteImages: async ()=>{
    dotenv.config()
    const client=require('microcms-js-sdk').createClient({
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
      apiKey: process.env.MICROCMS_API_KEY
    });
    const list=await client.getAllContents({
      endpoint:"blogs"
    })
    const imgs=[];
    list.map(l=>{
      const s=l.content.toString()
      s.match(/https:\/\/images.microcms-assets.io\/assets.*[png,webp,jpg,jpeg]/s)?.map(m=>{
        const img=m.replace(/src="/,"").replace(/"/,"")
        imgs.push(img)
      })
    })
    console.log(imgs)
    return list.contents
  }
}