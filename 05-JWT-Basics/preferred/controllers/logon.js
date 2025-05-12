const jwt = require("jsonwebtoken");
const { BadRequestError, CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const logon = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    throw new BadRequestError("Please provide username and password");
  }

  const id = new Date().getDate(); //* <-- Dummy data

  jwt.sign(
    { name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    },
    (err, token) => {
      if (err) {
        throw new CustomAPIError(
          "Something went wrong trying to create your JSON Web Token",
          StatusCodes.INTERNAL_SERVER_ERROR
        );
      } else {
        res.status(200).json({ token });
      }
    }
  );
};

const hello = async (req, res) => {
  res.status(200).json({ msg: `Hello ${req.user.name}` });
};

module.exports = { logon, hello };
