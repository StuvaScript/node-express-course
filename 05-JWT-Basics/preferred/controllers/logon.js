const logon = async (req, res) => {
  const { name, password } = req.body;
  console.log({ name, password });

  res.status(200).json({ token: "Super secret token" });
};

const hello = async (req, res) => {
  res.status(200).json({ msg: "Hello" });
};

module.exports = { logon, hello };
