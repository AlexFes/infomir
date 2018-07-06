const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const config = require('../config');
const requireLogin = require('../middlewares/requireLogin');
const User = require('../models/user');

router.get('/:userId', requireLogin, (req, res) => {
    if (req.session.user.name === config.admin) {
        res.render('shop/admin');
    } else {
        res.send('Success!');
    }
});

router.post('/signup', function(req, res) {
    User.findOne({name: req.body.name})
        .then((user) => {
            if (user) {
                res.send('Смените имя пользователя');
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        new User({name: req.body.name, password: hash}).save()
                            .then((usr) => {
                                req.session.user = {
                                    id: usr._id,
                                    name: usr.name
                                };
                                res.redirect(usr._id);
                            })
                            .catch((err) => {
                                console.log(err);
                                return res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
        });
});

router.post('/login', (req, res) => {
    User.findOne({name: req.body.name})
        .then((user) => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(401).json({
                            message: 'Ошибка авторизации'
                        });
                    } else if (result) {
                        req.session.user = {
                            id: user._id,
                            name: user.name
                        };
                        res.redirect(user._id);
                    } else {
                        return res.status(401).json({
                            message: 'Ошибка авторизации'
                        });
                    }
                });
            } else {
                return res.status(401).json({
                    message: 'Ошибка авторизации'
                });
            }
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({
                error: err
            });
        });
});

router.post('/logout', (req, res) => {
     delete req.session.user;

     res.redirect('/');
});

module.exports = router;
