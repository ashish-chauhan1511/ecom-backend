import products from "../data/products.js";

// GET all products
export const getAllProducts = (req, res) => {
  res.json(products);
};

// GET product by ID
export const getProductById = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};