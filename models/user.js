let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    //
    // email: {
    //     type: String,
    //     required: true,
    //     match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // },

    password: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', schema);