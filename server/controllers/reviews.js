var express = require('express');
const cafe = require('../models/cafe');
var router = express.Router();
var Review = require('../models/review');
var Cafe = require('../models/cafe');
const review = require('../models/review');

//Should this be in controllers/reviews or controllers/cafes
router.post('/api/cafes/:cafe_id/review', function(req, res, next) {
    var cafe_id = req.params.cafe_id;
});

router.get('/api/cafes/:cafe_id/review', function(req, res, next) {
    var cafe_id = req.params.cafe_id;

    Cafe.findById(cafe_id).populate('reviews').exec(function(err, cafe) {
        if (err) { return next(err); }
        res.json({"reviews" : cafe.reviews});
    });
});

router.get('/api/cafes/:cafe_id/review/:review_id', function(req, res, next) {
    var cafe_id = req.params.cafe_id;
    var review_id = req.params.review_id;

    //How do we get the reviews for a specific cafe in this case
    //Should this be Cafe instead of Review & then filter based on the review_id
    Review.findById(review_id).populate('cafe').exec(function(err, review) {
        if (err) { return next(err); }
        res.json(review);
    });
});

router.delete('/api/cafes/:cafe_id/review/:review_id', function(req, res, next) {
    var cafe_id = req.params.cafe_id;
    var review_id = req.params.review_id;


});

module.exports = router;