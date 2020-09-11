var express = require('express');
var router = express.Router();
var Category = require('../models/category');

//The routes go into the controllers & the logic for the diffrent CRUD functionalities
router.get('/api/categories', function(req, res, next) {
    Category.find(function(err, categories) {
        if (err) { return next(err); }
        res.json({"categories": categories});
    });
});

// Return the category with the given ID
router.get('/api/categories/:id', function(req, res, next) {
    var id = req.params.id;
    Category.findById(id, function(err, category) {
        if (category == null) {
            return res.status(404).json({"message": "Category not found"});
        }
        if (err) { return next(err); }
        res.json(category);
    });
});

//Create a category
router.post('/api/categories', function(req, res, next) {
    var category = new Category(req.body);
    category.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(category);
    });
});

//Delete category with given ID
router.delete('/api/categories/:id', function(req, res, next) {
    var id = req.params.id;
    Category.findOneAndDelete({_id: id}, function(err, category) {
        if (category == null) {
            return res.status(404).json({"message": "Category not found"});
        }
        if (err) { return next(err); }
        res.status(204).json();
    });
});

//Delete all categories
router.delete('/api/categories', function(req, res, next) {
    Category.deleteMany(function(err, category) {
        if (err) { return next(err); }
        res.status(204).json();
    });
});

// Partially update the category with the given ID
router.patch('/api/categories/:id', function(req, res, next) {
    var id = req.params.id;
    Category.findById(id, function(err, category) {
        if (category == null) {
            return res.status(404).json({"message": "Category not found"});
        }
        if (err) { 
            return next(err); 
        }
        category.name = (req.body.name || category.name);
        category.save();
        res.json(category);
    });
});

module.exports = router;