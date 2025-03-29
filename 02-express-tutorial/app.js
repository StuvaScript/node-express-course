const express = require("express");
const app = express();
const cors = require("cors");
const { products } = require("./data");

app.use(cors());

//* **`` Middleware that sends our static files from the public folder
app.use(express.static("./public"));

//* **`` Middleware test
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!!!" });
});

//* **`` Middleware that returns products from the data.js file
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

//* **`` Middleware that returns products based off the id passed in the url parameters
app.get("/api/v1/products/:productID", (req, res) => {
  const productByID = products.find(
    (product) => product.id === Number(req.params.productID)
  );

  productByID
    ? res.json(productByID)
    : res.status(404).json({ message: "That product was not found" });
});

//* **`` Middleware that searches the products based off the url query
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
    ? res.status(404).json({ message: "No products were not found" })
    : res.json(filteredProducts);
});

//* **`` Middleware that handles all GET requests that are not found
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

//* **`` This is our port
app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
