const { json } = require('express/lib/response');
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
    console.log(req.body.firstName);

    let userCredentials = {

        firstName : req.body.firstName,
        lastName : req.body.lastName,
        age : req.body.age,
        password : req.body.password
    
    }

    // console.log(userCredentials.firstname)


    const newUser = new User(userCredentials);
    
    
    newUser.save((err,dataSaved)=>{
        
        if(err) {

            res.send(`YOU CANNOT REGISTER THE USER BECAUSE OF THE ERROR : ${err}`);

        }else{
            
            res.send(`THE USER HAS BEEN REGESTRED SUCCESSFULY : ${dataSaved}`);
    }
        
    
    });

    // res.json({
    //     message: "Hello"
    // })

}

exports.users_patch = (req, res)=>{

    const id = req.params.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const password = req.body.password;

    User.findByIdAndUpdate({_id : id}, {$set : {firstName: firstName , lastName: lastName , age: age , password: password}}, {new: true}).then( dataSaved =>{

        res.send(`the user is updated using patch method ${dataSaved}`)
        console.log(`the user credentials are updated using patch method...`)
    })

}


// exports.users_put = (req, res)=>{

//     const id = req.params.id;
//     const firstName = req.body.firstName;
//     // const lastName = req.body.lastName;
//     // const age = req.body.age;
//     // const password = req.body.password;

//     User.findByIdAndUpdate({_id : id}, {$set : {firstName: firstName , lastName: lastName , age: age , password: password}}, {new: true}).then( dataSaved =>{

//         res.send(`the user is updated using put method ${dataSaved}}}`)
//         console.log(`the user credentials are updated using put method...`)
//     })

// }


// ANOTHER EASY WAY TO PUT DATA :

exports.users_put = (req, res)=>{

    User.findOne({_id : req.params.id}).then(User=>{

    User.firstName = req.body.firstName;
    // User.lastName = req.body.lastName;
    // User.age = req.body.age;
    // User.password = req.body.password;

    User.save().then( dataSaved =>{
        res.send(`the user is updated using put method ${dataSaved}}}`)
        console.log(`the user credentials are updated using put method...`)
    }).catch(err =>{
        console.log(err);
    })

    })

}


exports.users_delete = (req, res)=>{

    res.send(`<h1>HELLO FROM THE DELETE USERS PAGE...</h>`)

}


