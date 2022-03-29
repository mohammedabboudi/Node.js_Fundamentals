const { json } = require('express/lib/response');

const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({ port: 4000});

WSS.on('connection', (ws)=>{

    console.log('we are connected mohammed using a different port...')

    ws.on('message', (message) =>{

      console.log(message.toString());

    })

})


 