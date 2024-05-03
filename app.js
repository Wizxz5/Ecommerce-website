
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fetch = require('node-fetch');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cartRouter = require('./routes/cart');
let productRouter = require('./routes/productdetails');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.get('/', async (req, res, next) => {
try {
  // Fetch data from the Fake Store API
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();

  // Render the index view and pass the products to it
  res.render('index', { title: 'Product List', appName: 'Sticky rice', products });
}catch (error) {
  next(error); // Pass the error to the error handler
}

});
// hi 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/cart', cartRouter);
app.use('/', productRouter);



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
