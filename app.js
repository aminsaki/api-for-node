const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog',{ useNewUrlParser: true } );

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
       res.header("Access-Control-Allow-Oringi","*");
       res.header(
           "Access-Control-Allow-Headers",
           "Origin, X-Requested-with, Content-type,Accept , AUthorization ");

        if(req.method === "OPTIONS"){
            res.header("Access-Control-Allow-Methods","put,post,patch,delete"
            )
            return res.status(200).json({});

    }
        next();
});



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