var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Elaborate on this schema
var categorySchema = new Schema({
    name: { type: String }
});

module.exports = mongoose.model('categories', categorySchema);