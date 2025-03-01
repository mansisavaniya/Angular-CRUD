const express = require('express');
const router = express.Router();

// Import Controllers (Fixed Path)
const {
    createProduct,
    getAllProducts,
    getProductByID,
    updateProduct,
    deleteProduct
} = require('../controller/productcontroller.js'); // FIXED path

// Routes
router.post('/createproduct', createProduct);
router.get('/getallproducts', getAllProducts);
router.get('/getproduct/:prcode', getProductByID);
router.put('/updproduct/:prcode', updateProduct);
router.delete('/delproduct/:prcode', deleteProduct);

module.exports = router;
