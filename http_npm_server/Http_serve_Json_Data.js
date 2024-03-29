const https = require('https');
const http = require('http');

const url = 'https://jsonplaceholder.typicode.com/posts';

http.createServer((req, serverRes)=>{

    if (req.method === 'GET' && req.url === '/posts') {
        
        https.get(url, (httpRes)=>{

            httpRes.on('data', data =>{

                httpRes.setEncoding('utf8');
                serverRes.write(data);

            });

            httpRes.on('end', ()=>{

                serverRes.end('everything is done...');
                console.log('everything is done...')

            });
        })
    }else{

        serverRes.writeHead(404, 'no data to reach !!')
        serverRes.end('no data to reach...');
    }

}).listen(4444);

console.log('the server is listening...');