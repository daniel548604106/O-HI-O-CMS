const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProduct,
  getCollectionProducts,
  getDiscountedProducts,
  getRecommendedProducts,
  addNewProduct,
  patchProduct,
} = require("../controllers/productController");
router.route("/").get(getAllProducts);
router.route("/discount").get(getDiscountedProducts);
router.route("/collection/:collection").get(getCollectionProducts);
router.route("/product/:id").get(getProduct).patch(patchProduct);
router.route("/recommendation").get(getRecommendedProducts);
module.exports = router;
