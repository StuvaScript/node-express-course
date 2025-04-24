const express = require("express");
const { queryProducts } = require("../controllers/query");
const router = express.Router();

router.get("/", queryProducts);

module.exports = router;
