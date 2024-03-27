const express = require('express');
const cartRouter = express.Router();


const apiPrefix = '/api';


/* GET carts page. */
cartRouter.get('/', function(req, res, next) {
    console.log('Rendering cart.ejs');
    res.render('cart');
   
});

module.exports = cartRouter;
