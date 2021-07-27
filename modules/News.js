const mongoose = require('mongoose');
const config = require('../config/keys');


//Subject Schema

const NewsSchema = mongoose.Schema({
    title : {type : String , required : true},
    content : {type : String , required : true  },
    date : {type : Date , default : Date.now},
    image : {type : String }
});


const News = module.exports = mongoose.model('News', NewsSchema);
