const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();

module.exports.model = mongoose.connect(config.mongoURI, { useMongoClient: true })
    .then((mongooseConnection) => {
        const gridfs = require('mongoose-gridfs')({
            collection: 'files',
            model: 'File',
            mongooseConnection
        });

        return gridfs.model;
    });

const store = require('./routes/store');
const admin = require('./routes/admin');
const newsfeed = require('./routes/newsfeed');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'mysupersecret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection}),
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

app.use('/admin', admin);
app.use('/newsfeed', newsfeed);
app.use('/store', store);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
// else {
//     app.use(express.static('client/public'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
//     });
// }

app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
