let Product = require('../models/product');
let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping', {useMongoClient: true});

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
    }),

    new Product({
        title: 'Поддержка',
        description: 'для дошкольных образовательных учреждений',
        price: 8000,
        quantity: 5
    }),

    new Product({
        title: 'Поддержка',
        description: 'для организаторов платных курсов',
        price: 28000,
        quantity: 5
    }),

    new Product({
        title: 'Вертун',
        price: 799,
        quantity: 5
    })
];

products.reduce((p, product)=> {
    return p.then(() => product.save());
}, Promise.resolve())
.then(() => {
    mongoose.disconnect();
});
