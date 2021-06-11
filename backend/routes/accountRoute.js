const express = require('express')
const router = express.Router()
const { updateMyPassword,updateMyData}  = require('../controllers/accountController')
const { protect}  = require('../middleware/authMiddleware')
router.route('/my').patch(updateMyData)
router.route('/my/password').patch(protect,updateMyPassword)

module.exports = router