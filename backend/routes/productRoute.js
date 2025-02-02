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
  
module.exports = router