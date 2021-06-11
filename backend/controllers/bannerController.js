const Banner = require( '../models/bannerModel')


const getBanners  = async(req,res) =>{
  try{
    console.log('hi')
    const banners  = await Banner.find()
    console.log(banners)
    res.json({
      banners
    })
  }catch(error){
    console.log(error)
  }
}

const getBanner = async(req,res) =>{
  try{
    const {id} = req.params
    const banner = await Banner.findById(id)
    console.log(banner)
    res.json({
      banner
    })
  }catch(error){
    console.log(error)
  }
}

const patchBanner = async(req,res) =>{
  try{
    const { _id,image, title, link} = req.body
    const banner = await Banner.findById(_id)
    console.log('check',banner)
    banner.image= image;
    banner.title = title;
    banner.link= link
    await banner.save()
    console.log(banner)
    res.status(204)
  }catch(error){
    console.log(error)
  }
}


module.exports = {getBanners,getBanner,patchBanner}