const express = require("express");
const logonRouter = require("./routes/logon");
const app = express();

//* **`` Middleware ``**
app.use(express.json());

//* **`` Routes ``**
app.use("/api/v1", logonRouter);

//* **`` Connection ``**
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
