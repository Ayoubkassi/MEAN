const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const passport = require('passport');
const cors = require('cors');

const subjects = require('./routes/api/subjects');
const products = require('./routes/api/products');
const news     = require('./routes/api/news');

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

/*const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("MongoDB Conected")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();

*/


//use routes

app.use('/api/subjects',subjects);
app.use('/api/products',products);
app.use('/api/news',news);


//static path

app.use(express.static(__dirname+/"/client/dist"))
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


const port = process.env.PORT || 5000;

//start our server

app.listen(port,()=> console.log(`server started in port : ${port}`));
