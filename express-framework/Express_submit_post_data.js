const express = require('express');
const bodyParser = require('body-parser');

let app = express();

// GLOBAL VARIABLES :

let body; 


// BODY-PARSER MIDDLEWARE :

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res)=>{

    res.send(`everything is under controll... <a href='/assets'>post some data</a>`)

})



app.post('/post', (req, res)=>{

    body =  req.body;

    if (body) {
        
        res.send(body);

        console.log(body)

    } else {

        res.send(`there is a problem with the body`);
        
    }

})

app.listen(4444);