let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let schema = new Schema({
    name: String,

    phoneNumber: Number,

    address: String,

    emailAddress: String,

    comment: String,

    cart: {
        type: Object,
        required: true
    }
});

module.exports = mongoose.model('Order', schema);
