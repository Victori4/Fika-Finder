var express = require('express');
var router = express.Router();
var Cafe = require('../models/cafe');

//The routes go into the controllers & the logic for the different CRUD functionalities
router.get('/api/cafes', function(req, res, next) {
    Cafe.find().populate('categories').exec(function(err, cafes) {
       if (err) { return next(err); }
       var filter = req.query.price;
       if (filter) {
           res.json({"cafes" : cafes.filter(function (e) {
               return filter == e.price;
           })});
        } else {
            res.json({"cafes": cafes});
        }
    });
});

// Return the cafe with the given ID
router.get('/api/cafes/:id', function(req, res, next) {
    var id = req.params.id;
    Cafe.findById(id).populate('categories').exec(function(err, cafe) {
        if (cafe == null) {
            return res.status(404).json({"message": "Cafe not found"});
        }
        if (err) { return next(err); }
        res.json(cafe);
    });
});

//Create a cafe
router.post('/api/cafes', function(req, res, next) {
    var cafe = new Cafe(req.body);
    cafe.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(cafe);
    });
});

//Delete cafe with given ID
router.delete('/api/cafes/:id', function(req, res, next) {
    var id = req.params.id;
    Cafe.findOneAndDelete(id, function(err, cafe) {
        if (cafe == null) {
            return res.status(404).json({"message": "Cafe not found"});
        }
        if (err) { return next(err); }
        res.status(204).json();
    });
});

//Delete all cafes
router.delete('/api/cafes', function(req, res, next) {
    Cafe.deleteMany(function(err, cafe) {
        if (err) { return next(err); }
        res.status(204).json();
    });
});

// Partially update the cafe with the given ID
router.patch('/api/cafes/:id', function(req, res, next) {
    var id = req.params.id;
    Cafe.findById(id, function(err, cafe) {
        if (cafe == null) {
            return res.status(404).json({"message": "Cafe not found"});
        }
        if (err) { 
            return next(err); 
        }
        cafe.name = (req.body.name || cafe.name);
        cafe.openingHours = (req.body.openingHours || cafe.openingHours);
        cafe.location = (req.body.location  || cafe.location);
        cafe.price = (req.body.price  || cafe.price);
        cafe.contact = (req.body.contact  || cafe.contact);
        cafe.save();
        res.json(cafe);
    });
});

//Updates all the fields in cafe
router.put('/api/cafes/:id', function(req, res, next) {
    var id = req.params.id;
    Cafe.findById(id, function(err, cafe) {
        if (cafe == null) {
            return res.status(404).json({"message": "Cafe not found."});
        }
        if (err) { return next(err); }
        cafe.name = req.body.name;
        cafe.openingHours = req.body.openingHours;
        cafe.location = req.body.location;
        cafe.price = req.body.price;
        cafe.contact = req.body.contact;
        cafe.save();
        res.json(cafe);
    });
});

module.exports = router;