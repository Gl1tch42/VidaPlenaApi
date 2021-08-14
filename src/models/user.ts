const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type:Number,
        default:0
    },
    stars: {
        type: Number
     },
     starsGivenUsers: {
         name: String,
         userId: String
     },
     starsGivenPosts: {
        title: String,
        userId: String
    }
},{timestamp: true});

module.exports = mongoose.model('User', userSchema)