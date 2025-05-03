const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      throw new UnauthenticatedError("Not authorized to access this route");
    } else {
      const { id, username } = decoded;
      req.user = { id, username };
      next();
    }
  });
};

module.exports = authenticationMiddleware;
