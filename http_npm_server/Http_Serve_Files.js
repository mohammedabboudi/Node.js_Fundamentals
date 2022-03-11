const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{

    if (req.url === '/') {

        fs.readFile('./public/global.html', 'utf-8', (error, data)=>{

            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(data);
        })
        
    } else {

        res.writeHead(404, {'Content-Type':'text/plain'})
            res.end("404 ERROR COULD NOT FIND YOUR DATA.");
    }

}).listen(3333)