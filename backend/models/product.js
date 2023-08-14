const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: {
        type: String,
        requierd: true,
        unique: true,
    },
    cover: {
        type: String,
    },
    description: {
        type: String,
    },
    releaseDate: {
        type: Date,
    },
    developer: {
        type: String,
    },
    price: {
        type: Number,
    }
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;