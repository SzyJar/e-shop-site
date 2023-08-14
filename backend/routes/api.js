const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user');
const Product = require('../models/product');


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'e-shop'
}).catch(err => console.log(err));


module.exports = function (app) {

    // Server wake up for replit hosting
    app.route('/')
    .get(function(req, res) {
        res.status(200).end('server is up');
    });

    // Login

    // Logout


    app.route('/product/:name')
    // Get product
    .get(async function(req, res) {
        const name = req.params.name;
        try {
            const product = await Product.findOne({ name: name });
            if (product) {
                return res.json(product);
            } else {
                return res.status(404).end('Product does not exist');
            }
        } catch(err) {
            console.error('Error occurred in GET request to /product/:name', err.message);
            res.status(500).end('An error occurred while retrieving the product');
        };
    })
    // Add product
    .post(async function(req, res) {
        const productData = {
            name: req.params.name,
            cover: req.body.cover,
            description: req.body.description,
            releaseDate: req.body.releaseDate,
            developer: req.body.developer,
            price: req.body.price
        };
        try {
            const newProduct = new Product(productData);
            await newProduct.save();
            return res.status(201).json(newProduct);
        } catch(err) {
            console.error('Error occurred in POST request to /product/:name', err.message);
            res.status(500).end('An error occurred while creating a product');
        };
    })
    // Modify product
    .put(async function(req, res) {
        
    })
    // Remove product
};