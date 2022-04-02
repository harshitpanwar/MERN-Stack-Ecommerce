const Product = require("../models/productModel");


//Create Prouduct

exports.createProduct = async (req, res, next)=>{

    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })

}

//Get All Prouducts

exports.getAllProducts = async(req, res) => {

    const prouducts = await Product.find()

    res.status(200).json({
        success:true,
        prouducts
    });

}