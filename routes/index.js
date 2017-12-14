let express = require('express');
let Product = require('../models/product');
let mongoose = require('mongoose');
let Cart = require('../models/cart');
let router = express.Router();

mongoose.Promise = global.Promise;

router.get('/', (req, res, next) => {
    Product.find((err, products) => {
        res.locals.products = products;

        res.render('shop/index', { title: 'Infomir' });
    });
});

router.post('/add-to-cart/:id', (req, res, next) => {
    let productId = req.params.id;
    let productQty = req.body.productQty;

    console.log(productQty);

    let cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId)
        .then(product => {
            cart.add(product, product._id, Number(productQty));

            req.session.cart = cart;
            console.log(req.session.cart);

            res.redirect('/');
        });
});

module.exports = router;

    // Product.findById(productId, (err, product) => {
    //     if (err) {
    //        return res.redirect('/');
    //     }
    //
    //     cart.add(product, product._id);
    //
    //     req.session.cart = cart;
    //     console.log(req.session.cart);
    //
    //     res.redirect('/');
    // });
