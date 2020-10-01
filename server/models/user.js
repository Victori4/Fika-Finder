var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Elaborate on this schema
var userSchema = new Schema({
    username: { type: String},
    email: { type: String },
    password: { type: String }
});

module.exports = mongoose.model('users', userSchema);