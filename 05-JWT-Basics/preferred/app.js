require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const logonRouter = require("./routes/logon");
const pageNotFound = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//* **`` Middleware ``**
app.use(express.json());

//* **`` Routes ``**
app.use("/api/v1", logonRouter);

//* **`` Errors ``**
app.use(pageNotFound);
app.use(errorMiddleware);

//* **`` Connection ``**
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
