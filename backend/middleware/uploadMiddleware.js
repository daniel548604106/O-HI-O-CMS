
const ImageKit = require("imagekit");

const imageKit = new ImageKit({
  publicKey : "public_VxxKPNOCjc7ub62pJabHuLA44WE=",
  privateKey : "private_TuXfAhCaGaNLrOgkonL+NslUVLY=",
  urlEndpoint : "https://ik.imagekit.io/4liibdxmxfn"
});

const uploadUserAvatar = async (req,res, next) => {
  try{
    if(!req.body.avatar) return next()
     const uploaded = await imageKit.upload({
      file : req.body.avatar, //required
      fileName : `user-${req.params._id}-${Date.now()}`,   //required
      folder: `/images/users/`
    })
     req.body.avatar = uploaded.url
      console.log('name',uploaded.name, 'filedId', uploaded.fileId)
      next()
  }catch(error){
    console.log(error)
  }
}

const uploadBannerPhoto = async (req,res, next) => {
  try{
      if(!req.body.image) return next()
      console.log('upload',req.body.image)
     const uploaded = await imageKit.upload({
      file : req.body.image, //required
      fileName : `banner-${req.body.title}-${Date.now()}`,   //required
      folder: `/images/banners/`
    })
    console.log('uploaded',uploaded)
     req.body.image = uploaded.url
      console.log('body',req.body)
      next()
  }catch(error){
    console.log(error)
  }
}

const uploadProductImage = async(req,res,next) =>{
  try{
    const uploaded = await imageKit.upload({
      file : req.body.image, //required
      fileName : `product-${req.body.title}-${Date.now()}`,   //required
      folder: `/images/products/`
    })
    console.log(uploaded)
     req.body.image = uploaded.url
      console.log('body',req.body)
      next()
  }catch(error){
    console.log(error)
  }
}


module.exports = { uploadBannerPhoto, uploadUserAvatar ,uploadProductImage }