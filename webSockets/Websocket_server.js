const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({ port: 4000});

WSS.on('connection', (ws)=>{

    console.log('we are connected mohammed your using different port...')

})


 