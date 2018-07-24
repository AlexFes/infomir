const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Cart = require('../models/cart');
const Product = require('../models/product');
const Order = require('../models/order');

router.get('/products', async (req, res) => {
    let data = {};
    let cart = new Cart(req.session.cart ? req.session.cart : {});

    data.products = await Product.find({});
    data.cart = cart ? cart.generateArrays() : null;

    res.send(data);
});

router.post('/addProduct/:productId', async (req, res) => {
    let cart = new Cart(req.session.cart ? req.session.cart : {});
    const product = await Product.findById(req.params.productId);

    cart.add(product, product._id, Number(req.body.productValue || 1));
    req.session.cart = cart;

    res.send(cart.generateArrays());
});

router.post('/removeProduct/:productId', (req, res) => {
    let cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(req.params.productId);
    req.session.cart = cart;

    res.send(cart.generateArrays());
});

router.post('/checkout', (req, res, next) => {
    const cart = new Cart(req.session.cart);

    const order = new Order({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        emailAddress: req.body.emailAddress,
        comment: req.body.comment,
        cart: cart
    });

    order.save()
        .then(() => {
            req.session.cart = null;
            res.end();
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;