const Product = require('../model/product');

exports.createProduct = async (req, res) => {
    try {
        const { productid, productname, description, quantity, price } = req.body;
        if (!productid || !productname || !description || !quantity || !price) {
            return res.status(400).json({ success: false, message: 'All fields are required!' });
        }

        // Check for duplicate product ID
        const existsProduct = await Product.findOne({ productid });
        if (existsProduct) {
            return res.status(400).json({ success: false, message: 'Product ID should be unique!' });
        }

        const newProduct = new Product({ productid, productname, description, quantity, price });
        await newProduct.save();
        res.status(201).json({ success: true, message: 'Product created successfully!', product: newProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        console.log('✅ Sending Products:', products); // Debugging
        if (!products || products.length === 0) {
            return res.status(200).json([]); // Return an empty array
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


exports.getProductByID = async (req, res) => {
    try {
        const product = await Product.findOne({ productid: req.params.prcode });
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found!' });
        }
        res.status(200).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { productid: req.params.prcode },
            req.body,
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found!' });
        }

        res.status(200).json({ success: true, message: 'Product updated successfully!', product: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ productid: req.params.prcode });
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found!' });
        }
        res.status(200).json({ success: true, message: 'Product deleted successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
