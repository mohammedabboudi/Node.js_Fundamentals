const { json } = require('express/lib/response');

const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({ port: 4000});

WSS.on('connection', (ws)=>{

    console.log('we are connected mohammed using a different port...')

    ws.on('message', (message) =>{

      
      // broadcasting : "Share data between all the cliets".
      
      WSS.clients.forEach((client)=>{

        client.send(message.toString());

      });

      console.log(message.toString());

    })


})


 