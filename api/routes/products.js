const express = require('express');
const  router =  express.Router();

router.get('/',(req , res , next)=>{

     res.status(200).json({
         message:"handling GET  requests to  /productes"
     });

});
router.post('/',(req , res , next)=>{

    res.status(200).json({
        message:"handling Post  requests to  /productes"
    });

});
router.get('/:productID',(req,res,next)=>{
    const  id = req.params.productID;
    if(id === 'code'){
        res.status(200).json({
            message:"You  disconvered the   amin id",
            id : id
        });

    }else{
        res.status(200).json({
           message:"you passed id"
        });
    }

});

router.patch('/productID',(req , res , next)=>{

    res.status(200).json({
        message:"update products"
    });

});

router.delete('/productID',(req , res , next)=>{

    res.status(200).json({
        message:"delete products!"
    });

});

module.exports = router;