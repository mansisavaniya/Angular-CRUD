const mongoose = require('mongoose');

const productschema = new mongoose.Schema(
    {
        productid: { 
            type: Number, 
            required: true, 
            unique: true,
        },
        productname: { 
            type: String, 
            required: [true,"Product name should not be left blank"],
        },
        description: { 
            type: String, 
            required: [true,"Description should not be left blank"],
        },
        quantity: { 
            type: Number, 
            required: [true,"Qunatity should not be left blank"],
        },
        price: { 
            type: Number, 
            required: [true,"Price name should not be left blank"],
        },
})

var productdata = mongoose.model('product',productschema);

module.exports= productdata;

