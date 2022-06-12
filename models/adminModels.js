
const mongoose = require('mongoose');

const adminModel = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name fields must be filed up"]
    },
    email : {
        type : String,
        required : [true, "Email must filed up"],
        unique : true,
        lowercase : true
    },
    username : {
        type : String,
        required : [true, "Username must filed up"],
        unique : true,
        lowercase : true,
        minLength : 5,
        maxLength : 10
    },
    cell : {
        type : String,
        required : [true, "Cell must filed up"],
        unique : true,
    },
    skill : {
        type : String,
        required : false,
        default : "MERN Stack"
    },
    location : {
        type : String,
        required : false,
        default : "Dhaka"  
    },
    password : {
        type : String
    }

}, {
    timestamps : true
})


// module export adminModel
module.exports = mongoose.model('Admins', adminModel);