const express = require("express");
const app = express();
const peopleRouter = require("./routes/people");
const productsRouter = require("./routes/products");
const queryRouter = require("./routes/query");
const cookieParser = require("cookie-parser");

//* **`` Middleware function that logs the method, url, and current time of requests
function logger(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  console.log(new Date(Date.now()).toLocaleTimeString());
  next();
}

//* **`` Middleware function that checks if the cookie "name" is present (essentially if the user is logged in)
function auth(req, res, next) {
  if (!req.cookies.name) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  req.user = req.cookies.name;
  next();
}

//* **`` Middleware used by all requests
app.use(logger);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

//* **`` Middleware that reads our static files from the public folder
app.use(express.static("./methods-public"));

//* **`` Middleware test
app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ success: true, message: "It worked!!!" });
});

//* **`` Middleware that creates a cookie based off the name passed in the body
app.post("/logon", (req, res) => {
  if (!req.body.name) {
    return res
      .status(401)
      .json({ success: false, message: "Please provide a name" });
  }

  res
    .cookie("name", req.body.name)
    .status(201)
    .json({ success: true, message: `Hello ${req.body.name}` });
});

//* **`` Middleware that clears the cookie "name" and essentially logs the user off
app.delete("/logoff", (req, res) => {
  res
    .clearCookie("name")
    .status(200)
    .json({ success: true, message: "User has successfully logged off" });
});

//* **`` Middleware that checks if the user is logged in
app.get("/test", auth, (req, res) => {
  res.status(200).json({ success: true, message: `Welcome ${req.user}` });
});

//* **`` Routes
app.use("/api/v1/people", peopleRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/query", queryRouter);

//* **`` Middleware that handles all requests that are not found
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

//* **`` This is our port
app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
