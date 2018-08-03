const express = require('express');
const router = express.Router();

const requireLogin = require('../middlewares/requireLogin');
const credentials = require('../config');

router.post('/loginPost', (req, res) => {
    if (req.body.username === credentials.admin && req.body.password === credentials.password) {
        req.session.admin = true;

        req.session.save(() => {
            res.redirect('/admin');
        });
    } else {
        res.status(401).json({ error:  'Неверное имя пользователя или пароль' });
    }
});

router.post('/checkAuth', (req, res) => {
    res.send(req.session.admin);
});

module.exports = router;