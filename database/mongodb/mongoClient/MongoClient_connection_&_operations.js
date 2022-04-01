// REQUIRE MONGOCLIENT AND USE IT :

const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/animals', (err, client) => {
    if (err) throw err;

    console.log(`YOU'RE CONNECTED WITH YOUR MONGODB DATABASE...`);

    const db = client.db('animals');

    // INSERT INTO THE DATABASE :

    db.collection('mammals').insertOne({

      name:'dog',
      age:5,
      status: 'vaccinated',
      owner: 'mohammed'
    }, (err, result)=>{

      if(err) console.log(err);
      console.log('inserted successfuly.');

    })

    // FIND OPERATION IN DATABASE :

     db.collection('mammals').find().toArray((err, result) => {
          if (err) throw err
      
          console.log(result)
        })

    // UPDATE OPERATION IN DATABASE :
    
    db.collection('mammals').findOneAndUpdate({

      _id: ObjectId('6246d78476dc0e134b2147ad')

    },{

      $set: { age : 11 }

    })
    

  

    })
    
    