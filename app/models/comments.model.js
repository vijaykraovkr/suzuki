const mongoose = require('mongoose');

const CommenetSchema = mongoose.Schema({
    email: String,
    name: String,
    location: String,
    comment: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Comments', CommenetSchema);