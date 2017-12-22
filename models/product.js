let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let schema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        default: ''
    },

    price: {
        type: Number,
        default: ''
    },

    quantity: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Product', schema);
