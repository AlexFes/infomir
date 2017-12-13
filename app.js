let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let expressHbs = require('express-handlebars');
let mongoose = require('mongoose');

let session = require('express-session');
let MongoStore = require('connect-mongo')(session);

let index = require('./routes/index');
let users = require('./routes/users');

let app = express();

mongoose.connect('mongodb://localhost:27017/shopping', {useMongoClient: true});

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'mysupersecret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection}),          //to use already existing connection
    cookie: { maxAge: 180 * 60 * 1000 }                                         //expiration time for session in milliseconds
}));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
   res.locals.session = req.session;
   next();
});
app.use('/', index);
app.use('/users', users);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
