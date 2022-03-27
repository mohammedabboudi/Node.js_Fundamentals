// Middlewares are just functions that takes request and response and next and we call next whenever it wants to move on to the next form of the middleware and in between there we can modify the request qnd the response objects.
// There is 5 types of middleware.



const express = require('express');
const res = require('express/lib/response');
const dotenv = require('dotenv').config();
let app = express();
const port = process.env.PORT || 9999;

//EXMPLE 1 :

// app.use(logger); // when you creating global actions or middlewares you sould put them at the very top of the page so that they happen before all diffrent controller actions. 

// app.get('/', (req, res)=>{
    
//     console.log('home url');
//     res.send('<h1>hellow hellow</h1>');
// })

// app.get('/users', auth , (req, res, next)=>{
    
//     console.log('users url');
//     res.send('<h1>hello users</h1>');
//     next();
    
// })

// app.use(logger);

// function logger(req, res, next){

//     console.log('before');
//     next();
//     console.log('after');

// }

// creating middleware to a specific action. 

// function auth(req, res, next){

//     if (req.query.admin === 'true') {

//         console.log('authanticated congratulation...');
//         next();
//         return;
//     }
//     res.send('not auth sorry...');

// }


//EXMPLE 2 :

app.use('/css', express.static('./public'));

app.get('/', (req,res)=>{

    res.send(`
    

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Served File</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    
    <h1>hello this is the serving file.</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni error expedita, fuga consequuntur repellendus soluta nemo temporibus, quidem quisquam eius nulla ipsam praesentium sint fugiat perspiciatis dolores debitis neque vero.</p>

</body>
</html>
    

    `);
})

app.listen(port);