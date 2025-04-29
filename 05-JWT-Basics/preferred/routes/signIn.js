const express = require("express");
const router = express.Router();

const { logon, hello } = require("../controllers/signIn");

router.route("/logon").post(logon);
router.route("/hello").get(hello);

module.exports = router;
