const logon = (req, res) => {
  res.status(200).json({ msg: "Log on" });
};

const hello = (req, res) => {
  res.status(200).json({ msg: "Hello" });
};

module.exports = { logon, hello };
