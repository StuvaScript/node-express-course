const express = require("express");
const {
  addPerson,
  getPeople,
  findPerson,
  deletePerson,
} = require("../controllers/people");
const router = express.Router();

router.get("/", getPeople);
router.get("/:id", findPerson);
router.post("/", addPerson);
router.delete("/:id", deletePerson);

module.exports = router;
