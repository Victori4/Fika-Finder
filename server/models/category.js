var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: { type: String },
    description: { type: String }
});

module.exports = mongoose.model('categories', categorySchema);