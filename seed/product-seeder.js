let Product = require('../models/product');
let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping', {useMongoClient: true});

let done = 0;

let products = [
    new Product({
        title: 'Образовательный набор',
        quantity: 5
    }),

    new Product({
        title: 'Робототехнический набор №1',
        description: 'LEGO Mindstorms EV3 31313',
        price: 14000,
        quantity: 5
    }),

    new Product({
        title: 'Робототехнический набор №2',
        description: 'LEGO Mindstorms Education EV3',
        price: 13000,
        quantity: 5
    }),

    new Product({
        title: 'Робототехнический набор №3',
        description: 'Обучаюший робот ПиктоМир',
        quantity: 5
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
