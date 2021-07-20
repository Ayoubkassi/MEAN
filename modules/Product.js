const mongoose = require('mongoose');
const config = require('../config/keys');


//Subject Schema

const ProductSchema = mongoose.Schema({
    image : {type : String , required : true},
    price : {type : String  },
    name : {type : String , required : true},
    date : {type : Date , default : Date.now}
});


const Product = module.exports = mongoose.model('Product', ProductSchema);


