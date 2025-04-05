const express = require("express");
const app = express();
const { products } = require("./data");
const peopleRouter = require("./routes/people");

//* **`` Middleware function that logs the method, url, and current time of requests
function logger(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  console.log(Date.now());
  next();
}

//* **`` Middleware used by all requests
app.use(logger);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* **`` Middleware that reads our static files from the public folder
app.use(express.static("./methods-public"));

//* **`` Middleware test
app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ success: true, message: "It worked!!!" });
});

//* **`` Middleware that routes to the people.js file
app.use("/api/v1/people", peopleRouter);

//* **`` Middleware that returns products from the data.js file
app.get("/api/v1/products", (req, res) => {
  res.status(200).json({ success: true, data: products });
});

//* **`` Middleware that returns products based off the id passed in the path parameters
app.get("/api/v1/products/:productID", (req, res) => {
  const productByID = products.find(
    (product) => product.id === Number(req.params.productID)
  );

  productByID
    ? res.status(200).json({ success: true, data: productByID })
    : res
        .status(404)
        .json({ success: false, message: "That product was not found" });
});

//* **`` Middleware that searches the products based off the query parameters
app.get("/api/v1/query", (req, res) => {
  let filteredProducts = [...products];

  //* **`` Search by name
  if (req.query.search) {
    filteredProducts = products.filter((product) =>
      product.name.startsWith(req.query.search)
    );
  }

  //* **`` Limits the amount of results
  if (req.query.limit) {
    filteredProducts = products.slice(0, req.query.limit);
  }

  //* **`` Filter by price
  if (req.query.price) {
    filteredProducts = products.filter(
      (products) => products.price <= req.query.price
    );
  }

  filteredProducts.length === 0
    ? res
        .status(404)
        .json({ success: false, message: "No products were found" })
    : res.status(200).json({ success: true, data: filteredProducts });
});

//* **`` Middleware that handles all requests that are not found
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

//* **`` This is our port
app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
