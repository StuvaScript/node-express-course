const logon = (req, res) => {
  console.log("req body:", req.body);

  res.status(200).json({ token: "Super secret token" });
};

const hello = (req, res) => {
  res.status(200).json({ msg: "Hello" });
};

module.exports = { logon, hello };
