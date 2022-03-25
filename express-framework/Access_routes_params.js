// accessing route paramitters "placeholders" through params object.

const express = require('express');
const dotenv = require('dotenv').config();
let app = express();
const port = process.env.PORT || 9999;

app.get('/', (req, res)=>{

    res.send('<h1>hellow hellow</h1>');

})

app.get('/api/:id', (req, res)=>{

    // res.send('<h1>this is my api</h1>');

    res.json({
        name: 'mohammed',
        age: 24,
        api_id: req.params.id

        })

})


app.listen(port, ()=>{

    console.log(port);

})