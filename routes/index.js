let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Cart = require('../models/cart');
let Product = require('../models/product');
let Order = require('../models/order');

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
    let productQty = req.body.productQty || 1;

    let cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId)
        .then(product => {
            cart.add(product, product._id, Number(productQty));

            req.session.cart = cart;
            console.log(req.session.cart);

            res.send(cart);
        });
});

router.post('/add-support', (req, res, next) => {
    let productId = req.body.radio;

    let cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId)
        .then(product => {
            cart.add(product, product._id, 1);

            req.session.cart = cart;

            cart.currentSupportId = product._id;
            console.log(req.session.cart);

            res.send(cart);
        });
});

router.post('/checkout', (req, res, next) => {
    let cart = new Cart(req.session.cart);

    let order = new Order({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        emailAddress: req.body.emailAddress,
        comment: req.body.comment,
        cart: cart
    });

    order.save((err, result) => {
       req.session.cart = null;
       res.redirect('back');
    });
});

router.post('/remove/:id', (req, res, next) => {
    let productId = req.params.id;

    let cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;

    res.send(cart);
});

module.exports = router;
