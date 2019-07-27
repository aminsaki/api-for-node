const express = require('express');
const   app  = express();
const morgan = require('morgan');

app.use(morgan('dev'));


const  productRoutrs = require('./api/routes/products');
const  orderRoutrs = require('./api/routes/orders');

app.use('/products',productRoutrs);
app.use('/orders',orderRoutrs);

module.exports = app;