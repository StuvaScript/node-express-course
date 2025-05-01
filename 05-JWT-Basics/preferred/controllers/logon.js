const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const logon = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }

  const id = new Date().getDate(); //* <-- Dummy data

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const hello = async (req, res) => {
  res.status(200).json({ msg: "Hello" });
};

module.exports = { logon, hello };
