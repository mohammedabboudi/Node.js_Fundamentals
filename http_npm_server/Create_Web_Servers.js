const http = require('http');

const server = http.createServer((req, res)=>{

    res.writeHead(200,{'Content-Type':'text/html'});

    res.end('<h1>hello guys is mohammed abboudi here...</h1>');
})

server.listen(9111, ()=>{

    console.log('hello mohammed the server is running...')
});