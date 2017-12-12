let Product = require('../models/product');
let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping', {useMongoClient: true});

let done = 0;

let products = [
    new Product({
        title: 'Образовательный набор',
        description: '1'
    }),

    new Product({
        title: 'Робототехнический набор 1',
        description: '2'
    }),

    new Product({
        title: 'Робототехнический набор 2',
        description: '3'
    }),

    new Product({
        title: 'Робототехнический набор 3',
        description: '4'
    })
];

for (let i = 0; i < products.length; ++i) {
    products[i].save(function(err, result) {
        ++done;

        if (done === products.length) {
            mongoose.disconnect();
        }
    });
}



