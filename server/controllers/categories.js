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

module.exports = router;