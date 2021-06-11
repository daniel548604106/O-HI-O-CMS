const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'Please upload the banner']
  },
  title:{
    type: String,
    required:[true, 'Please write something about the banner']
  },
  link:{
    type: String,
    required:[true, 'Please tell us where the banner is directed to']
  }

},{
  timestamps: true
})

const Banner = mongoose.model('Banners', bannerSchema)


module.exports = Banner

