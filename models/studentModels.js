
const mongoose = require('mongoose');

const categoryBuild = mongoose.Schema({
    name : String,
    age  : Number,
    skill : String,
    location : String
}, {
    timestamps : true
});
module.exports = mongoose.model('Category', categoryBuild)