const express = require("express");
const {
  addPerson,
  getPeople,
  findPerson,
  deletePerson,
} = require("../controllers/people");
const router = express.Router();

router.get("/", getPeople);
router.post("/", addPerson);

router.get("/:id", findPerson);
router.delete("/:id", deletePerson);

// router.route("/").get(getPeople).post(addPerson);
// router.route("/:id").get(findPerson).delete(deletePerson);

module.exports = router;
