let express = require('express');
let Product = require('../models/product');
let mongoose = require('mongoose');
let Cart = require('../models/cart');
//let generateArrays = require('../models/cart');
let router = express.Router();

mongoose.Promise = global.Promise;

router.get('/', (req, res, next) => {
    Product.find((err, products) => {
        let cart = new Cart(req.session.cart ? req.session.cart : {});

        if (!cart) {
            res.render('shop/index', {title: 'Infomir', productsArray: null, products: products});
        }

        res.render('shop/index', {title: 'Infomir', productsArray: cart.generateArrays(), products: products});
    });
});

router.post('/add-to-cart/:id', (req, res, next) => {
    let productId = req.params.id;
    let productQty = req.body.productQty;

    let cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId)
        .then(product => {
            cart.add(product, product._id, Number(productQty));

            req.session.cart = cart;
            console.log(req.session.cart);

            // res.locals.productsArray = cart.generateArrays();

            res.redirect('/#shop');
        });
});

module.exports = router;
