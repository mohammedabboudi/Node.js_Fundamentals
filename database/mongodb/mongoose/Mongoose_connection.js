// REQUIRE THE MODEL :

const User = require('./models/User');

// REQUIRE MONGOOSE AND USE IT :
    
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/my_database');

mongoose.connection.once('open', ()=> console.log(`CONNECTED USING MONGOOSE...`)).on('error', (err)=> console.log(`could not connect to mongodb`, err))


const newUser = new User({

    firstName : 'mohamed',
    lastName : 'abboudi',
    age : 24,
    password : 'qwerty1234456789'

});


newUser.save((err,dataSaved)=>{
    
    if(err) console.log(err);
    console.log(dataSaved);

});