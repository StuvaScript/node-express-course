const { products } = require("../data");

//* **`` Searches the products based off the query parameters
function queryProducts(req, res) {
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
}

module.exports = { queryProducts };
