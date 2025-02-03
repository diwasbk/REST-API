const express = require("express");
const Product = require("../models/productModel");

const router = express.Router();
// Get all products
router.get('/', async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
// Get a single product by ID
router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findOne({where:{id}});
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
// Create a new product
router.post("/", async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({ name, price, description });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Update a product
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description } = req.body;
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    await product.update({ name, price, description });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router