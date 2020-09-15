var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Elaborate on this schema
var cafeSchema = new Schema({
    name: { type: String },
    openingHours: { type: String },
    location: { type: String },
    price: { type: Number },
    contact: { 
        email: { type: String},
        website: {type: String},
        phoneNumber: {type: String} 
    }
});

module.exports = mongoose.model('cafes', cafeSchema);