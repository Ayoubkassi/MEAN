const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const config = require('../../config/keys');
const User = require('../../modules/User');


//this is fro admin registration


// Register
router.post('/register', (req, res, next) => {
  let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});



// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});





//thi is our model
const Product = require ('../../modules/Product');

//get one id
//const idFilter = req => product => product.id === parseInt(req.params.id);

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});



//simple get request -> get all our products

//with access public


router.get('/', passport.authenticate('jwt', {session:false}),(req,res,next)=>{
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
