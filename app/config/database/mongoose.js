// REQUIRE THE MODEL :

// REQUIRE MONGOOSE AND USE IT :
    
const mongoose = require('mongoose');

// CONNECTION :
 
const connection = mongoose.connect('mongodb://localhost/my_database');

// CONNECTION TEST :

mongoose.connection.once('open', ()=> console.log(`CONNECTED USING MONGOOSE...`)).on('error', (err)=> console.log(`could not connect to mongodb`, err));

module.exports = connection;