// REQUIRE MONGOOSE AND USE IT :
    
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/my_database');

mongoose.connection.once('open', ()=> console.log(`CONNECTED USING MONGOOSE...`)).on('error', (err)=> console.log(`could not connect to mongodb`, err))