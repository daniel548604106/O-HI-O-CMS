const express = require('express')
const router = express.Router()
const {uploadBannerPhoto} = require('../middleware/uploadMiddleware')
const { getBanners , getBanner, patchBanner}  = require('../controllers/bannerController')
router.route('/').get(getBanners)
router.route('/:id').get(getBanner).patch(uploadBannerPhoto,patchBanner)

module.exports = router