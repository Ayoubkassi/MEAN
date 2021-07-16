const express = require('express');
const nodemailer = require('nodemailer');



const router = express.Router();

//Subject Model

const Subject = require('../../modules/subject');

//@route GET /api/subjects
//@desc get all the subjects
// access public

router.get('/',(req,res,next)=>{
    Subject.find()
            .sort({date : -1})
            .then(subjects => res.json(subjects))
});

//@route POST /api/subjects
//@desc  Create a new subject
// access public

router.post('/', async (req,res)=>{

    const {name} = req.body;
    const {email} = req.body;
    const {sujet} = req.body;
    const {text} = req.body;

    const newSubject = new Subject({
        name : req.body.name,
        email : req.body.email,
        sujet : req.body.sujet,
        text : req.body.text
    });
    //this is a promiss

    //start of mail

   let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'derick.homenick@ethereal.email', // generated ethereal user
      pass: '8SSuMas7TjHZ5Pnur3', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Smarden Company', // sender address
    to: `${email}`, // list of receivers
    subject: `${sujet}`, // Subject line
    text: `${text}` , // plain text body
    //html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  

    newSubject.save()
              .then(subject => res.json(subject));


    //end of mail



});


//@route del /api/subjects
//@desc delete a specific subject
// access public

router.delete('/:id',(req,res)=>{
    Subject.findById(req.params.id)
    .then(subject => subject.remove().then(()=> res.json({message : 'Subject deleted succesfully'})))
    .catch(err => res.status(404).json({success : false}));
});




module.exports = router;
