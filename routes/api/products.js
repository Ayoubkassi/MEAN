const express = require('express');


const router = express.Router();


//thi is our model
const Product = require ('../../modules/Product');



//simple get request -> get all our products

//with access public 

router.get('/',(req,res,next)=>{
    Product.find()
            .sort({date : 1})
            .then(products => res.json(products))
});


router.post('/',(req,res)=>{

	const {name} = req.body;
	const {price} = req.body;
	const {image} = req.body;



	const newProduct = new Product({
        name : name,
        price : price,
        image : image
    });

	newProduct.save().then(
			(product)=> (res.json(product))
		)

});


module.exports = router;
