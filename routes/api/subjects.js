const express = require('express');

const router = express.Router();

//Subject Model

const Subject = require('../../modules/subject');

//@route GET /api/subjects
//@desc get all the subjects
// access public

router.get('/',(req,res)=>{
    Subject.find()
            .sort({date : -1})
            .then(subjects => res.json(subjects))
});

//@route POST /api/subjects
//@desc  Create a new subject
// access public

router.post('/',(req,res)=>{
    const newSubject = new Subject({
        name : req.body.name,
        email : req.body.email,
        sujet : req.body.sujet,
        text : req.body.text
    });
    //this is a promiss
    newSubject.save().then(subject => res.json(subject));
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
