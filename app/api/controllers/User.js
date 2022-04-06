const database = require('../../config/database/mongoose');
const User = require('../models/User');
const userRouter = require('../routes/User');
// const express = require('express');



exports.user_list = function(req, res) {

    res.send(`<h1>HELLO FROM THE USERS LIST PAGE...</h>`);
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

    res.send(`<h1>HELLO FROM THE EDIT USERS PAGE...</h>`)

}

exports.users_delete = (req, res)=>{

    res.send(`<h1>HELLO FROM THE DELETE USERS PAGE...</h>`)

}


