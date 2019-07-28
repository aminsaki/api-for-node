const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));


const productRoutrs = require('./api/routes/products');
const orderRoutrs = require('./api/routes/orders');

app.use('/products', productRoutrs);
app.use('/orders', orderRoutrs);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status();
    res.status(404).send({error: {message: error.message}})
    next(error);
});
app.use((error, req, res, next) => {
    res.status(500).send({error: {message: error.message}})
});


module.exports = app;