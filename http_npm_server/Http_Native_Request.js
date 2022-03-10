const https = require('https');
const fs = require('fs');

let url ='https://jsonplaceholder.typicode.com/posts';

https.get(url, res =>{

    res.setEncoding('utf-8');

    let body_data1 = '';

    res.on('data', data =>{

        body_data1 += data;

        console.log(typeof body_data1);
    })

    res.on('end', ()=>{

        
        body_data2 = JSON.parse(body_data1);

        console.log(body_data1);

        fs.writeFile('./http_npm_server/data.json', body_data1, 'utf-8', (err)=>{

            console.log('hellew');

        })
    })
})