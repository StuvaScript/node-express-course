const express = require("express");
const { getProducts, getProductById } = require("../controllers/products");
const router = express.Router();

router.get("/", getProducts);
router.get("/:productID", getProductById);

module.exports = router;
