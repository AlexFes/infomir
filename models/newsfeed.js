const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    },

    file: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('news', newsSchema);