const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Product = require('../models/product');
const Token = require('../models/jwt');
const auth = require('../controllers/auth');
const authAdmin = require('../controllers/authAdmin');


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'e-shop'
}).catch(err => console.log(err));

module.exports = function (app) {

    // Server wake up for replit hosting
    app.route('/')
    .get(function(req, res) {
        res.status(200).json({ message: 'server is up' });
    });

    // Login
    app.route('/login')
    .post(async function(req, res) {
        try {
            const { name, password } = req.body;

            const user = await User.findOne({ name: name });
            if (!user) {
                return res.status(404).json({ message: 'User does not exist' });
            };
    
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid credentials' });
            };
    
            const accessToken = jwt.sign({ id: user._id }, process.env.SECURITY_KEY, { expiresIn : 86400 });
            //const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_SECURITY_KEY, { expiresIn : 525600 });
    
            return res.status(200).json({ accessToken });
        } catch(err) {
            console.error('Error occurred in POST request to /login', err.message);
            res.status(500).json({ error: 'An error occurred while logging in' });
        };
    });

    // Signup
    app.route('/signup')
    .post(async function(req, res) {
        try {
            const { name, password } = req.body;

            const user = await User.findOne({ name: name });
            if (user) {
                return res.status(409).json({ message: 'User already exists' });
            };
            const hash = await bcrypt.hash(password, 12);
            const newUser = new User({
                name: name,
                password: hash,
            });
            await newUser.save();
    
            const accessToken = jwt.sign({ _id: newUser._id }, process.env.SECURITY_KEY, { expiresIn : 86400 });
            //const refreshToken = jwt.sign({ _id: newUser._id }, process.env.REFRESH_SECURITY_KEY, { expiresIn : 525600 });
    
            return res.status(200).json({ accessToken });
        } catch(err) {
            console.error('Error occurred in POST request to /signup', err.message);
            res.status(500).json({ error: 'An error occurred while signing up' });
        };
    });

    // Logout
    app.route('/logout')
    .post(auth, async function(req, res) {
        try {
            const token = req.header('Authorization');
            const newToken = new Token({
                token: token
            });
            await newToken.save();
            res.status(200).json({ message: 'User logged out' });
        } catch(err) {
            console.error('Error occurred in POST request to /logout', err.message);
            res.status(500).json({ error: 'An error occurred while logging out' });
        };
    });

    // Get all products
    app.route('/product')
    .get(async function(req, res) {
        try {
            const allProducts = await Product.find({});
            const productList = allProducts.map(product => {
                const productData = {};
            
                for (const field in Product.schema.paths) {
                if (Object.hasOwnProperty.call(Product.schema.paths, field)) {
                    if (product[field] !== undefined) {
                    productData[field] = product[field];
                    };
                };
                };

                return productData;
            });

            return res.json(productList);
        } catch(err) {
            console.error('Error occurred in GET request to /product', err.message);
            res.status(500).json({ error: 'An error occurred while retrieving products' });
        };
    });

    app.route('/product/:name')
    // Get product
    .get(async function(req, res) {
        const name = req.params.name;
        try {
            const product = await Product.findOne({ name: name });
            if (product) {
                return res.json(product);
            } else {
                return res.status(404).json({ message: 'Product does not exist' });
            };
        } catch(err) {
            console.error('Error occurred in GET request to /product/:name', err.message);
            res.status(500).json({ error: 'An error occurred while retrieving a product' });
        };
    })
    // Add product
    .post(auth, authAdmin, async function(req, res) {
        const productData = {
            name: req.params.name,
            image: req.body.image,
            description: req.body.description,
            releaseDate: req.body.releaseDate,
            company: req.body.company,
            price: req.body.price
        };
        try {
            const product = await Product.findOne({ name: req.params.name });
            if (product) {
                return res.status(409).json({ message: 'Product already exists' });
            };
            const newProduct = new Product(productData);
            await newProduct.save();
            return res.status(201).json(newProduct);
        } catch(err) {
            console.error('Error occurred in POST request to /product/:name', err.message);
            res.status(500).end('An error occurred while creating a product');
        };
    })
    // Modify product
    .put(auth, authAdmin, async function(req, res) {
        const name = req.params.name;
        // Check schema to determine what kind of data is declared
        const allowedData = Object.keys(Product.schema.paths);
        try {
            const product = await Product.findOne({ name: name });
            if (!product) {
                return res.status(404).json({ message: 'Product does not exist' });
            };
            for (const field in req.body) {
                if (Object.hasOwnProperty.call(req.body, field)) {
                    // If client sends data that is not declared in schema, ignore it
                    if (allowedData.includes(field) && req.body[field]) {
                        product[field] = req.body[field];
                    };
                };
            };
            await product.save();
            return res.status(200).json(product);
        } catch(err) {
            console.error('Error occurred in PUT request to /product/:name', err.message);
            res.status(500).json({ error: 'An error occurred while updating a product' });
        };
    })
    // Remove product
    .delete(auth, authAdmin, async function(req, res) {
        const name = req.params.name;
        try {
            const product = await Product.findOneAndDelete({ name: name });
            if (!product) {
                return res.status(404).json({ message: 'Product does not exist - deletion aborted' });
            };
            return res.status(200).json({ message: "Successfully deleted" });
        } catch(err) {
            console.error('Error occurred in DELETE request to /product/:name', err.message);
            res.status(500).json({ error: 'An error occurred while deleting a product' });
        };
    })
};