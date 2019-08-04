const express = require('express');
const router = express.Router();
const Product = require('../../models/product');
const mongoose = require('mongoose');

//
router.get('/', (req, res, next) => {
    Product.find().exec()
        .then(result =>{
            console.log(result);
            if(result.length >= 0){
                res.send({"status":result});

            }else{
                res.send({"status":'No entries found'});
            }

        }).catch(err=>{ console.log(err)});

});
router.post('/', (req, res) => {
    const product = new Product({_id: new mongoose.Types.ObjectId, name: req.body.name, price: req.body.price });
    product.save()
        .then(result => {console.log(result);})
        .catch(err => console.log(err));
    res.send({'message': 'handling Post  requests to  /productes', createdPordcut: product});

});
router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    Product.findById(id) .exec()
        .then(result => {
            console.log(result);
            if (result) {
                res.send({'message': 'You  disconvered the   amin id', result});
            } else {
                res.send({'message': 'No valid entry found for provided  ID'})
            }
        })
        .catch(err => console.log(err));

});

router.patch('/:productID', function (req, res, next) {
    const id = req.params.productID;
    const  updateOps ={ name: req.body.name, price: req.body.price };

    Product.update({_id: id},{$set:updateOps})
        .exec()
        .then(result =>{
            console.log(result);
              res.send({'message':result});
        })
        .catch(err => console.log(err));

});

router.delete('/:productID', function (req, res, next) {

    const id = req.params.productID;
    Product.remove({_id: id}) .exec()
        .then(result => {
                res.send({'message': 'delete products!', result});

        })
        .catch(err => console.log(err));



});

module.exports = router;