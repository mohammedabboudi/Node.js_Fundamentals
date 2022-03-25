// middlewares are just functions that takes request and response and next and we call next whenever it wants to move on to the next form of the middleware and in between there we can modify the request qnd the response.

const express = require('express');
const dotenv = require('dotenv').config();
let app = express();
const port = process.env.PORT || 9999;


app.use(logger); // when you creating global actions or middlewares you sould put them at the very top of the page so that they happen before all diffrent controller actions. 

app.get('/', (req, res)=>{
    
    console.log('home url');
    res.send('<h1>hellow hellow</h1>');
})

app.get('/users', auth , (req, res, next)=>{
    
    console.log('users url');
    res.send('<h1>hello users</h1>');
    next();
    
})

// app.use(logger);

function logger(req, res, next){

    console.log('before');
    next();
    console.log('after');

}

// creating middleware to a specific action. 

function auth(req, res, next){

    if (req.query.admin === 'true') {

        console.log('authanticated congratulation...');
        next();
        return;
    }
    res.send('not auth sorry...');

}

app.listen(port);