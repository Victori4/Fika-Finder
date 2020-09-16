var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    rating: { type: Number },
    comment: { type: String },
    date: { type: Date },
    cafe: { type: Schema.Types.ObjectId, ref: 'cafe'},
    user: { type: Schema.Types.ObjectId, ref: 'user'}
});

module.exports = mongoose.model('review', reviewSchema);