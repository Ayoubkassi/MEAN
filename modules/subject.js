const mongoose = require('mongoose');
const config = require('../config/keys');


//Subject Schema

const SubjectSchema = mongoose.Schema({
    name : {type : String , required : true},
    email : {type : String , required : true},
    sujet : {type : String },
    text : {type : String , required: true},
    date : {type : Date , default : Date.now}
});


const Subject = module.exports = mongoose.model('Subject', SubjectSchema);


