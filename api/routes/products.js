const express = require('express');
const  router =  express.Router();

router.get('/',function(req , res , next){

    res.send({'message':'handling GET  requests to  /productes'});


});
router.post('/',function(req , res ){


    res.send({'message':'handling Post  requests to  /productes'});

});
router.get('/:productID',function(req,res,next){
    const  id = req.params.productID;
    if(id === 'code'){
        res.send({'message': 'You  disconvered the   amin id' , id:id });

    }else{

        res.send({'message': 'you passed id'});

    }

});

router.patch('/productID',function(req , res , next){

    res.send({'message': 'update products'});


});

router.delete('/productID',function(req , res , next){


    res.send({'message': 'delete products!'});


});

module.exports = router;