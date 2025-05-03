const jwt = require("jsonwebtoken");
const { BadRequestError, CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const logon = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide username and password");
  }

  const id = new Date().getDate(); //* <-- Dummy data

  jwt.sign(
    { id, username },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    },
    (err, token) => {
      if (err) {
        throw new CustomAPIError(
          "Something went wrong trying to create your JSON Web Token",
          StatusCodes.INTERNAL_SERVER_ERROR
        );
      } else {
        res.status(200).json({ msg: "user created", token });
      }
    }
  );
};

const hello = async (req, res) => {
  res.status(200).json({ msg: `Hello ${req.user.username}` });
};

module.exports = { logon, hello };
