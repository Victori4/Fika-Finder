var express = require('express');
var router = express.Router();
var User = require('../models/user');


//The routes go into the controllers & the logic for the diffrent CRUD functionalities
router.get('/api/users', function(req, res, next) {
    User.find(function(err, users) {
        if (err) { return next(err); }
        res.json({"users": users});
    });
});


// Return the user with the given ID
router.get('/api/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findById(id, function(err, user) {
        if (user == null) {
            return res.status(404).json({"message": "User not found"});
        }
        if (err) { return next(err); }
        res.json(user);
    });
});


//Create a user
router.post('/api/users', function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(user);
    });
});


//Delete user with given ID
router.delete('/api/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findOneAndDelete({_id: id}, function(err, user) {
        if (category == null) {
            return res.status(404).json({"message": "User not found"});
        }
        if (err) { return next(err); }
        res.status(204).json();
    });
});


//Delete all users
router.delete('/api/users', function(req, res, next) {
    User.deleteMany(function(err, user) {
        if (err) { return next(err); }
        res.status(204).json();
    });
});


// Update the user with the given ID
router.put('/api/users/:id', function(req, res, next) {
    var id = req.params.id;
    User.findById(id, function(err, user) {
        if (user == null) {
            return res.status(404).json({"message": "User not found."});
        }
        if (err) { return next(err); }
        user.email = req.body.email;
        user.password = req.body.password;
        user.save();
        res.json(user);
    });
});

module.exports = router;