var express = require('express');
var router = express.Router();
var Review = require('../models/review');
var Cafe = require('../models/cafe');

//Should this be in controllers/reviews or controllers/cafes
//Creates a review for a cafe
router.post('/api/cafes/:cafe_id/reviews', function(req, res, next) {
    var cafe_id = req.params.cafe_id;
    var review = new Review(req.body);
    
    Cafe.findById(cafe_id, function(err, cafe) {
        if (cafe == null) {
            return res.status(404).json({"message": "Cafe not found"});
        }
        if (err) { return next(err); }

        review.cafe = cafe._id;
        cafe.reviews.push(review);
        cafe.save();
    });

    review.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(review);
    });
});

//Returns a list of reviews for a cafe
router.get('/api/cafes/:cafe_id/reviews', function(req, res, next) {
    var cafe_id = req.params.cafe_id;

    Cafe.findById(cafe_id).populate('reviews').exec(function(err, cafe) {
        if (cafe == null) {
            return res.status(404).json({"message": "Cafe not found"});
        }
        if (err) { return next(err); }

        res.json({"reviews" : cafe.reviews});
    });
});

//Returns a review for a cafe
router.get('/api/cafes/:cafe_id/reviews/:review_id', function(req, res, next) {
    var review_id = req.params.review_id;

    //Should this be Cafe instead of Review & then filter based on the review_id
    Review.findById(review_id).populate('cafe').exec(function(err, review) {
        if (review == null) {
            return res.status(404).json({"message": "Review not found"});
        }
        if (err) { return next(err); }

        res.json(review);
    });
});

//Deletes a review for a cafe
router.delete('/api/cafes/:cafe_id/reviews/:review_id', function(req, res, next) {
    var cafe_id = req.params.cafe_id;
    var review_id = req.params.review_id;

    Review.findOneAndDelete(review_id, function(err, review) {
        if (review == null) {
            return res.status(404).json({"message": "Review not found"});
        }
        if (err) { return next(err); }

        Cafe.findById(cafe_id, function(err, cafe) {
            if (cafe == null) {
                return res.status(404).json({"message": "Cafe not found"});
            }
            if (err) { return next(err); }

            cafe.reviews.remove(review_id); //Delete reference to the review
            cafe.save();
        });

        res.status(204).json();
    });
});

//Deletes all reviews (ONLY FOR TESTING)
router.delete('/api/reviews', function(req, res, next) {
    Review.deleteMany(function(err, review) {
        if (err) { return next(err); }
        res.status(204).json();
    });
});

module.exports = router;