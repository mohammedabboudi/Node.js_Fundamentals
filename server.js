const express = require('express');
const dotenv = require('dotenv').config();
const  app = express();
const userRouter = require('./app/api/routes/User');

const port = process.env.PORT;

app.use('/user', userRouter)

app.listen(port, ()=>{ console.log(port)});



// ...
