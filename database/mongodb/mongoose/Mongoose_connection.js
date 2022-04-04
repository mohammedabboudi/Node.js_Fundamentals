// REQUIRE THE MODEL :

// const User = require('./models/User');
const User = require('./models/User_schema_object');

// REQUIRE MONGOOSE AND USE IT :
    
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/my_database');

mongoose.connection.once('open', ()=> console.log(`CONNECTED USING MONGOOSE...`)).on('error', (err)=> console.log(`could not connect to mongodb`, err))


const newUser = new User({

    firstName : 'vasvamon',
    lastName : 'kouski',
    age : 30,
    password : '123456789qwertyuio'

});


newUser.save((err,dataSaved)=>{
    
    if(err) console.log(err);
    console.log(dataSaved);

});