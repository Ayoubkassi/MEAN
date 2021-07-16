const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const subjects = require('./routes/api/subjects');

const app = express();

app.use(cors());

app.use(bodyParser.json());

//config database

const db = require('./config/keys').mongoURI;

//connect to smarden database

mongoose.connect(db).then(()=>{
    console.log('MongoDB Connected');
}).catch((err)=>{
    console.log(err);
});


//use routes

app.use('/api/subjects',subjects);

const port = process.env.PORT || 5000;

//start our server

app.listen(port,()=> console.log(`server started in port : ${port}`));

