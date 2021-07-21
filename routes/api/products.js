const express = require('express');


const router = express.Router();


//thi is our model
const Product = require ('../../modules/Product');

//get one id
const idFilter = req => product => product.id === parseInt(req.params.id);




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

router.delete('/:id',(req,res)=>{
    Product.findById(req.params.id)
    .then(product => product.remove().then(()=> res.json({message : 'Product deleted succesfully'})))
    .catch(err => res.status(404).json({success : false}));
});


//Update

router.put('/:id',(req,res)=>{
  //const updProduct = req.body;
Product.findByIdAndUpdate({_id:req.params.id}, req.body)
.then(product => res.json(product));


});


module.exports = router;
