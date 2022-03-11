const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{

    let body = '';

    if (req.method === 'GET') {

        res.writeHead(200, {'Content-Type':'text/html'});

        fs.readFile('./public/http-form.html', 'utf-8', (error, data) =>{

            if (error) {
                console.log(error);   
            }
            res.write(data);
            res.end();
            // res.end(data);  <= or use this directly.
            
            console.log('the form file has been served successfully...');
        })
        
    } else if(req.method === 'POST' && req.url === '/register'){

        req.on('data', (data)=>{
            
            body += data;

        })

        req.on('end', ()=>{

            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(body, ()=>{
            res.end();
            })
        })
        
    }else{

        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end('404 ERROR COULD NOT FIND THAT PAGE...')
    }

  
}).listen(4444);

console.log('everything is working good...');