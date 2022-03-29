// Catching the payload or the data that is comming from the server side and handle it.

WSC.onmessage = (payload)=>{

    conversation.innerHTML += `<p>${payload.data}</p>`;
    
}