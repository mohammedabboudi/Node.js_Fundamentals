// REQUIRE MONGOOSE AND USE IT :
    
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({

    firstName: {

        type: String,
        required: true,
        trim: true,
        minLength: 5

    },
    lastName: {

        type: String,
        required: true,
        trim: true,
        minLength: 5


    },
    age: {

        type: Number,
        required: true,
        trim: true,
        maxLength: 2


    },
    password: {

        type: String,
        required: true,
        trim: true,
        minLength: 10


    }
})


module.exports = mongoose.model('users', userSchema );