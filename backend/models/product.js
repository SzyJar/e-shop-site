const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: {
        type: String,
        requierd: true,
        unique: true,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    releaseDate: {
        type: Date,
    },
    company: {
        type: String,
    },
    price: {
        type: Number,
    }
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;