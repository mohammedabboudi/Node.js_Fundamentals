const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const userRouter = require('./app/api/routes/User');

const  app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

app.use('/user', userRouter)

app.listen(port, ()=>{ 

    console.log(port);

});