const dotenv=require("dotenv")
module.exports={
  remoteImages: async ()=>{
    dotenv.config()
    const client=require('microcms-js-sdk').createClient({
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
      apiKey: process.env.MICROCMS_API_KEY
    });
    const list=await client.getAllContents({
      endpoint:"blogs",
    })
    const list2=await client.getAllContents({
      endpoint:"journey",
    })
    list .push(...list2)
    const imgs=[];
    list.map(l=>{
      const s=l.content.toString()
      s.match(/https:\/\/images\.microcms-assets\.io\/assets\/.*?(?="|$)/g)?.map(m=>{
        imgs.push(m)
      })
    })
    return imgs
  }
}