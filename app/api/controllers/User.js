const database = require('../../config/database/mongoose');
const User = require('../models/User');


exports.user_list = function(req, res) {

    User.find({}).then(users =>{

        res.send(users)

    }).catch(err =>{

        res.send(err);
    })
};

exports.users_create = (req, res)=>{
    console.log(req.body.firstname);

    let userCredentials = {

        firstName : req.body.firstname,
        lastName : req.body.lastname,
        age : req.body.age,
        password : req.body.password
    
    }

    // console.log(userCredentials.firstname)


    const newUser = new User(userCredentials);
    
    
    newUser.save((err,dataSaved)=>{
        
        if(err) res.send(`YOU CANNOT REGISTER THE USER BECAUSE OF THE ERROR : ${err}`);
        res.send(`THE USER HAS BEEN REGESTRED SUCCESSFULY : ${dataSaved}`);
    
    });

    // res.json({
    //     message: "Hello"
    // })

}

exports.users_edit = (req, res)=>{

    const id = req.params.id;
    const age = req.body.age;

    User.findByIdAndUpdate({_id : id}, {$set : {age : age}}, {new: true}).then( dataSaved =>{

        res.send(`the user is updated ${id} and ${age}`)
        console.log(`the user credentials are updated...`)
    })

}

exports.users_delete = (req, res)=>{

    res.send(`<h1>HELLO FROM THE DELETE USERS PAGE...</h>`)

}


