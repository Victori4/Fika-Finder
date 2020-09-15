var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Elaborate on this schema
var cafeSchema = new Schema({
    name: { type: String },
    openingHours: { type: String },
    offerAlternatives: { type: String },
    location: { type: String },
    price: { type: Number },
    contact: { email: String,
               website: String,
               phoneNumber: Number }
});

module.exports = mongoose.model('cafes', cafeSchema);