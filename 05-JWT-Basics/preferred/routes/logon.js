const express = require("express");
const router = express.Router();

const { logon, hello } = require("../controllers/logon");

const authMiddleware = require("../middleware/auth");

router.route("/logon").post(logon);
router.route("/hello").get(authMiddleware, hello);

module.exports = router;
