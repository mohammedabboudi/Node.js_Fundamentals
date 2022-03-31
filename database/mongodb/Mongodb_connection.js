const MongoClient = require('mongodb').MongoClient

// require mongoose and use it :

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// MongoClient.connect('mongodb://localhost:27017/animals', (err, db) => {
//   if (err) throw err

// //   db.collection('mammals').find().toArray((err, result) => {
// //     if (err) throw err

// //     console.log(result)
// //   })

//     console.log(`YOU'RE CONNECTED WITH YOUR MONGODB DATABASE...`)

// })



mongoose.connect('mongodb://localhost/my_database');

mongoose.connection.once('open', ()=> console.log(`CONNECTED USING MONGOOSE...`)).on('error', (err)=> console.log(`could not connect to mongodb`, err))