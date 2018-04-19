let Product = require('../models/product');
let mongoose = require('mongoose');

let saveProducts = [];

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping', {useMongoClient: true});

let products = [
    new Product({
        title: 'Образовательный набор',
        price: 38500
    }),

    new Product({
        title: 'Дополнительный комплект для 25 обучаемых',
        price: 1800
    }),

    new Product({
        title: 'Поддержка для дошкольных образовательных учреждений',
        price: 8000
    }),

    new Product({
        title: 'Поддержка для организаторов платных курсов',
        price: 28000
    }),

    new Product({
        title: 'Вертун',
        price: 1000
    })
];

for (let product of products) {
    saveProducts.push(product.save());
}

Promise.all(saveProducts)
    .then(() => {
        mongoose.disconnect();
    });

