var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var cafeSchema = new Schema({
    name: { type: String },
    openingHours: { type: String },
    location: { type: String },
    price: { type: Number },
    categories: [{ type: Schema.Types.ObjectId, ref: 'categories'}],
    contact: { 
        email: { type: String},
        website: {type: String},
        phoneNumber: {type: String} 
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'reviews'}],
});

module.exports = mongoose.model('cafes', cafeSchema);