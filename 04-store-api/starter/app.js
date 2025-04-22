require("dotenv").config();
// async errors

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//* **`` Middleware ``**
app.use(express.json());

//* **`` Routes ``**
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

//* **`` Products Route ``**

//* **`` Errors ``**
app.use(notFoundMiddleware);
app.use(errorMiddleware);

//* **`` Connection ``**

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //todo **`` Connect to DB
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.error(error);
  }
};

start();
