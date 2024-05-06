// routes/product.routes.js
const express = require('express');
const router = express.Router();
const {createProduct,getProductById, getAllProducts, updateProduct,getAllProducts,deleteProduct} = require('../controllers/product.controller');

router.post('/', createProduct);
router.get('/:id', getProductById);
router.get('/', getAllProducts);
router.put('/:id', updateProduct);
router.delete('/:id',deleteProduct);

module.exports = router;
