const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        requierd: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    privileges: {
        type: Number,
        default: 0
    }
});

const User = mongoose.model('Users', userSchema);

module.exports = User;