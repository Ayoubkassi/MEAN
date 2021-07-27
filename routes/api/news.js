const express = require('express');

const router = express.Router();

const News = require('../../modules/News');

//@route GET /api/subjects
//@desc get all the subjects
// access public

router.get('/',(req,res,next)=>{
    News.find()
            .sort({date : -1})
            .then(news => res.json(news))
});

router.get('/:id',(req,res)=>{
  News.findById(req.params.id)
  .then(news => res.json(news))
});


router.post('/',(req,res)=>{

	const {title} = req.body;
	const {content} = req.body;
	const {image} = req.body;



	const newNews = new News({
        title : title,
        content : content,
        image : image
    });

	newNews.save().then(
			(news)=> (res.json(news))
		)

});


router.delete('/:id',(req,res)=>{
    News.findById(req.params.id)
    .then(news => news.remove().then(()=> res.json({message : 'News deleted succesfully'})))
    .catch(err => res.status(404).json({success : false}));
});


//Update

router.put('/:id',(req,res)=>{
  //const updNews = req.body;
News.findByIdAndUpdate({_id:req.params.id}, req.body)
.then(news => res.json(news));


});

module.exports = router;
