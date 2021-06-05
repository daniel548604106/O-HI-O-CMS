const express = require("express");
const router = express.Router();
const {
postLogin
} = require("../controllers/authController");
router.route("/").post(postLogin);
module.exports = router;
