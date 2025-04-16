const { products } = require("../data");

//* **`` Returns products from the data.js file
function getProducts(req, res) {
  res.status(200).json({ success: true, data: products });
}

//* **`` Returns products based off the id passed in the path parameters
function getProductById(req, res) {
  const productByID = products.find(
    (product) => product.id === Number(req.params.productID)
  );

  productByID
    ? res.status(200).json({ success: true, data: productByID })
    : res
        .status(404)
        .json({ success: false, message: "That product was not found" });
}

module.exports = { getProducts, getProductById };
