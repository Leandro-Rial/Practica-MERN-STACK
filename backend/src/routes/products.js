const router = require('express').Router();
const { getProducts, createProduct, getProduct, updateProduct, deleteProduct } = require('../controlllers/products');

// Get all products
router.get('/', getProducts)


// Create a new product
router.post('/', createProduct)


// Get a product
router.get('/:id', getProduct)


// Edited a product
router.put('/edit/:id', updateProduct)


// Deleted a product
router.delete('/:id', deleteProduct)


module.exports = router;