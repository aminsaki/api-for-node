const express = require('express');
const  router =  express.Router();

router.get('/',(req , res , next)=>{

    res.status(200).json({
        message:"handling GET  requests to  /orders"
    });

});
router.post('/',(req , res , next)=>{

    res.status(200).json({
        message:"handling Post  requests to  /orders"
    });

});
router.get('/:orderID',(req,res,next)=>{
    const  id = req.params.orderID;
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

router.patch('/:orderID',(req , res , next)=>{

    res.status(200).json({
        message:"update order"
    });

});

router.delete('/:orderID',(req , res , next)=>{

    res.status(200).json({
        message:"delete order!"
    });

});

module.exports = router;