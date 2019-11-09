const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    username:String,
    password:String,
    userphoto:String,
    userpower:Boolean
})


module.exports = userschema